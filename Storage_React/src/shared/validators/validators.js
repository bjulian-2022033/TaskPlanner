/*--------------------- VALIDACIÓN DE CORREO ---------------------------- */
export const validateEmail = (email)=>{
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}
/*--------------------- VALIDACIÓN DE CORREO ---------------------------- */

/*--------------------- VALIDACIÓN DE NOMBRE DE USUARIO ---------------------------- */
export const valideteUsername = (username)=>{
    const regex = /^\S{3,8}$/
    return regex.test(username)
}
/*--------------------- VALIDACIÓN DE NOMBRE DE USUARIO ---------------------------- */

/*--------------------- VALIDACIÓN DE CONTRASEÑA ---------------------------- */
export const validatePassword = (password)=>{
    const regex = /^\S{6,12}$/
    return regex.test(password)
}
/*--------------------- VALIDACIÓN DE CONTRASEÑA ---------------------------- */

/*--------------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ---------------------------- */
export const validatePassConfirm = (password, passConfirm)=>{
    return password === passConfirm
}
/*--------------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ---------------------------- */

export const validateTitle = (title)=>{
    return title.lenght >=3 && title.lenght <=30
}




/* --------------------- MENSAJES DE VALIDACIÓN DE CAMPOS ------------------------------ */
export const usernameValidationMessage = 'El nombre de usuario debe ser de entre 3 y 8 caracteres, sin espacios.'
export const passwordValidationMessage = 'La contraseña debe tener entre 6 y 12 caracteres, sin espacios'
export const passConfirmValidationMessage = 'Las contraseñas no coinciden'
export const emailValidationMessage = 'Por favor ingresa un correo válido'
export const titleValidationMessage = 'El titulo debe tener entre 3 y 12 caracteres'
export const avatarValidationMessage = 'La URL no tiene un formato valido'
export const descriptionValidationMessage = 'Debe contener entre 10 a 20 caracteres'
/* --------------------- MENSAJES DE VALIDACIÓN DE CAMPOS ------------------------------ */