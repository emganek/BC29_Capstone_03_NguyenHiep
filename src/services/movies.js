// import axios from "axios";
import { request } from "../configs/axios";

export const fetchMovieListAPI = () => {
    return request({
        url: 'QuanLyPhim/LayDanhSachPhim?maNhom=GP03',
        method: "GET",
    })
}

export const fetchMovieDetaiAPI = (maPhim) => {
    return request({
        url: `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        method: "GET",
    })
}

export const uploadNewMovieAPI = (formdata) => {
    return request({
        url: `QuanLyPhim/ThemPhimUploadHinh`,
        method: "POST",
        formdata,
    })
}