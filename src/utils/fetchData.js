export const excerciseOptions  = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '8e2b30ce8amsh4f9f3d5ec0e3d9bp1d4959jsne90b10cba86e',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };



export const fetchData =  async (url , options) => {
    const response = await fetch(url , options) ; 
    const data  = await response.json() ;
    return data ; 
}