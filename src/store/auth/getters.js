module.exports = {

    getToken(state) {
       return state.token;
    },

    getAuth(state) {
        return state.info;
    }
};