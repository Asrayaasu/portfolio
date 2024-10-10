import React from 'react'
import style from './Style.module.css'
import Head from './Head'
import html from './images/html5.png'
import css from './images/css.png'
import js from './images/js.png'
import bp from './images/bootstrap.png'
import jq from './images/jquery.png'
import rt from './images/react.png'

const Skills = () => {
  return (
    <>
      <Head></Head>
      <div className={style.skills}>
        <h1 className={style.heading}>skills</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className={style.box}>
                <img src={html} alt="skill1" />
                <h2>html5</h2>
              </div>

            </div>

            <div className='col-md-4'>
              <div className={style.box}>
                <img src={css} alt="skill2" />
                <h2>css3</h2>
              </div>

            </div>

            <div className='col-md-4'>
              <div className={style.box}>
                <img src={bp} alt="skill3" />
                <h2>Bootstrap</h2>
              </div>

            </div>
          </div>

          <div className='row'>
            <div className='col-md-4'>
              <div className={style.box}>
                <img src={js} alt="skill1" />
                <h2>javascript</h2>
              </div>

            </div>

            <div className='col-md-4'>
              <div className={style.box}>
                <img src={jq} alt="skill2" />
                <h2>jquery</h2>
              </div>

            </div>

            <div className='col-md-4'>
              <div className={style.box}>
                <img src={rt} alt="skill3" />
                <h2>reactjs</h2>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
