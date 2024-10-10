import React from 'react'
import style from './Style.module.css'
import Head from './Head'
import about from './images/about.jpg'

const About = () => {
  return (
    <div>
      <Head></Head>

      <div className={style.about}>
        <h1 className={style.heading}>
          about me
        </h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <div className={style.images}>
                <img src={about} />
              </div>
            </div>
            <div className='col-md-7'>
              <p>
                As a recent IT Engineer graduate with a passion for web development, I've spent the past few years honing my skills in designing and building innovative web applications. My journey began at my college, where I developed a strong foundation in IT and software engineering. During my studies, I worked on various projects that allowed me to explore different programming languages, frameworks, and technologies.

                What drives me is the desire to create seamless user experiences and efficient web solutions that meet the needs of businesses and individuals alike. I believe that a well-designed website is essential in today's digital age, and I'm committed to delivering high-quality results that exceed expectations.

                My unique value proposition lies in my ability to combine technical skills with creative thinking, allowing me to develop web applications that are both functional and visually appealing. With expertise in HTML, CSS, Bootstrap, JavaScript, Jquery, and React I'm confident in my ability to bring your web development projects to life.

              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
