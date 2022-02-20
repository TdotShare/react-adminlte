import React from 'react'
import exportedMenuApp from '../../utils/menu'
import Iconfontawesome from '../Iconfontawesome'
import { Link, useLocation } from "react-router-dom";
import { routerPathPublic } from '../../router/RouterPath';
import { RootState } from '../../store/ConfigureStore';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAccount, setLoginfail } from '../../store/reducer/Account';
import { systemConfig } from '../../config/System';


interface PathProps {
    pathname: string[];
}

function ListMenuUser({ pathname }: PathProps) {

    return (
        <>
            {
                exportedMenuApp.UserDataMenu.map(({ id, name, icon, link }) => (
                    <li key={id} className="nav-item">
                        <Link to={link} className={`nav-link ${pathname.includes(link.slice(1, link.length)) ? `active` : ``}`}>
                            <Iconfontawesome nav nameicon={icon} />
                            <p>
                                {name}
                            </p>
                        </Link>
                    </li>
                ))
            }
        </>
    )
}


function ListMenuAdmin({ pathname }: PathProps) {

    return (
        <>
            <li className="nav-header">เจ้าหน้าที่</li>
            {
                exportedMenuApp.AdminDataMenu.map(({ id, name, icon, link }) => (
                    <li key={id} className="nav-item">
                        <Link to={link} className={`nav-link ${pathname.includes(link.slice(1, link.length)) ? `active` : ``}`}>
                            <Iconfontawesome nav nameicon={icon} />
                            <p>
                                {name}
                            </p>
                        </Link>
                    </li>
                ))
            }
        </>
    )
}

function Sidebar() {


    const dispatch = useDispatch()

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const auth = useSelector((state: RootState) => state.account.auth)
    const account = useSelector((state: RootState) => state.account.data)



    const actionLogout = () =>{
        dispatch(setLoginfail())
        dispatch(deleteAccount())
    }



    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="../../index3.html" className="brand-link">
                <img src="assets/logo/irdrmuti_cri.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">{systemConfig.NameInit}</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={`${process.env.PUBLIC_URL}/assets/image/mock/profile.png`} className="img-circle elevation-2" alt="UserImage" />
                    </div>
                    <div className="info">
                        <a href="/#" className="d-block">{ auth ? account.fullname: `Guest`}</a>
                    </div>
                </div>

                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        {
                            auth && (
                                <>
                                    <ListMenuUser pathname={splitLocation} />
                                    <ListMenuAdmin pathname={splitLocation} />
                                </>
                            )
                        }


                        <li className="nav-header">การเข้าถึงระบบ</li>
                        <li className="nav-item">

                            {
                                auth

                                    ?

                                    <Link to={'#'} onClick={() => actionLogout()} className="nav-link active-logout">
                                        <Iconfontawesome nav nameicon='fas fa-sign-out-alt' />
                                        <p>
                                            Logout
                                        </p>
                                    </Link>

                                    :

                                    <Link to={routerPathPublic.Login} className="nav-link active">
                                        <Iconfontawesome nav nameicon='fas fa-sign-in-alt' />
                                        <p>
                                            Login
                                        </p>
                                    </Link>
                            }

                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>
    )
}

export default Sidebar