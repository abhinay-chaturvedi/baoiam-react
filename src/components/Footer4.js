import React from 'react'

export default function Footer4() {
  return (
    <>
      <div style={{ backgroundColor: '#fc2779', paddingTop:'0.2rem', paddingBottom:'1rem' }}>
        <ul style={{ listStyleType: 'none', display: 'flex', justifyContent:'space-around',
      paddingLeft:'25rem', paddingRight:'25rem' }}>
          <li><a href="#" style={{ textDecoration: 'none', color: 'white', fontSize:'0.9rem' }}>Terms & Conditions</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: 'white', fontSize:'0.9rem' }}>Shipping Policy</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: 'white', fontSize:'0.9rem' }}>Cancellation Policy</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: 'white', fontSize:'0.9rem' }}>Privacy Policy</a></li>
        </ul>
        <div style={{color:'white', textAlign:'center', fontSize:'0.8rem'}}>
          © 2023 Nykaa E-Retail Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    </>
  )
}
