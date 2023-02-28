import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {reSelector} from "../store/rootSelector.js";

export const useReselector = ({
                             store, key
                         }) => {
    if (!store || !key) return null;

    return useSelector(state => reSelector(state[store], (key).toLowerCase()));

}