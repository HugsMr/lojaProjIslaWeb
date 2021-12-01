const loggedInAction = (state = false) => {

    if (state) {
        return { type: "loggedIn" };
    } else {
        return { type: "loggedOut" };
    }

}

export default loggedInAction;