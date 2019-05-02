export const logger = store => next => action => {
    if(action.meta && action.meta.printLog) {
        console.log("dispatching", action);
        console.log("new state: ", store.getState());
    }
    return next(action);
}