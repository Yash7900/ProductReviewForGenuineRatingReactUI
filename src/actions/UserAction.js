import axios from 'axios'

export const PRODUCT_CATEGORY = 'PRODUCT_CATEGORY'
export const PRODUCT_BY_CATEGORY = 'PRODUCT_BY_CATEGORY'
export const ADD_USER = 'ADD_USER'
export const CLEAR_STATE = 'ClEAR STATE'
export const ADD_FEEDBACK = 'ADD_FEEDBACK'
export const GET_PRODUCT_BY_CATEGORY = 'GET_PRODUCT_BY_CATEGORY'
export const ADD_REVIEW='ADD_REVIEW'
export const UPDATE_USER='UPDATE_USER'
export const GET_USER='GET_USER'
const BASE_URL = 'http://localhost:8080/api/prgr/user'



const getUserAction=(data)=>{
    return{
    type:GET_USER,
    data
    }
}
export const getUser=(personId)=>{
    return(dispatch)=>{
        const getUserUrl='http://localhost:8080/api/prgr/user/getPersonById/'
        axios.get(getUserUrl+personId)
        .then((response)=>{
            console.log(response)
            dispatch(getUserAction(response.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}
const ProductCategoryAction = (data) => {
    return {
        type: PRODUCT_CATEGORY,
        data
    }
}

export const GetCategory = () => {
    return (dispatch) => {
        axios.get(BASE_URL + '/category')
            .then((response) => {
                // console.log(response)
                dispatch(ProductCategoryAction(response.data))
            })
    }
}

const ProductByCategoryAction = (data) => {
    return {
        type: PRODUCT_BY_CATEGORY,
        data
    }
}

export const SelectProductByCategory = (category) => {
    return (dispatch) => {
        axios.get(BASE_URL + '/getproductbycategory/' + category)
            .then((response) => {
                console.log(response)
                dispatch(ProductByCategoryAction(response.data))
            })
    }
}

const addUserAction = (data) => {
    return {
        type: ADD_USER,
        data
    }
}
export const addUser = (User) => {
    return (dispatch) => {
        const URL = 'http://localhost:8080/api/prgr/user/addperson'
        axios.post(URL, User)
            .then((response) => {
                console.log(response)
                dispatch(addUserAction(response.data))
            }).catch(error => {
                alert("Registeration Failed !!!")
                console.log(error);
            })
    }
}

const updateUserAction = (data) => {
    return {
        type: UPDATE_USER,
        data
    }
}
export const updateUser = (user) => {
    return (dispatch) => {
        const URL='http://localhost:8080/api/prgr/user/updateperson'
        axios.put(URL, user)
            .then((response) => {
                alert("User Profile Updated Successfully..")
                console.log(response)
                dispatch(updateUserAction(response.data))
            }).catch(error=>{
                console.log(error);
            })
    }
}

const addFeedbackAction = (data) => {
    return {
        type: ADD_FEEDBACK,
        data
    }
}
export const addFeedback = (feedback) => {
    return (dispatch) => {
        const URL = 'http://localhost:8080/api/prgr/user/addfeedback'
        axios.post(URL, feedback)
            .then((response) => {
                alert("Feedback Sucessfully added")
                console.log(response)
                dispatch(addFeedbackAction(response.data))
            }).catch(error => {
                console.log(error);
            })
    }
}

const getProductByCategoryAction = (data) => {

    return {

        type: GET_PRODUCT_BY_CATEGORY,

        data

    }

}
//function to get product by category
export const getProductByCategory = (category) => {
    return (dispatch) => {
        let URL = `http://localhost:8080/api/prgr/admin/getproductbycategory/${category}`
            axios.get(URL)    
            .then((response) => {
                console.log(response)
                dispatch(getProductByCategoryAction(response.data))
                return response.productList
            }).catch((error)=>{
                alert("No Product Find by this category!!!")
            })
    }
}

//Add Review for product
const submitReviewAction = (data) => {
    return {
        type: ADD_REVIEW,
        data
    }
}
export const submitReview = (userId,productId,Review) => {
    return (dispatch) => {
        const URL='http://localhost:8080/api/prgr/user/addreviewforproduct/'
        axios.post(URL+userId+'/product/'+productId, Review)
            .then((response) => {
                alert("Review/Rate Sucessfully added")
                console.log(response)
                dispatch(submitReviewAction(response.data))
            }).catch(error=>{
                console.log(error);
            })
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