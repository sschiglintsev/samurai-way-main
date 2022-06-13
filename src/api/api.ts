import axios from "axios"
import {API_KEY} from "../Constants/base";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": API_KEY
    }
    }
)

export const usersAPI = {
    getUsers  (pageSize: number, currentPage: number) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}` )
            .then(response => response.data)
    },
    followUser  (id: string) {
        return instance.post(`follow/` + id, {})
            .then(response => response.data)
    },
    unFollowUser (id: string) {
        return instance.delete(`follow/` + id)
            .then(response => response.data)
    }
}

export const headerAPI = {
    getAuthMe () {
        return instance.get(`auth/me` )
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile (userID:string|undefined) {
        return instance.get(`profile/`+ userID)
    },
    getStatus (userID:string|undefined) {
        return instance.get(`/profile/status/`+userID)
    },
    updateStatus ( status:string) {
        return instance.put(`/profile/status/`, {status})
    }
}

