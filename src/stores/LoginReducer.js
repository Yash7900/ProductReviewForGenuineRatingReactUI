import * as actionCreators from '../actions/LoginAction'

const initialState = {
    returnedMessage: '',
    personList:[],
    status:0 
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.VALIDATE_LOGIN:
            let loginmsg = action.data.resMessage
            let person=action.data.personList
            let loginStatus=action.data.status
            console.log(action.data)
            console.log(loginStatus)
            console.log(person)
            
                return {
                    returnedMessage: loginmsg,
                    personList:person,
                    status:loginStatus
                } 
        case actionCreators.CLEAR_STATE:
            return {
                returnedMessage:'' ,
                personList:[]
               
            }

        default:
            return state
    }
}


export default Reducer;