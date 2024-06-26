

function authHeader() {
    // setting the token in the current user that logged in

    const userToken = JSON.parse(sessionStorage.getItem("token"));

    if(userToken) {
        return { Authorization: `bearer ${userToken}` };
    } else {
        return {};
    }
}

export default authHeader;