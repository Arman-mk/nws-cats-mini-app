const asyncMiddleware = () => store => next => action => {
    const {type, promise, options} = action;


    if (!promise || typeof promise?.then !== "function") {
        return next(action);
    }

    next({
        type: `${type}_REQUEST`
    });

    promise
        .then((res) => {
            next({
                type: `${type}_SUCCESS`,
                payload: {...res, ...options}
            });
        })
        .catch((errRes) => {
            console.log("res", errRes);
            next({
                type: `${type}_FAIL`,
                payload: {...errRes, ...options}
            });
        })
}

export default asyncMiddleware;