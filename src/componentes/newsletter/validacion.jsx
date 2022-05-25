export function validacion(input) {

    let errors = {};
    var emailCorrect = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(!input.email){
        errors.email ="Por favor ingrese el correo"
    }

    return errors;
}