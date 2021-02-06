import React, { useContext } from 'react'
import { StateContext } from './GlobalState'

const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"

export const Movie: React.FC = () => {
  const { state } = useContext(StateContext)
  const { loading, errorMessage, movies } = state

  return (
    <div className="movies">
      {loading ? (
        <div style={{ margin: "auto" }}>loading...</div>
      ) : (
        errorMessage ? <div className="errorMessage">{errorMessage}</div>
        :
        movies && movies.map((movie, index) => {
          return (
            <div className="movie" key={`${index}-${movie.Title}`}>
              <h2>{movie.Title}</h2>
              <div>
                <img
                  width="200"
                  alt={`The movie titled: ${movie.Title}`}
                  src={movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster}
                />
              </div>
              <p>{movie.Year}</p>
            </div>
          )
        })
      )}
    </div>    
  )
}