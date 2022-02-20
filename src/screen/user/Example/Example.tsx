import React from 'react'
import Headerbase from '../../../components/template/Header'
import BreadcrumbList from '../../../model/BreadList'
import WrapperContent from '../../../components/template/WrapperContent'


function Example() {

    const breadlistItem: BreadcrumbList[] = [
        {
            id: 1,
            name: "หน้าหลัก",
            active: false,
            url: "https//:test.com"
        },
    ]

    return (
        <WrapperContent childrenContent={Pages()} childrenHeader={<Headerbase name='Example' breadlist={breadlistItem} />} />
    )
}

function Pages() {

    return (
        <></>
    )
}

export default Example