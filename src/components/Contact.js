import React from 'react'
import Head from './Head'
import style from './Style.module.css'

const Contact = () => {
  return (
    <div>
      <Head></Head>
      <section className={style.contact}>
        <h1 className={style.heading}>contact me</h1>
        <h2>Get in Touch</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
          <button type="submit">Send Message</button>
        </form>
        <p>Or, you can reach me at:</p>
        <ul>
          <li>
            <a href="mailto:your_email@example.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/your_linkedin_profile/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" /> 
            </a>
          </li>
          <li>
            <a href="https://github.com/your_github_username" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" /> 
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Contact
