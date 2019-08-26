import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-pro-b4c4c.firebaseio.com/'
});


export default instance;