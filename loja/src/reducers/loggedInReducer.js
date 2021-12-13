const loggedInReducer = ( state = false, action) =>{

    switch(action.type){
        case 'SIGN_IN':
            return action.data;
        default:
            return state;    
    }

}

export default loggedInReducer;