import axios from "axios";

export const photosPost = () =>{
    return axios.get("https://jsonplaceholder.typicode.com/photos");
};

export const albumsList = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
}