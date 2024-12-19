import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on Your Email</h1>
        <p>Subscribe to Our NewsLetter and Stay Updated</p>
        <div>
            <input type="email " placeholder='Your Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter