import React from 'react'
import banner from './images/webdeveloper.jpg'
import style from './Style.module.css'

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h2 >Welcome to My Portfolio</h2>
            <p>
              I'm a web developer with a passion for creating beautiful and user-friendly websites. My main focus is on building responsive and efficient websites using HTML, CSS, and JavaScript.
            </p>
            <button>
              <a href=''>Resume</a>
            </button>
          </div>
          <div className='col-md-6'>
            <div className={style.image}>
            <img src={banner} alt='Placeholder' />
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Banner
