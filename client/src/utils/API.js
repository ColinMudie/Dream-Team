/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    createUser: function (userData) {
        console.log("API.js createUser");
        return axios.post("/api/signup", userData);
    },
    loginUser: function (userData) {
        console.log("API.js loginUser");
        return axios.post("/api/login", userData)
        .then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        })
    },
    logout: function () { 
        localStorage.removeItem("user");
    }
};