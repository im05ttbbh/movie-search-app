export type MovieObj = {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

export const apiKey = process.env.REACT_APP_MOVIE_API_KEY
