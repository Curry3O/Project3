import request from '@/utils/request';
export async function queryBusiness(param) {
  return request('/api/busines/pageQuery', {
    method: 'get',
    params: param,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
  });
}
export async function changeStatus(param) {
  return request('/api/user/changeEnabled', {
    method: 'get',
    params: param,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
  });
}

// test8

// test9
