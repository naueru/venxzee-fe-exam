import { API_URLS, METHODS } from 'globals/constants';

export const request = async (url, method, body) => {
  const params = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: method,
    body
  }
  try {
    const data  = await fetch(url, params);
    const formatedData = await data.json();
    if(data.status === 200) {
      return formatedData;
    }
    throw formatedData;
  } catch(err) {
    throw err;
  }
};

export const loginService = async (payload) => {
  // The following lines maps data because
  // the API only works with already store data
  payload.email = 'eve.holt@reqres.in';
  payload.password = 'cityslicka';
  return await request(API_URLS.LOGIN, METHODS.POST, JSON.stringify(payload));
};

export const registerService = async (payload) => {
  // Same comment as above
  payload.email = 'eve.holt@reqres.in';
  payload.password = 'pistol';
  return await request(API_URLS.REGISTER, METHODS.POST, JSON.stringify(payload));
};

export const getPostList = async (page) => {
  const params = page ? `?page=${page}` : '';
  const url = `${API_URLS.POSTS}${params}`;
  return await request(url, METHODS.GET);
};

export const getPost = async (id) => {
  const url = `${API_URLS.POSTS}/${id}`;
  return await request(url, METHODS.GET);
};

