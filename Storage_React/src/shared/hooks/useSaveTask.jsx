import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const useSaveTask = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const saveTask = async(task) =>{
        setIsLoading(true)
        const response = await saveTaskRequest(task)
        setIsLoading(false)
        if(response.error){
            return alert('Error al guardar la tarea')
        }
        navigate('/task')

    }

    return {
        isLoading,
        saveTask
    }
}