import axios from 'axios';

export const registerUser = async userNameEmailPassword => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify(userNameEmailPassword);

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_ADDRESS}/api/users`, body, config);

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
        const res = await axios.post(`${process.env.REACT_APP_API_ADDRESS}/api/auth`, body, config);

        const token = res.data.token;

        return token;
    } catch (err) {
        throw err.response.data;
    }
};

export const getAuthUser = async token => {
    const config = { headers: { 'x-auth-token': token, 'content-type': 'application/json' } };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_ADDRESS}/api/auth`, config);

        const user = res.data;
        return user;
    } catch (err) {
        throw err.response.data;
    }
};

export const apiCall = async (apiCallType, route, token, body, ) => {
   
    const config = { headers: { 'x-auth-token': token } };
   
    try {
        let response;

        switch (apiCallType) {
            case 'post':
                response = await axios.post(`${process.env.REACT_APP_API_ADDRESS}/${route}`, body, config);
                break;
            case 'get':
                response = await axios.get(`${process.env.REACT_APP_API_ADDRESS}/${route}`, config);
                break;
            case 'delete':
                response = await axios.delete(`${process.env.REACT_APP_API_ADDRESS}/${route}`, config);

                break;
            default:
                response = await axios.get(`${process.env.REACT_APP_API_ADDRESS}/${route}`, config);
        }

        const responseData = response.data;
        return responseData;
    } catch (err) {
        throw err.response.data;
    }
};
