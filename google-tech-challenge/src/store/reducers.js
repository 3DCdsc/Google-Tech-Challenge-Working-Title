import { combineReducers } from 'redux';
const USER_STATE_CHANGED = 'USER_STATE_CHANGED';
const AGE_STATE_CHANGED = 'AGE_STATE_CHANGED';
const SKILL_STATE_CHANGED = 'SKILL_STATE_CHANGED';
const ESSAY_STATE_CHANGED = 'ESSAY_STATE_CHANGED';

function step1Reducer(state = {}, action) {
    if(action.type===USER_STATE_CHANGED){
        return {
            name: action.name,
        };
    }
    return state;
}

function step2Reducer(state = {}, action) {
    if(action.type===AGE_STATE_CHANGED){
        return {
            age: action.age,
        };
    }
    return state;
}

function step3Reducer(state = {}, action) {
    if(action.type===SKILL_STATE_CHANGED){
        return {
            skill: action.skill,
        };
    }
    return state;
}

function step4Reducer(state = {}, action) {
    if(action.type===ESSAY_STATE_CHANGED){
        return {
            essay: action.essay,
        };
    }
    return state;
}

export const rootReducer = combineReducers({
    step1Reducer,
    step2Reducer,
    step3Reducer,
    step4Reducer,
})