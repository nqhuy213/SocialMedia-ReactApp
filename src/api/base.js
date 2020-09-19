import {getToken} from '../utils/token';
const BASE_URL = process.env.REACT_APP_API_URL;
/**
 *
 * @param {string} endpoint - API endpoint
 * @param {string} method - HTTP method
 * @param {string} params - request parameters
 */
export const callAPI = async (
  endpoint,
  method = 'GET',
  params,
  options = { headers: {Accept: 'application/json', 'Content-Type': 'application/json'}}
) => {
  const token = getToken('token');
  const sent_options = {
    ...options,
    method,
    headers: {
      ...options.headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };

  if (params) {
    if (method === 'GET') {
      //Put the params into endpoint
      endpoint += '?' + objectToQueryString(params);
    } else {
      //If the method is not GET, put params to request body\
      if(!options.headers){
        sent_options.body = params
      }
      else if (options.headers["Content-Type"] === 'application/json'){
        sent_options.body = JSON.stringify(params)
      }
    }
  }
  const res = await fetch(`${BASE_URL}${endpoint}`, sent_options);
  const result = await res.json();
  return result;
};

/**
 * Turn object into query string
 * @param {object} obj - search parameterd object
 */
function objectToQueryString(obj) {
  return Object.keys(obj)
    .map((key) => (obj[key].trim() !== '' ? key + '=' + obj[key].trim() : ''))
    .join('&');
}
