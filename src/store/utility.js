export const updateObject = (state, updatedObject) => {
    return ({
        state,
        ...updatedObject
    })
}

export const BACKEND_URL = 'http://127.0.0.1:8000/'
//export const BACKEND_URL = 'https://kazmarketbackend.herokuapp.com/'
//export const BACKEND_URL_NO_LEADING_SLASH = 'http://127.0.0.1:8000'