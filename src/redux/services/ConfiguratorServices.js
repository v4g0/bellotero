import axios from 'axios';

export default {
    getContent,
};

function getContent() {
    // return axios.get(process.env.REACT_APP_GET_HEADER)
    return axios.get("https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json")
        .then(res => {
            if (res.status == 200) {
                return Promise.resolve(res.data);
            }
        })
        .catch(function (error) {
            return Promise.reject(error);
        });
}

