

function ProbrValidarNombre(){
    console.assert(
        Validarnombre(``) === `este campo debe tener almenos un caracter`,
        `la funcion validar nombre fallo con un string vacio`

    )

    console.assert(
        Validarnombre(`ñflasdfkldfkasljdfakjladfsñladfsdfsñldfasdfasdñflasdfasñldfasñldfaskldfasdfkasñldfaskjdfasdfas`) === `este campo debe tener menos de 50 caracteres`,
        `la funcion validar nombre no valido que el nobre tenga menos de 50 caracteres`

    )

    console.assert(
        Validarnombre(`11213`) === `el campo nombre solo acepta letras`,
        `la funcion validar nobre fallo porque insertaste numeros`
    )

    console.assert(
        Validarnombre(`fabricio`) === true , `validarnombre fallo con un nombre valido`
        ) 
    
    
}

function probarValidarCiudad(){
    console.assert(
        ValidarCiudad(``) === `este campo debe tener almenos un caracter`,
        `la funcion validarciudad fallo con un string vacio`
    )

    console.assert(
        ValidarCiudad(`chaco`) === true , `la funcion vlaidarciudad fallo con una ciudad valida`
    )
}

function ProbarValidarDescripcionRegalo(){
    console.assert(
        ValidarDescripcionRegalo(``) === `este campo debe tener almenos un caracter`,
        `la funcion validardescripcionregalo fallo con un string vacio`
    
    )

    console.assert(
        ValidarDescripcionRegalo(`...,,`) === `el campo de descripcion solo puede tener numeros y letras`,
        `el campo solo acepta numeros y letras`
    )

    console.assert(
        ValidarDescripcionRegalo(`quiero`) === true , `validar descripcion regalo fallo con un string valido`
    )
    
}

ProbrValidarNombre()
probarValidarCiudad()
ProbarValidarDescripcionRegalo()