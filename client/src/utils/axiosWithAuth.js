import Axios from 'axios';

const axiosWithAuth = () => {
    return Axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            authorization: localStorage.getItem('sprint_token')
        }
    })
};

export default axiosWithAuth;