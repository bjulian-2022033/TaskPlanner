import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:2656/',
    timeout: 1000
})

apiClient.interceptors.request.use(
    (config)=>{
        const userDetails = localStorage.getItem('user')
        if(userDetails){
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err)=> Promise.reject
)

export const registerRequest = async(user)=>{
    try{
        return await apiClient.post('/auth/register', user)
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const loginRequest = async(user)=>{
    try{
        return await apiClient.post('/auth/login', user)
    }catch(err){
        return {
            error: true,
            err
        }
    }
}



