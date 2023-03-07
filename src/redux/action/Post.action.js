import * as ActionTypes from '../ActionTypes'

export const getPostData = () => (dispatch) => {
    try {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.GET_METHODE, payload: data }))
    } catch (error) {
        console.log(error);
    }
}
export const addPost = (data) => (dispatch) => {
    try {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.ADD_METHODE, payload: data }))
            .catch((error) => {
                console.error("Error:", error);
            })
    } catch (error) {

    }
}
export const deleteApiData = (id) => (dispatch) => {
    try {
        fetch('https://jsonplaceholder.typicode.com/posts' + id, {
            method: 'DELETE'
        })
            .then(dispatch({ type: ActionTypes.DELETE_METHODE, payload: id }))

    } catch (error) {

    }
}