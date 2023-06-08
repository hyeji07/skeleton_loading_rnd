import { httpCommunicator } from '../api/httpCommunicator';

export async function GetPersonData(url) {
  return await httpCommunicator(url,'get',{});
}
