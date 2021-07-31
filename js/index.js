const inputUser = document.getElementById('Username')
const inputEmail = document.getElementById('Email')
const inputPassword = document.getElementById('Password')
const buttonSend = document.getElementById('button-form')
const ExpresionRegular = {

	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.

}

buttonSend.addEventListener('click',(e)=>{

    let MensajeError = document.querySelector('.mensaje-error')
    let form = document.querySelector('.form')

    e.preventDefault()

    if((ExpresionRegular.usuario.test(inputUser.value)) == true && 
        (ExpresionRegular.correo.test(inputEmail.value)) == true &&
        (ExpresionRegular.password.test(inputPassword.value)) == true) {

            form.reset()

    }   else{
        MensajeError.style.display = 'block'

    }

})

