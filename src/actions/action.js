import axios from 'axios'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT'
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const GET_ALL_FEEDBACKS = 'GET_ALL_FEEDBACKS'
export const CLEAR_STATE='CLEAR STATE'


//  Admin View All Product
const getAllProductAction = (data) => {
    return {
        type: GET_ALL_PRODUCT,
        data
    }
}
export const getAllProducts = () => {
    return (dispatch) => {
        const BASE_URL = 'http://localhost:8080/api/prgr/admin/getallproduct'
        axios.get(BASE_URL)
            .then((response) => {
                dispatch(getAllProductAction(response.data))
                
            })
    }
}
//Admin Add Product
const addProductAction = (data) => {
    return {
        type: ADD_PRODUCT,
        data
    }
}
export const addProduct = (newProduct) => {
    return (dispatch) => {
        const BASE_URL = 'http://localhost:8080/api/prgr/admin/addproduct'
        axios.post(BASE_URL, newProduct)
            .then((response) => {
                alert("Product Sucessfully added")
                dispatch(addProductAction(response.data))
            })
    }
}
//Admin Delete Product
const deleteProductAction = (data) => {
    return {
        type: DELETE_PRODUCT,
        data
    }
}


export const deleteProduct = (productId) => {
    return (dispatch) => {
        const BASE_URL = 'http://localhost:8080/api/prgr/admin/deleteproduct/'
        axios.delete(BASE_URL + productId)
            .then((response) => {
                dispatch(deleteProductAction(response.data))
            }).catch(error=>{
                console.log(error)
            })
                
    }
}

const updateProductAction = (data) => {
    return {
        type: UPDATE_PRODUCT,
        data
    }
}
export const updateProduct = (newProductDetails) => {
    return (dispatch) => {
        const BASE_URL = 'http://localhost:8080/api/prgr/admin/updateproduct'
        axios.put(BASE_URL, newProductDetails)
            .then((response) => {
                dispatch(updateProductAction(response.data))
            })
    }

}

const getAllFeedbackAction = (data) => {
    return {
        type: GET_ALL_FEEDBACKS,
        data
    }
}
export const getAllFeedbacks = () => {
    return (dispatch) => {
        const getUrl='http://localhost:8080/api/prgr/admin/getAllfeedback'
        axios.get(getUrl)
            .then((response) => {
                console.log(response);
                dispatch(getAllFeedbackAction(response.data))
            }).catch(error=>{
                console.log(error)
            })
    }
}



const getAllUsersAction=(data)=>{
    return{
    type:GET_ALL_USERS,
    data
    }
}
export const getAllUsers=()=>{
    return(dispatch)=>{
        const getUserUrl='http://localhost:8080/api/prgr/admin/allusers'
        axios.get(getUserUrl)
        .then((response)=>{
            console.log(response)
            dispatch(getAllUsersAction(response.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}
 
export const DELETE_FEEDBACK = 'DELETE_FEEDBACK'

const deleteFeedbackAction = (data) => {
    return {
        type: DELETE_FEEDBACK,
        data
    }
}
export const deleteFeedback = (feedbackId) => {
    return (dispatch) => {
        const delUrl='http://localhost:8080/api/prgr/admin/deletefeedback/'
        axios.delete(delUrl + feedbackId)
            .then((response) => {
                console.log(response);
                dispatch(deleteFeedbackAction(response.data));
            }).catch(error=>{
                console.log(error)
            })
    }
}
const clearStateAction = (data) => {
    return {
        type: CLEAR_STATE,
        data
    }
}

export const clearState = () => {
    return (dispatch) => {
        dispatch(clearStateAction())
    }
}

