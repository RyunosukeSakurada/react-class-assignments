import React from 'react'
import style from '@/style/Header.module.scss'

function Header({ children }) {
  return (
    <div className={style.header}>{children}</div>
  )
}

export default Header