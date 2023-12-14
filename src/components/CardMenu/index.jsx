import React from 'react'
import Style from './CardMenu.module.css'
import { Link } from 'react-router-dom'

const CardMenu = ({to, title}) => {
  return (
    <div className={Style.base}>
        <Link to={to}>{title}</Link>
    </div>
  )
}
export default CardMenu
