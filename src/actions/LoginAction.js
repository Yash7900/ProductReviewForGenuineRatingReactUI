import axios from 'axios'

export const VALIDATE_LOGIN = 'VALIDATE_LOGIN'
export const USER_LOGIN = 'USER_LOGIN'
export const CLEAR_STATE = 'CLEAR_STATE'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

const BASE_URL = 'http://localhost:8080/api/prgr'

const validateLoginAction = (data) => {
    return {
        type: VALIDATE_LOGIN,
        data,
        status:0
    }
}

export const validateLogin = (credentials) => {
    console.log(credentials)
    if (credentials.login === 'Admin') {
        return (dispatch) => {
            axios.post(BASE_URL + '/admin', credentials)
                .then((response) => {
                    
                    dispatch(validateLoginAction(response.data))
                })
                .catch((error)=>{
                    console.log(error)
                    alert('Check Username & Password!!')
                    dispatch(validateLoginAction(error,404))

                    setTimeout(() => {
                        dispatch(validateLoginAction(error,0))
                            
                    }, 1500);
                })
        }
    }
    else {
        return (dispatch) => {
            axios.post(BASE_URL + '/user', credentials)
                .then((response) => {
                    // console.log(response)
                    dispatch(validateLoginAction(response.data))
                })
                .catch((error)=>{
                    console.log(error)
                })
        }

    }
}

const clearStateAction = (data) => {
    return {
        type: CLEAR_STATE,
        data
    }
}

//clear state function
export const clearState = () => {
    return (dispatch) => {
        dispatch(clearStateAction())
    }
}