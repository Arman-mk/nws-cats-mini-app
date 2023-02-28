import {CATS, CATS_CATEGORIES} from "./actionTypes.js";
import {getCatCategories, getCats} from "@features/cats/api.js";

export const getAllCats = (options = {}) => {
    return {
        type:CATS,
        promise:getCats(options),
        options
    }
}

export const getAllCatsCategories = (options = {}) => {
    return {
        type:CATS_CATEGORIES,
        promise:getCatCategories(options),
        options
    }
}