import request from '@/utils/request'

export function mostNew(data){
	return request({
		url:"/api/course/mostNew",
		method:"post",
		data:data
	})
}
// 获取一级分类
export function getFirstCategorys(){
	return request({
		url:"/api/course/category/getFirstCategorys",
		
	})
}

// 获取二级分类
export function getSecondCategorys(params){
	return request({
		url:"/api/course/category/getSecondCategorys",
		params
	})
}
// 查询课程
export function courseSearch(data){
	return request({
		url:"/api/course/search",
		method:"post",
		data
	})
}