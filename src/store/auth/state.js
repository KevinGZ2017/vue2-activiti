const isLoggedIn = function() {
    const token = localStorage.getItem('user');

    if (token) {
        try {
            const payload = JSON.parse(window.atob(token.split('.')[1]));

            if( payload.exp > Date.now() / 1000 ){
                return token
            }else{
                localStorage.removeItem('user')
            }

        } catch (e) {
            console.log(e);
            return false
        }

    } else {
        return false
    }
};

module.exports = {

    token: isLoggedIn() || null,

    info: null
};