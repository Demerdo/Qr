import axios from 'axios'

export const register = newUser => {
    return axios
        .post('https://iotdoor1.herokuapp.com/users/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log('Registered')
        })
}

export const login = user => {
    return axios
        .post('https://iotdoor1.herokuapp.com/users/login', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const getProfile = user => {
    return axios
        .get('https://iotdoor1.herokuapp.com/users/profile', {
            //headers: { Authorization: ` ${this.getToken()}` }
        })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}