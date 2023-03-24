import React, { useState } from 'react'
import SignIn from './SignIn'

export default function Navbar2() {

    const [sign, setSign] = useState('false')

    function handleSignIn() {

        setSign(!sign)

    }


    return (
        <>
            <nav style={{
                display: 'flex',
                justifyContent: 'center',
                justifyContent: 'space-around',
                paddingTop: '0.8rem',
                paddingBottom: '0.8rem',
                borderBottom: '0.5px solid #e6dede'
            }}>

                <ul className='options' style={{ listStyleType: 'none', display: 'flex', alignItems: 'center', margin: '0px', padding: '0px' }}>
                    <li style={{ marginLeft: '1rem', marginRight: '1rem' }}><a href="#" style={{ textDecoration: 'none', color: 'black', fontWeight: '650' }}> Categories</a></li>
                    <li style={{ marginLeft: '1rem', marginRight: '1rem' }}><a href="#" style={{ textDecoration: 'none', color: 'black', fontWeight: '650' }}> Brands </a></li>
                    <li style={{ marginLeft: '1rem', marginRight: '1rem' }}><a href="#" style={{ textDecoration: 'none', color: 'black', fontWeight: '650' }}> Luxe </a></li>
                    <li style={{ marginLeft: '1rem', marginRight: '1rem' }}><a href="#" style={{ textDecoration: 'none', color: 'black', fontWeight: '650' }}> Nykaa Fashion </a></li>
                    <li style={{ marginLeft: '1rem', marginRight: '1rem' }}><a href="#" style={{ textDecoration: 'none', color: 'black', fontWeight: '650' }}> Beauty Advice </a></li>
                </ul>

                <div className='search_and_sign' style={{ display: 'flex' }}>
                    <div className='searching' style={{ marginRight: '0.7rem' }}>
                        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.54 19.97L16.3 14.73C17.36 13.44 17.99 11.79 17.99 9.99C17.99 5.85 14.64 2.5 10.5 2.5C6.35 2.5 3 5.85 3 9.99C3 14.13 6.35 17.48 10.49 17.48C12.29 17.48 13.94 16.84 15.23 15.79L20.47 21.03C20.62 21.18 20.81 21.25 21 21.25C21.19 21.25 21.38 21.18 21.53 21.03C21.83 20.74 21.83 20.26 21.54 19.97ZM10.49 15.98C7.19 15.98 4.5 13.29 4.5 9.99C4.5 6.69 7.19 4 10.49 4C13.79 4 16.48 6.69 16.48 9.99C16.48 13.3 13.8 15.98 10.49 15.98Z" fill="black"></path>
                    </svg> */}
                        <input placeholder='Search on Nykaa' style={{ padding: '0.6rem', backgroundColor: '#f4f4f4', border: '0px' }}></input>
                    </div>
                    <button onClick={handleSignIn} style={{ marginRight: '1.5rem', padding: '0.6rem', color: 'white', backgroundColor: '#fc2779', border: '0px', borderRadius: '10px' }}>Sign in</button>
                    {sign ? <SignIn /> : null}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.5 7.2H16.2V6.9C16.3 4.5 14.4 2.5 12 2.5C9.6 2.6 7.8 4.5 7.8 6.9V7.2H3.5C2.9 7.2 2.5 7.6 2.5 8.2V16.4C2.5 19.2 4.7 21.4 7.5 21.4H16.5C19.3 21.4 21.5 19.2 21.5 16.4V8.2C21.5 7.7 21.1 7.2 20.5 7.2ZM9.3 6.9C9.3 5.4 10.5 4.1 12 4C13.5 4.1 14.7 5.4 14.7 6.9V7.2H9.3V6.9ZM20 16.5C20 18.4 18.4 20 16.5 20H7.5C5.6 20 4 18.4 4 16.5V8.7H7.8V10.7C7.6 10.9 7.5 11.2 7.5 11.4C7.5 12 8 12.4 8.5 12.4C9 12.4 9.5 11.9 9.5 11.4C9.5 11.1 9.4 10.9 9.2 10.7V8.7H14.6V10.6C14.4 10.8 14.3 11.1 14.3 11.4C14.3 12 14.7 12.5 15.3 12.5C15.9 12.5 16.4 12.1 16.4 11.5C16.4 11.2 16.3 11 16.1 10.8V8.8H20V16.5Z" fill="black"></path>
                    </svg>
                </div>



            </nav>
        </>
    )
}