import axios from 'axios'

let service = axios.create();

service.interceptors.request.use(config => {
	return config;
},error=>{
	Promise.reject(error)
})

service.interceptors.response.use(response =>{
	// 判断code码
	return response.data;
},error=>{
	return Promise.reject(error);
})

export default service