import {create} from "zustand";
import {toast} from "react-toastify";
import { axiosInstance } from "../lib/axios.jsx";

export const userAuthStore = create((set) => ({
    Authuser: null,
    isLogined: false,
    isSignedUp: false,
    isUpdateProfile: false,
    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/api/v1/user/check");
            set({Authuser: res.data});
        } catch (error) {
            console.log(error);
            set({Authuser: null});
        } finally {
            set({isCheckingAuth: false});
        }
    },

    signup: async (data) => {
        let res;
        set({isSignedUp: true});

        try {
            res = await axiosInstance.post("/api/v1/user/signup", data);
            set({Authuser: res.data});
            console.log(res);
            toast.success("Signup successful");
        } catch (error) {
            console.log(error);
            // Fixed typo in error.response
            if(error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Something went wrong");
            }
        } finally {
            set({isSignedUp: false});
        }
    },

    signin: async (data) => {
        let res;
        // Should set isLogined to true at start
        set({isLogined: true});

        try {
            res = await axiosInstance.post("/api/v1/user/signin", data);
            console.log(res);
            set({Authuser: res.data});
            toast.success("Signin successfully");
        } catch (error) {
            console.log(error);
            // Fixed typo in error.response
            if(error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Something went wrong");
            }
        } finally {
            set({isLogined: false});
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/api/v1/user/logout");
            set({Authuser: null});
            toast.success("Logout Successfully");
        } catch (error) {
            console.log(error);
            // Fixed typo in error.response
            if(error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Something went wrong");
            }
        }
    },

    updateProfile: async (data) => {
        set({isUpdateProfile: true}); // Should set to true at start
        try {
            await axiosInstance.post("/api/v1/user/", data);
            toast.success("Profile updated successfully"); // Added success message
        } catch (error) {
            console.log(error);
            // Fixed typo in error.response
            if(error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Something went wrong");
            }
        } finally {
            set({isUpdateProfile: false});
        }
    }
}));
