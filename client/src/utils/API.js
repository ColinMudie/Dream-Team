/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    createUser: function(userData) {
        return axios.post("/api/signup", userData);
    },
    loginUser: function(userData){
        return axios.post("/api/login", {
            email: userData.email,
            password: userData.password
        })
    }
};