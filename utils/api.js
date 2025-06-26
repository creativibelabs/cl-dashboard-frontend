import axios from 'axios';
import Cookies from 'js-cookie';

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;

//Register Client 

export const RegisterClient = async ( formData ) => {

    const res = await axios.post(`${apiBase}/register-client`, formData);
    return res;
}

export const GoogleLoginApi = async ( GoogleResponse ) => {
    const res = await axios.post(`${apiBase}/google`, GoogleResponse);
    return res;
}