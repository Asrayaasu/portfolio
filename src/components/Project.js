import React from 'react'
import Head from './Head'
import style from './Style.module.css'

const Project = () => {
  return (
    <div>
      <Head></Head>
      <div className={style.project}>
        <h1 className={style.heading}>projects</h1>
      </div>
    </div>
  )
}

export default Project
