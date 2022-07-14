import request from '@/utils/request'
// 获取用户详细信息
export function inquire(data) {
  return request({
    url: '/tune/election/selectMessage',
    headers: {
      isToken: false,
    },
    method: 'post',
    data: data
  })
}
// http://localhost:8080/tune/election/insertMessage
// 提交用户信息
export function addParticipant(data) {
  return request({
    url: '/tune/election/updateMessage',
    headers: {
      isToken: false,
    },
    method: 'post',
    data: data
  })
}

// 修改参选人员信息
export function updateParticipant(data) {
  return request({
    url: '/tune/election/updateMessage',
    headers: {
      isToken: false,
    },
    method: 'post',
    data: data
  })
}
