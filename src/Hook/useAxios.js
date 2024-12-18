import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const instance = axios.create({
    baseURL: `${import.meta.env.VITE_URL}`,
    withCredentials: true,
})

function useAxios() {

    const { signOutUser } = useAuth();

    useEffect(() => {
        instance.interceptors.response.use(res => {
            return res;
        }, error => {
            if (error.status === 401 || error.status === 403) {
                signOutUser()
                    .then(() => {
                        console.log('Logged Out user !')
                    }).catch((err) => {
                        console.log(err);
                    })
            }
            return Promise.reject(error);
        })
    }, [])

    return instance;
}

export default useAxios
