import React from 'react'
import '../NewsLetter/NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe To Our Newsletter And Stay Updated</p>
        <div>
        <input type="email" placeholder="Your Email Id" />
        <button>Subscribe</button>
        </div>
    </div>
  )
}
