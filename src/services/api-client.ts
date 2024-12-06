import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'3cbdbcc713014d15933840d0e0e3be1d',
    }
})