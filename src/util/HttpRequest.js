import axios from 'axios';

class HttpRequest {
    constructor () {
        const options = {};
        return axios.create(options);
    }
}

export default HttpRequest;