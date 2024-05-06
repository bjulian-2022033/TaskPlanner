import { useState } from "react"

export const Task = ({tasks = []}) => {
    const { updateTask } = useUpdateTask()

    const [task, setTask] = useState(
        {
            taskname: '',
            description: '',
            startDate: '',
            dateClose: '',
            state: '',




        }
    )

    return (
        <>

<form onSubmit={onFormSubmit}>
				<div className="form-container">
					<div className='form-column-1'>

						<h4>Tarea:</h4>
						<input
							type="text"
							className="input-add"
							name="description"
							value={description}
							onChange={onInputChange}
							placeholder="Añade una tarea."
						/>

						<h4>Nombre y Apellido:</h4>
						<input
							type="text"
							className="input-add"
							name="name"
							value={name}
							onChange={onInputChange}
							placeholder="Añade un Nombre y Apellido."
						/>

					</div>

					<div className='form-column-2'>

						<h4>Inicio:</h4>
						<input
							type="date"
							className="input-add"
							name="startDate"
							value={startDate}
							onChange={onInputChange}
							placeholder="Fecha de Inicio"
						/>

						<h4>Vencimiento:</h4>
						<input
							type="date"
							className="input-add"
							name="finishDate"
							value={finishDate}
							onChange={onInputChange}
							placeholder="Fecha de Vencimiento"
						/>

						<h4>Descripción:</h4>
						<input
							type="text"
							className="input-add"
							name="descri"
							value={descri}
							onChange={onInputChange}
							placeholder="Añade una nota."
						/>
					</div>
				</div>

				<button className="btn-add" type="submit">
					Agregar Tarea
				</button>
			</form>
        
        </>
    )
}

