
export default async function getAllMovies (pageNo: number){
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2af133461cc649b3d75d39cd9801f77d&page=${pageNo}`)
    const result = await res.json()
    return result
  } catch (error) {
    console.log(`error`, error)
  }
}