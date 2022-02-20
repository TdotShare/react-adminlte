import React from 'react'


interface  PropsIconfontawesome  {
    nameicon : string;
    nav : boolean;
} 

function Iconfontawesome({nav = true , nameicon} : PropsIconfontawesome) {
  return (
    <i className={`${nav ? `nav-icon` : ``} ${nameicon}`} />
  )
}

export default Iconfontawesome