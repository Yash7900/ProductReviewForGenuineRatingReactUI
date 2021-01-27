import * as actionCreators from '../actions/action'
// import * as userActionCreators from '../actions/useraction'

const initialState = {
    returnedMessage: 'Data not found yet',
    productList: [],
    feedbacksList: [],
      UsersList:[],
      User:[]
}

const Adminreducer = (state = initialState, action) => {
    switch (action.type) {
        //  Admin Product View
        case actionCreators.GET_ALL_PRODUCT:
            let listOfProduct = action.data.productList
            let resMessageProduct = action.data.resMessage
            console.log(action.data.productList)
            console.log('List of Product')
            console.log(listOfProduct)
            if (listOfProduct.length === 0) {
                resMessageProduct = 'No Data Found'
            }
            return {
                returnedMessage: resMessageProduct,
                productList: listOfProduct
            }

        // Admin Add Product
        case actionCreators.ADD_PRODUCT:
            let messageAfterAdditionOfProduct = action.data
            let listAfterAdditionOfProduct = action.data
            console.log('Addition of Product')
            console.log(listAfterAdditionOfProduct)
            console.log(messageAfterAdditionOfProduct)
            return {
                returnedMessage: 'Successfully',
                productList: listAfterAdditionOfProduct
            }

        // Admin Delete Product
        case actionCreators.DELETE_PRODUCT:
            let listofproduct = action.data.productsList
            let resMsgp = action.data.resMessage
            console.log(resMsgp)
            console.log(listofproduct)
            if (listofproduct.length === 0) {
                resMsgp = 'After Deletion, No Data Found'
            }
            return {
                returnedMessage: resMsgp,
                productList: listofproduct

            }

        case actionCreators.UPDATE_PRODUCT:
            let messageAfterUpdation = action.data.resMessage
            let listAfterUpdation = action.data.product
            console.log('Updating Product')
            console.log(listAfterUpdation)
            console.log(messageAfterUpdation)
            return {
                returnedMessage: messageAfterUpdation,
                productList: listAfterUpdation

            }
        case actionCreators.GET_ALL_FEEDBACKS:
            console.log(action.data.feedbackList)
            let listOfFeedback = action.data
            let resMsgFeedback = action.data.resMessage
            console.log('List of Feedbacks')
            console.log(listOfFeedback)
            if (listOfFeedback.length === 0) {
                resMsgFeedback = 'No Data Found'
            }
            return {
                returnedMessage: resMsgFeedback,
                feedbacksList: listOfFeedback
            }
            case actionCreators.DELETE_FEEDBACK:
                let listOfAfterDeletion = action.data.feedbackList
                let resMsg=action.data.resMessage
                console.log(resMsg)
                console.log(listOfAfterDeletion)
                if(listOfAfterDeletion.length===0){
                resMsg='After Deletion, No Data Found'
                }
                return {
                    returnedMessage: resMsg,
                    feedbacksList: listOfAfterDeletion
                }   
        case actionCreators.GET_ALL_USERS:
            let listOfUsers = action.data.personList
            let resMsgUser = action.data.resMessage
            console.log(action.data)
            console.log('List of Users')
            console.log(listOfUsers)
            if (listOfUsers.length === 0) {
                resMsgUser = 'No Data Found'
            }
            return {
                returnedMessage: resMsgUser,
                UsersList: listOfUsers
            }
        case actionCreators.CLEAR_STATE:
            return {
                returnedMessage: '',
                productList: [],
                feedbacksList: [],
                UsersList:[],
                User:[]
            }

        default:
            return state
    }

}
export default Adminreducer;