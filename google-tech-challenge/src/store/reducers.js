import { combineReducers } from 'redux';
import * as type from './types';



function submitForm(state={},action){
    switch(action.type){
        case(type.SEND_FORM_SUCCESS):
           return({
               ...action.payload
           })
        case(type.SEND_FORM_FAILURE):
            return({
                ...action.payload
            })
        default: 
            return state;
    }
}


export const rootReducer = combineReducers({
    submitForm
})