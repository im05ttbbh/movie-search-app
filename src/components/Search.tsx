import React, { useState } from 'react'

export const Search: React.FC = (props) => {
  const [searchValue, setSearchValue] = useState<string>("")

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault()
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
    </>
  )
}