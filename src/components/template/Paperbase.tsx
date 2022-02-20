import React from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'


interface Props {
    Children: JSX.Element;
}


function Paperbase({ Children, }: Props) {
    return (
        <div className="wrapper">
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="/#" role="button"><i className="fas fa-bars" /></a>
                    </li>
                </ul>
            </nav>
            {/* /.navbar */}
            {/* Main Sidebar Container */}

            <Sidebar />

            {/* Content Wrapper. Contains page content */}
            {Children}

            <Footer
                name={`สถาบันวิจัยและพัฒนา มทร.อีสาน`}
                version={`0.0.1`}
                created={2022} />

        </div>

    )
}

export default Paperbase