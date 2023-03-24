import React from 'react'

export default function SignIn() {
    return (
        <>
            <div style={{ width: '22vw', paddingLeft: '1rem', paddingRight: '1rem', borderRadius: '10px', 
            boxShadow: '0px 0px 20px grey', paddingTop: '1.5rem', paddingBottom: '1.5rem',
            zIndex:'100', position: 'absolute', right: '7%', top: '15%', backgroundColor:'white' }}>
                <form>

                    <p style={{ margin: '0px', fontWeight: '500', fontSize: '1.5rem' }}>Login / Create Account</p>
                    <p style={{ margin: '0px',fontWeight:'300', fontSize: '1rem', marginTop:'0.5rem' }}>
                        Register now and get 2000 Nykaa reward points instantly!
                    </p>

                    <div className='buttons' style={{ display: 'flex', flexDirection: 'column' }}>
                        <button style={{
                            color: '#ea3b90', backgroundColor: 'white', borderRadius: '7px',
                            border: '1px solid rgba(111, 121, 129, 0.16)',
                            paddingTop:'0.5rem', paddingBottom:'0.5rem',
                            marginBottom:'1rem', marginTop:'1rem'
                        }}>
                            <b style={{marginRight:'0.5rem'}}>Sign in with Mobile / Email</b>
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.66667 0.166992L8.41667 1.41699L12.2253 5.22559H0.5V6.89225H12.2253L8.41667 10.7008L9.66667 11.9508L15.5586 6.05892L9.66667 0.166992Z" fill="#E80071"></path>
                            </svg>
                        </button>

                        <button style={{
                            color: '#ea3b90', backgroundColor: 'white', borderRadius: '7px',
                            border: '1px solid rgba(111, 121, 129, 0.16)',
                            paddingTop:'0.5rem', paddingBottom:'0.5rem',
                            display:'flex', justifyContent:'center', alignItems:'center'
                        }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.089 10.2023C19.089 9.45486 19.0271 8.9094 18.8931 8.34375H10.1836V11.7175H15.2959C15.1929 12.5559 14.6363 13.8185 13.3994 14.667L13.3821 14.7799L16.1359 16.8706L16.3266 16.8893C18.0788 15.3034 19.089 12.97 19.089 10.2023Z" fill="#4285F4"></path><path d="M10.1815 19.0908C12.6861 19.0908 14.7887 18.2827 16.3246 16.8888L13.3973 14.6665C12.614 15.2019 11.5626 15.5756 10.1815 15.5756C7.72842 15.5756 5.64639 13.9898 4.9042 11.7979L4.79542 11.8069L1.93198 13.9786L1.89453 14.0807C3.41997 17.0503 6.55336 19.0908 10.1815 19.0908Z" fill="#34A853"></path><path d="M4.90539 11.7981C4.70955 11.2324 4.59622 10.6263 4.59622 10.0001C4.59622 9.37378 4.70955 8.76774 4.89508 8.20209L4.8899 8.08162L1.99057 5.875L1.89571 5.91922C1.267 7.15156 0.90625 8.53544 0.90625 10.0001C0.90625 11.4647 1.267 12.8485 1.89571 14.0809L4.90539 11.7981Z" fill="#FBBC05"></path><path d="M10.1815 4.42433C11.9234 4.42433 13.0984 5.1617 13.7684 5.77791L16.3864 3.27283C14.7785 1.80818 12.6861 0.90918 10.1815 0.90918C6.55336 0.90918 3.41997 2.94958 1.89453 5.91927L4.8939 8.20214C5.64639 6.01022 7.72842 4.42433 10.1815 4.42433Z" fill="#EB4335"></path>
                            </svg>
                            <b style={{marginLeft:'0.5rem', marginRight:'0.5rem'}}>Google</b>
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.66667 0.166992L8.41667 1.41699L12.2253 5.22559H0.5V6.89225H12.2253L8.41667 10.7008L9.66667 11.9508L15.5586 6.05892L9.66667 0.166992Z" fill="#E80071"></path>
                            </svg>
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}
