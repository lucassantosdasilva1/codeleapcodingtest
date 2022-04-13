import axios from 'axios';
import { PostDTO } from '../DTO/PostDTO';


export interface EditProps {
    title: string,
    content: string
}
export interface PostProps{
    username: string,    
    title: string,
    content: string
}

export const api = axios.create({
    baseURL: "https://dev.codeleap.co.uk/careers"
})

export async function GetPosts() {
    try {
        const result = await api.get("/");

        const resultSorted : PostDTO[] = result.data.results;

        resultSorted.sort((a, b) => {
            if (a.created_datetime > b.created_datetime) {
              return -1;
            }
            if (a.created_datetime < b.created_datetime) {
              return 1;
            }
            // a must be equal to b
              return 0;
        })

        return resultSorted;
        
    } catch (error) {
        console.log(error);
    }
}

export async function AddPosts(data : PostProps) {
    try {
        const {status} = await api.post("/", data);
        return console.log(status)
    } catch (error) {
        
    }
}

export async function DeletePost(id : Number) {
    try {
        const {status} = await api.delete(`/${id}/`);
        return console.log(status)
    } catch (error) {
        
    }
}

export async function EditPostAPI(id : Number, data : EditProps) {
    try {
        const {status} = await api.patch(`/${id}/`, data);
        return console.log(status)
    } catch (error) {
        
    }
}

