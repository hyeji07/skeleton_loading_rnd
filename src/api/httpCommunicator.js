import axios from 'axios';

export async function httpCommunicator(
  url,
  method,
  params,
  header,
) {
  try {
    let res;
    switch (method) {
      case 'post':
        res = await axios.post(url, params, header);
        break;
      case 'get':
        res = await axios.get(url, params);
        break;
      default:
        return null;
    }
    return res;
  } catch (err) {
    return err;
  }
}
