module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const erros = {}
    if(username.trim() === ''){
        erros.username = 'Username must not be empty'
    }
    if(email.trim() === ''){
        erros.email = 'Email must not be empty'
    } else {
        const regEx = /^([0-9a-zA-zA]([-.\w])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]z,)+[a-zA-Z] {2,9})$/
        if(!email.match(regEx)) {

        }
    }
    if(password.trim() === '') {
        erros.password = 'Password must not be empty'
    } else if(password !== confirmPassword) {
        erros.confirmPassword = 'Passwords must match'
    }

    return {
        erros,
        valid: Object.keys(erros).length < 1
    }
}

module.exports.validateLoginInput = (username, password) => {
    const erros = {}
    if(username.trim() === ''){
        erros.username = 'Username must not be empty'
    }
    if(password.trim() === ''){
        erros.password = 'Password must not be empty'
    }
    return {
        erros,
        valid: Object.keys(erros).length < 1
    }
}