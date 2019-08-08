//设置所有请求的域名前缀
const apiUrl = 'http://192.168.1.10:8081';
export default {
    apiUrl
}
export const getUserList = params => { return axios.get(`${apiUrl}/user/getUsers`, { params: params }); };