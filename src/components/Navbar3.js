import React from 'react'

export default function Navbar3() {
  return (
    <>
      <nav style={{
        paddingTop: '0.8rem',
        paddingBottom: '0.8rem',
        paddingLeft:'8rem',
        paddingRight:'8rem',
        borderBottom: '0.5px solid #e6dede',
        boxShadow: '3px 3px 3px #dfdada'
      }}>

        <ul className='options' style={{
          listStyleType: 'none',
          display: 'flex',
          margin: '0px',
          padding: '0px',
          justifyContent: 'space-around'
        }}>
          <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Makeup</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Skin</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Hair</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Appliances</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Bath & Body</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Natural</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Mom & Baby</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Health & Wellness</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Men</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Fragrance</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: 'black' }}>Pop Ups</a></li>
        </ul>

      </nav>
    </>
  )
}
