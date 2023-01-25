import axios from 'axios';
import fileDownload from 'js-file-download';
import { RequestRandomData } from '../models/requestRandomData';
import { ResponseRandomData } from '../models/responseRandomData';

export default class RandomData {
  static async getRandomData(p: RequestRandomData): Promise<ResponseRandomData[]> {
    const response = await axios.post('http://localhost:5000/main', p);
    const { data } = response;
    return data;
  }

  static async getCsvFile(): Promise<void> {
    const response = await axios.get('http://localhost:5000/export', { responseType: 'blob' });
    const { data } = response;
    fileDownload(data, 'export-file.csv');
  }
}
