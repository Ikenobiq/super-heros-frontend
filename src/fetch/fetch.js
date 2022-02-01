import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api/superheroes/";

export const getSuperheroes = (page, pageSize) => {
    return axios.get("/", {params: {page, pageSize}}).then((response) => response.data);
};

export const createSuperhero = (superhero) => {
    return axios.post("/", superhero)
};


export const updateSuperhero = (superhero) => {
    return axios.patch(`/${superhero._id}`, superhero)
};
