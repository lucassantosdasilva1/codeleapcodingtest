import axios from 'axios';

type PostProps = {
    username: string,
    title: string,
    content: string
}

const api = axios.create({
    baseURL: "https://dev.codeleap.co.uk"
})

export async function Post(post : PostProps) {
    try {
        const result = await axios.post("https://dev.codeleap.co.uk/careers/", post);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}