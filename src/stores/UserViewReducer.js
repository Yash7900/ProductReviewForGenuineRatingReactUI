import * as actionCreators from '../actions/UserAction'

const initialState = {
    returnedMessage: 'Data not found yet',
    productList: []
}

const UserViewReducer = (state = initialState, UserAction) => {

    switch (UserAction.type) {
        case actionCreators.GET_PRODUCT_BY_CATEGORY:
            //console.log(useraction.type)
            //console.log(useraction.data.productsList)
            let listOfProductByCategory = UserAction.data.productList
            let resMessageProduct=UserAction.data.resMessage  
            console.log(UserAction.data.productList)    
            console.log('List of Product by Category')
            console.log(listOfProductByCategory)
            if(listOfProductByCategory.length===0){
                resMessageProduct='No Product Found By this Category'
            }
            return {
                returnedMessage: resMessageProduct,
                productList: listOfProductByCategory
            }
        case actionCreators.CLEAR_STATE:
            return {
                returnedMessage: '',
                productList: [],
            }

        default:
            return state
    }

}

export default UserViewReducer;


