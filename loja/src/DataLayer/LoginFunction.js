import axios from "axios";
import loggedInAction from '../actions/';

const LoginDataLayer = (userData) => {
    return new Promise((resolve, reject) => {
        axios.post("http://afmiguez.me:9004/conta/login", userData)
            .then((response) => {
                var customer = new Object();
                customer["username"] = userData.username;
                customer["token"] = response.data.token;
                customer["tokenType"] = response.data.tipo;

                resolve(customer);

            })
            .catch((error) => {
                reject(error);
            })
    })
}

export default LoginDataLayer;