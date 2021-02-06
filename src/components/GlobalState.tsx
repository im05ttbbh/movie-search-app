import React, { useReducer } from "react"
import { MovieObj } from "../lib/entity"

const initialState = {
  loading: false,
  movies: [],
  errorMessage: ""
}

type State = {
  loading: boolean
  movies: MovieObj[]
  errorMessage: string
}

type StateContextType = {
  state: State
  dispatch: React.Dispatch<SearchActionType>
}

export const StateContext = React.createContext({} as StateContextType)

export enum ActionType {
  SEARCH_MOVIES_REQUEST = "SEARCH_MOVIES_REQUEST",
  SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS",
  SEARCH_MOVIES_FAILURE = "SEARCH_MOVIES_FAILURE"
}

type RequestSearchType = { type: ActionType.SEARCH_MOVIES_REQUEST, loading: boolean }
type SuccessSearchType = { type: ActionType.SEARCH_MOVIES_SUCCESS, payload: MovieObj[] }
type FailureSearchType = { type: ActionType.SEARCH_MOVIES_FAILURE, errorMessage: string }

type SearchActionType = RequestSearchType | SuccessSearchType | FailureSearchType

const reducer = (state: State, action: SearchActionType): State => {
  switch (action.type) {
    case ActionType.SEARCH_MOVIES_REQUEST:
      return {
          ...state,
          loading: true,
      }
    case ActionType.SEARCH_MOVIES_SUCCESS:
      return {
          ...state,
          loading: false,
          movies: action.payload
      }   
    case ActionType.SEARCH_MOVIES_FAILURE:
      return {
          ...state,
          loading: false,
          errorMessage: action.errorMessage,
      }
    default:
      return state 
  }
}

export const GlobalState: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StateContext.Provider>
  )
}