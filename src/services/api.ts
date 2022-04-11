import axios from 'axios';


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
        return result.data.results;
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
