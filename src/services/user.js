import { request } from "../configs/axios"

export const loginAPI = (data) =>{
    return request({
        url:'QuanLyNguoiDung/DangNhap',
        method: 'POST',
        data: data,
    })
}

export const registerAPI = (data) =>{
    return request({
        url:'QuanLyNguoiDung/DangKy',
        method:'POST',
        data,
    })
}