import { useDispatch } from "react-redux";

const verifyLogin = (dispatch)=>{

    if(sessionStorage.getItem("login") != undefined){
        console.log(sessionStorage.getItem("login"));
        var login = JSON.parse(sessionStorage.getItem("login"));
        var dataToUpdate = {type:"SIGN_IN", data:login};
        dispatch(dataToUpdate);
    }

}

export default verifyLogin;