// import axios from "axios";
import { request } from "../configs/axios";
import { MA_NHOM } from "../constants/common";

export const fetchMovieListAPI = () => {
    return request({
        url: `QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`,
        method: "GET",
    })
}

export const fetchMovieDetaiAPI = (maPhim) => {
    return request({
        url: `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        method: "GET",
    })
}

export const uploadNewMovieAPI = (data) => {
    return request({
        url: `QuanLyPhim/ThemPhimUploadHinh`,
        method: "POST",
        data,
    })
}

export const updateMovieAPI = (data) => {
    return request({
        url: `QuanLyPhim/CapNhatPhimUpload`,
        method: "POST",
        data,
    })
}

export const deleteMovieAPI = (maPhim) => {
    return request({
        url: `QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        method: "DELETE",
    })
}