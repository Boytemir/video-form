import axios from "./api"

const AuthService = {
    async userRegister(user) {
        const {data} = await axios.post('/users', {user});
        return data
    },
    async userLogin(user) {
        const {data} = await axios.post('/user/login', {user});
        return data
    },
    async getUser() {},
}

export default AuthService