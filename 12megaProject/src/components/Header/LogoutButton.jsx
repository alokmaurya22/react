import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutButton() {
    const Dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            Dispatch(logout());
        }).catch((error) => console.log("Appwrite service: logout", error));
    }
    return (
        <div className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandler}>Logout</div>
    )
}

export default LogoutButton