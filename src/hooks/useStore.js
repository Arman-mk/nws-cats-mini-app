import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {useReselector} from "@src/hooks/useReselector.js";

export const useStore = ({
                             store, key, action, defaultOptions = {}, autoload,
                         }) => {
    const dispatch = useDispatch();
    const selector = useReselector({store,key});

    const {loading,success,fail,data, errors} = selector || {};

    useEffect(() => {
        if (autoload) {
            call()
        };
    }, []);

    const call = (options = {}) => {
        if (action && typeof action === "function") {
            dispatch(action({...defaultOptions, ...options}))
        }
    }

    return {
        call,
        loading,
        success,
        fail,
        errors,
        data
    }


}