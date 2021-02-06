import React, { useContext, useState } from 'react';
import { fetchMovie } from '../lib/axios';
import { StateContext, ActionType, GlobalState } from './GlobalState';
import { Movie } from './Movie';

const SearchComponent: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("")
  const { dispatch } = useContext(StateContext) 
  
  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)

  const resetInputField = () => setSearchValue("")

  const callSearchFunction = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault()
    dispatch({ 
        type: ActionType.SEARCH_MOVIES_REQUEST,
        loading: true
    })

    fetchMovie(searchValue).then(result => { 

      console.log(result?.data)
      

      if (result?.data.Response === "True") {
        dispatch({
          type: ActionType.SEARCH_MOVIES_SUCCESS,
          payload: result.data.Search
        })
      } else {
        dispatch({
          type: ActionType.SEARCH_MOVIES_FAILURE,
          errorMessage: result?.data.Error,
        })
      }
    })
    resetInputField()
  }

  return (
    <>
      <p className="App-intro">Search movies!!!!!</p>
      <form className="search">
        <input
          value={searchValue}
          onChange={(e) => handleSearchValue(e)}
          type="text"
        />
        <input onClick={(e) => callSearchFunction(e)} type="submit" value="SEARCH" />
      </form>
      <Movie />
    </>
  )
}


export const Search: React.FC = () => { 
  return (
    <GlobalState>
      <SearchComponent />
    </GlobalState>
  )
}