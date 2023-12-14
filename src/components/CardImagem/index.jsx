import React from 'react'
import Style from './CardImagem.module.css'
import { Link } from 'react-router-dom'

const CardImagem = ({to, url}) => {
  return (
    <div className={Style.base}>
        <Link to={to}>
            <img className={Style.img} src={url}/>
        </Link>
    </div>
  )
}
export default CardImagem
