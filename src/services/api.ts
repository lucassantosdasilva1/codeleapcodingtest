import axios from 'axios';


// type PostProps = {
//     username: string,
//     title: string,
//     content: string
// }

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
