import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:3000"
})
export const getAllFimls = async () =>{
    const res = await instance.get("/movies")
    return res.data

}