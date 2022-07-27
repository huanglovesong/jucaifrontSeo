import SelfFetch from './SelfFetch';
const selfFetch = new SelfFetch();
import configs from "../config/configs"

const BaseUrl = configs.baseUrl;

export async function getTestData() {
    return await selfFetch.get(`/api/search/shows?q=batman`);
}

export async function getInformationOneClass() {
  return await selfFetch.get(`${BaseUrl}/api/Information/GetInformationOneClass`);
}

export async function getInformationChildClass(options) {
  return await selfFetch.get(`${BaseUrl}/api/Information/GetInformationChildClass?pid=${options.pid}`);
}

export async function getInformationList(options) {
  return await selfFetch.get(`${BaseUrl}/api/Information/GetInformationList?classId=${options.classId}&pageIndex=${options.pageIndex || 1}&pageSize=${options.pageSize || 10}`);
}

export async function getInformation(options) {
  return await selfFetch.get(`${BaseUrl}/api/Information/GetInformation?id=${options.id}`);
}



