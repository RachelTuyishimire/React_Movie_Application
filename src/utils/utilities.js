const BASE_URL = process.env.REACT_APP_BASE_URL
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN


export const getMovies = async () =>{
    try{
        const response = await fetch(`${BASE_URL}/3/movie/popular`,{
            method: `GET`,
            headers:{
                Authorization: `Bearer ${ACCESS_TOKEN}`,
                'content-type': "application/json"
            }
        })
        const result = await response.json()
        return result
    }
    catch(error){
        return error.message
    }
}

export const getCategory = async (category) => {
    try{
        const response = await fetch(`${BASE_URL}/3/discover/movie?with-genres=${category}`,{
            method: `GET`,
            headers:{
                Authorization:`Bearer ${ACCESS_TOKEN}`
            }
        })
        const result = await response.json()
        return result
    }
    catch (error){
        return error.message
    }
}