import axios, {Axios} from 'axios';

class backend{
    async Recepts(): Promise<string> {
        var instance = axios.create({
            baseURL: 'http://localhost:3000/'
        })

        var a = await instance.get("/recepts");
        console.log(a);
        return a.data;
    }
}

export {backend};