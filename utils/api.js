import axios from 'axios';
import Cookies from 'js-cookie';

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchAndStorePublicToken() {
  try {
    const res = await fetch(`${apiBase}/get-token`);
    const data = await res.json();
    Cookies.set('public_token', publicToken, { expires: 1 });
  } catch (err) {
    console.error('Failed to fetch public token', err);
  }
}

export function getPublicToken() {
  return Cookies.get('public_token');
}

//Register Client 

export const RegisterClient = async ( formData ) => {

    let PublicToken = getPublicToken();
    const res = await axios.post(`${apiBase}/register-client`, formData,{
        headers: {
          'Content-Type': 'application/json',
          'PUBLIC-API-TOKEN': PublicToken,
          'Accept': 'application/json'
        },
    });

    return res;
}

export const GoogleLoginApi = async ( GoogleResponse ) => {

    let PublicToken = getPublicToken();
    const res = await axios.post(`${apiBase}/google`, GoogleResponse, {
        headers: {
          'Content-Type': 'application/json',
          'PUBLIC-API-TOKEN': PublicToken,
          'Accept': 'application/json'
        },
    });

    return res;
}