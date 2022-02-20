
import React from 'react'


interface  PropsFooter  {
    version : string;
    created : number;
    name : string
}

function Footer(props : PropsFooter) {
    return (
        <>
            <footer className="main-footer">
                <div className="float-right d-none d-sm-block">
                    <b>Version</b> {props.version}
                </div>
                <strong>Copyright © {props.created} <a href="https://adminlte.io">{props.name}</a>.</strong> All rights reserved.
            </footer>
            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
                {/* Control sidebar content goes here */}
            </aside>
        </>
    )
}

export default Footer