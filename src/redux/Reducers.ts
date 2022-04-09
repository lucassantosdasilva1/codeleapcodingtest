//ACTIONS TYPE
const CHANGE_USER = "CHANGE_USER";
const LOGOUT = 'LOGOUT';

//ACTIONS
export function changeUser(user : string){
    return {
        type: CHANGE_USER,
        info: "Change the current user",
        payload: user
    }
}

function logout(){
   return {
       type: LOGOUT,
       info: "logout the current user"
   }
}


const initialState = {
    user: null,
    isLogged: false
 }

 // Reducers
export function userReducer(prevState = initialState, action){
    switch(action.type){
        case CHANGE_USER:
            return {
                ...prevState,
                user: action.payload,
                isLogged: true
            }
        case LOGOUT:
            return {
                ...prevState,
                user: '',
                isLogged: false
            }
        default:
            return prevState
    }
}