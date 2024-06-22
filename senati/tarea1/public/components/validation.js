function cleanTextArea(){
    let controlador_area_HTML = document.querySelector(".controlador_area")
    controlador_area_HTML.value = ""
}
function formValidation(e){
    const controlador_HTML = document.querySelectorAll(".controlador")
    let statusForm = true
    let show_message_HTML = document.getElementById("show_message")
    controlador_HTML.forEach((currentValue)=>{
        let data = currentValue.value
        if(data.length <= 0){
            show_message_HTML.textContent = "Por favor complete todos los campos"
            show_message_HTML.classList.add("show_message-error")
            console.log("Por favor debe llenar todo el formulario")
            statusForm = false
        }else{}
    })
    if(!statusForm){
        e.preventDefault()
    }else{
        show_message_HTML.textContent = "Datos completos"
        show_message_HTML.classList.remove("show_message-error")
        show_message_HTML.classList.add("show_message-success")
        e.preventDefault()
    }
}

window.addEventListener("DOMContentLoaded",function(){
    cleanTextArea()
    const submitForm = document.getElementById("form_contacto")
    submitForm.addEventListener("submit", formValidation)
});