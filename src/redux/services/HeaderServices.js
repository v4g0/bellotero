import axios from 'axios';

export default {
    getHeader,
};

function getHeader() {
    return axios.get(process.env.REACT_APP_GET_HEADER)
        .then(res => {
            if (res.status == 200) {
                return Promise.resolve(res.data);
            }
        })
        .catch(function (error) {
            return Promise.reject(error);
        });
}
