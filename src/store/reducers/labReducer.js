import {ADD_TASK, SET_COLOR, SET_COUNT} from '../actions/labActions';


const initialState = {
   count: 0,
    color: '#F00',
    tasks: []
}

export function labReducer(state  = initialState,action) {
    const {type, data} = action
    switch (type) {
        case ADD_TASK:
            let arr = state.tasks ? [...state.tasks]: [];
            arr.push(data);
            return {...state, tasks: arr};
        case SET_COUNT:
            return {...state, count: data}
        case SET_COLOR:
            return {...state, color: data}
        default:
            return state;
    }
}
