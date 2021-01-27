import * as actionCreators from '../actions/UserAction'

const initialState = {
    categoryMessage: '',
    productMessage: '',
    categoryList: [],
    productList: [],
    personList: [],
    feedbacksList: [],
    status:0
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.PRODUCT_CATEGORY:
            let category = action.data
            return {
                categoryMessage: "Category feteched",
                categoryList: category
            }
        case actionCreators.PRODUCT_BY_CATEGORY:
            let getProductList = action.data
            console.log(getProductList)
            return {
                productMessage: "Product feteched",
                productList: getProductList
            }
        case actionCreators.ADD_USER:
            let listAfterAdd = action.data
            let userStatus=action.status
            console.log("userStatus:"+userStatus)
            console.log('Addition of User')
            console.log(listAfterAdd)
            return {
                returnedMessage: 'Registered Successfully !! ',
                personList: listAfterAdd,
                status:userStatus
            }
        case actionCreators.CLEAR_STATE:
            return {
                returnedMessage: '',
                personList: []

            }
        case actionCreators.ADD_FEEDBACK:
            let feedbckAfterAddition = action.data
            console.log('Addition of Feedback')
            console.log(feedbckAfterAddition)
            return {
                returnedMessage: 'Successfully !! Added Feedback',
                feedbacksList: feedbckAfterAddition
            }
        case actionCreators.ADD_REVIEW:
            let listAfterReview = action.data
            console.log("review" + JSON.stringify(action.data))
            console.log('Addition of Review/Rate')
            console.log(listAfterReview)
            if (listAfterReview.includes('already')) {
                return {
                    returnedMessage: listAfterReview,
                }
            }
            else{
                return {
                    returnedMessage: 'Successfully !! Added Review/Rate',
                }
            }
        case actionCreators.UPDATE_USER:
            let updatedUser = action.data
            console.log('Updating User')
            console.log(updatedUser)
            return {
                returnedMessage: 'Updated Successfully!!',
                UsersList: updatedUser
            }
        // case actionCreators.GET_PRODUCT_BY_CATEGORY:
        //     //console.log(useraction.type)
        //     //console.log(useraction.data.productsList)
        //     let listOfProductByCategory = UserAction.data.productList
        //     let resMessageProduct = UserAction.data.resMessage
        //     console.log(UserAction.data.productList)
        //     console.log('List of Product by Category')
        //     console.log(listOfProductByCategory)
        //     if (listOfProductByCategory.length === 0) {
        //         resMessageProduct = 'No Product Found By this Category'
        //     }
        //     return {
        //         returnedMessage: resMessageProduct,
        //         productList: listOfProductByCategory
        //     }

        case actionCreators.GET_USER:
            let UserObj = action.data
            console.log(action.data)
            console.log('Get User')
            console.log(UserObj)
            return {
                User: UserObj
            }

        default:
            return state
    }

}







export default UserReducer;