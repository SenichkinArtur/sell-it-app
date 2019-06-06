import axios from 'axios';

export default {
    setupInterceptors: (store, history) => {

    axios.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.response.status === 401) {
            store.dispatch({ type: 'USER_LOGOUT' });
        }

        if (error.response.status === 404) {
            history.push('/not-found');
        }

        if (error.response.status === 500) {
            history.push('/server-error');
        }

        return Promise.reject(error);
        });
    },
};