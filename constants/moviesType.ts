export interface MovieObject {
  id?: number | any,
  title : string | undefined,
  overview: string | undefined,
  release_date: string | undefined,
  poster_path: string | undefined,
  vote_average: number | undefined,
  favorite: boolean
}