/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    createUser: function (userData) {
        return axios.post("/api/signup", userData);
    },
    loginUser: function (userData) {
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
    },
    savePresets: function (_id, presetData) { 
        return axios.post("/api/preset/" + _id, presetData)
    },
    getPresets: function (_id) { 
        return axios.get("/api/preset/" + _id)
    }
};