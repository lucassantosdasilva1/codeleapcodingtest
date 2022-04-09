import axios from 'axios';

// type PostProps = {
//     username: string,
//     title: string,
//     content: string
// }

export const api = axios.create({
    baseURL: "https://dev.codeleap.co.uk/careers"
})


// export async function GetPosts() {
//     try {
//         const result = await api.get("/");
//         console.log(result.data);
//     } catch (error) {
//         console.log(error);
//     }
//}
