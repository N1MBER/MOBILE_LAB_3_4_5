export const SET_COUNT = 'SET_COUNT';
export const SET_COLOR = 'SET_COLOR';
export const ADD_TASK = 'ADD_TASK';

export const setCount = (data) => {
    return {
        type: SET_COUNT,
        data
    }
}
export const setColor = (data) => {
    return {
        type: SET_COLOR,
        data
    }
}

export const addTask = (data) => {
    return {
        type: ADD_TASK,
        data
    }
}

