import { combineReducers } from 'redux';
import Reducer from '../stores/LoginReducer'
import Adminreducer from '../stores/Adminreducer'
import UserReducer from '../stores/UserReducer'
import UserViewReducer from '../stores/UserViewReducer' 

export default combineReducers({
    Reducer,
    Adminreducer,
    UserReducer,
    UserViewReducer
})