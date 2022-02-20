import React from 'react'
import BreadcrumbList from '../../model/BreadList'


interface PropsHeader {
    name: string;
    breadlist?: BreadcrumbList[];
}

function Header({ name, breadlist }: PropsHeader) {
    return (
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>{name}</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            {

                                breadlist
                                    ?
                                    breadlist.map(({ id, name, active, url }) => (
                                        <React.Fragment key={id}>
                                            {
                                                active ?
                                                    <li className="breadcrumb-item active">{name}</li>
                                                    :
                                                    <li className="breadcrumb-item"><a href={url}>{name}</a></li>

                                            }
                                        </React.Fragment>
                                    ))
                                    :
                                    <></>
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header