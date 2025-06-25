// utils/apiToken.js
let publicToken = null;
const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchAndStorePublicToken() {
  try {
    const res = await fetch(`${apiBase}/get-token`);
    const data = await res.json();
    publicToken = data.token;

    localStorage.setItem('public_token', publicToken);
  } catch (err) {
    console.error('Failed to fetch public token', err);
  }
}

export function getPublicToken() {
    return publicToken || localStorage.getItem('public_token');
}
