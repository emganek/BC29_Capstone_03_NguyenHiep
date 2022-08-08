import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { USER_INFO_KEY } from '../../constants/common';
import { setUserInfoAction } from '../../store/actions/user.reducer';
import './index.css';

export default function Header() {
    const reduxState = useSelector(state => ({ ...state.userReducer }));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem(USER_INFO_KEY);
        dispatch(setUserInfoAction(null));
        navigate('/home');
    }

    return (
        <header>
            <nav className="navbar align-items-center navbar-expand-sm navbar-light">
                <NavLink className="navbar-brand" to="/home">
                    <img src="/assets/images/logo.png" alt="Logo" />
                </NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/home"> Home </NavLink>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#movieList"> Movies </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#news"> News </a>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/admin"> Admin Page </NavLink>
                        </li>
                    </ul>
                    {
                        !reduxState.userInfo ?
                            <>
                                <button className="btn btn-outline-info my-2 my-sm-0 mr-2" type="sumit">Register</button>
                                <button onClick={() => navigate('/login')} className="btn btn-outline-success my-2 my-sm-0">Login</button>
                            </>
                            :
                            <>
                                <span className='mr-4 username font-italic'>Welcome {reduxState.userInfo.hoTen}</span>
                                <button onClick={handleLogOut} className="btn btn-danger">Log out</button>
                            </>
                    }
                </div>
                {/* <div class="theme-toggler">
                    <i id="toggler__dark" class="far fa-moon"></i>
                    <i id="toggler__bright" class="far fa-sun"></i>
                </div> */}
            </nav>
        </header>
    )
}
