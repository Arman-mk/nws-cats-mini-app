import apiClient from "../../services/apiClient.js";

export const getCats = (options = {}) => {
    const {params} = options;
    return apiClient.get("/images/search",{params})
}

export const getCatCategories = (options = {}) => {
    const {params} = options;
    return apiClient.get("/categories ",{params})
}
