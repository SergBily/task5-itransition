import axios from 'axios';
import { RequestRandomData } from '../models/requestRandomData';
import { ResponseRandomData } from '../models/responseRandomData';

export default class RandomData {
  static async getRandomData(p: RequestRandomData):Promise<ResponseRandomData[]> {
    const response = await axios.post('http://localhost:5000/main', p);
    const { data } = response;
    return data;
  }
}
