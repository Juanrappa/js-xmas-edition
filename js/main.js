function Validarnombre(nombre){
    if(nombre.length === 0){
        return `este campo debe tener almenos un caracter`
    }
    if(nombre.length > 50){
        return `este campo debe tener menos de 50 caracteres`
    }
    if(!/^[a-z]+/i.test(nombre)){
        return `el campo nombre solo acepta letras`
    }
    return ""
}

function ValidarCiudad(ciudad){
    if(ciudad.length === 0){
        return `este campo debe tener almenos un caracter`
    }
    return ""
}

function ValidarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0){
        return `este campo debe tener almenos un caracter`
    }
    else if(!/^[a-z0-9]+$/i.test(descripcionRegalo)){
        return `el campo de descripcion solo puede tener numeros y letras`
    }
    return ""
}

function ocultarFormulario(cantidadErrores){
    const $exito = document.querySelector("#exito")
    if(cantidadErrores === 0){
        $form.className = "oculto"
        $exito.className = ""
    }
}

function ValidarFormulario(event){
    const $form = document.querySelector("#carta-a-santa")

    const nombre = $form.nombre.value
    const ciudad = $form.ciudad.value
    const descripcionRegalo = $form.descripcionRegalo.value

    const errorNombre = Validarnombre(nombre)
    const errorCiudad = ValidarCiudad(ciudad)
    const errorDescripcionRegalo = ValidarDescripcionRegalo(descripcionRegalo)

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        descripcionRegalo: errorDescripcionRegalo
    }
    
    manejarErrores(errores)

    event.preventDefault()

}



function manejarErrores(errores){
    
    const keys = Object.keys(errores)
    const $errores = document.querySelector(`#errores`)
    const errrorli = document.querySelectorAll("#errorli")
    let cantidadErrores = 0

    if(errrorli.length > 0){
        for(i = 0 ; i < errrorli.length ; i++){
            $errores.removeChild($errores.lastChild)
        }
    }

    keys.forEach(function(key){
        const error = errores[key]
        
        if(error){
            cantidadErrores++
            $form[key].className = "error"
            
            const $error = document.createElement(`li`)
            $error.id = "errorli"
            $error.innerText = error
            $errores.appendChild($error)
        }
        else{
            $form[key].className = ""
        }
    })
    
    ocultarFormulario(cantidadErrores)

    if(cantidadErrores === 0){
        setTimeout(()=>{ window.location.href = "file:///home/juan/Escritorio/programacion/argentina-programa/js-xmas-edition/wishlist.html"},5000)
    }
}



const $form = document.querySelector(`#carta-a-santa`)
$form.onsubmit = ValidarFormulario

