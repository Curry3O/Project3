import request from '@/utils/request';
export async function queryMarket(param) {
  return request('/api/user/pageQuery', {
    method: 'get',
    params: param,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
  })
}
export async function changeStatus(param) {
  return request('/api/user/changeEnabled', {
    method: 'get',
    params: param,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
  })
}
export async function addMarket(param) {
  return request('/api/notice/saveOrUpdate', {
    method: 'post',
    params: param,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
  })
}
