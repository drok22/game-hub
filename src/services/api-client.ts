import axios from "axios";

export default axios.create(
    {
        baseURL: 'https://api.rawg.io/api',
        params: {
            key: '50d7079559b14528aa245576d084b3e7'
        }
    }
)