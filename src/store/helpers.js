export const getAsyncActionName = (baseName) => {
    return {
        REQUEST:`${baseName}_REQUEST`,
        SUCCESS:`${baseName}_SUCCESS`,
        FAIL:`${baseName}_FAIL`,
    }
}