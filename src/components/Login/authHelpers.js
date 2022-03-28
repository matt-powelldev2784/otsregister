import axios from 'axios';

export const registerUser = async userNameEmailPassword => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify(userNameEmailPassword);

    try {
        const res = await axios.post('/api/users', body, config);

        const token = res.data.token;

        return token;
    } catch (err) {
        throw err.response.data;
    }
};

export const loginUser = async emailPassword => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify(emailPassword);

    try {
        console.log('process.env.REACT_APP_API_ADDRESS', process.env.REACT_APP_API_ADDRESS);
        console.log('process.env.REACT_APP_API_ADDRESS', process.env);
        const res = await axios.post(`${process.env.REACT_APP_API_ADDRESS}/api/auth`, body, config);
        console.log('res', res);

        const token = res.data.token;

        return token;
    } catch (err) {
        throw err.response.data;
    }
};

export const getAuthUser = async token => {
    const config = { headers: { 'x-auth-token': token, 'content-type': 'application/json' } };

    try {
        const res = await axios.get('/api/auth', config);

        const user = res.data;
        return user;
    } catch (err) {
        throw err.response.data;
    }
};

export const apiCall = async (apiCallType, route, token, body) => {
    const config = { headers: { 'x-auth-token': token } };

    try {
        let repsonse;

        switch (apiCallType) {
            case 'post':
                repsonse = await axios.post(route, body, config);
                break;
            case 'get':
                repsonse = await axios.get(route, config);
                break;
            default:
                repsonse = await axios.get(route, config);
        }

        const responseData = repsonse.data;
        return responseData;
    } catch (err) {
        throw err.response.data;
    }
};
