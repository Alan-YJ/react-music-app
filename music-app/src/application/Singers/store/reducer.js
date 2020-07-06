import * as actionTypes from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    singers:[]
})

export default ( state = defaultState, action )=>{
    switch(action.type){
        case actionTypes.CHANGE_SINGERS:
            return state.set('singers',action.data);
        default:
            return state
    }
}

