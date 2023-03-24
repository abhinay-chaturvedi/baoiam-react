import React from 'react'

export default function Footer3() {
    return (
        <>
            <div style={{ display: 'flex', backgroundColor:'#f3f3f3', justifyContent:'space-around', 
            paddingLeft:'5rem',paddingRight:'5rem', paddingTop:'4rem', paddingBottom:'4rem' }}>

                <div style={{ display: 'flex' }}>
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg" alt="Free Shipping" 
                    style={{height:'7vh'}}/>
                    <div style={{width:'8vw'}}>
                        <div style={{ borderBottom: '1px solid #e1e1e1', fontSize:'0.9rem', color:'#3f3f51', fontWeight:'500', paddingBottom:'0.3rem' }}>FREE SHIPPING</div>
                        <div style={{fontSize:'0.75rem', color:'#3f3f51', marginTop:'0.3rem'}}>On Orders Above ₹299</div>
                    </div>
                </div>

                <div style={{ display: 'flex' }}>
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg" alt="Easy Returns" 
                    style={{height:'7vh'}}/>
                    <div style={{width:'8vw'}}>
                        <div style={{ borderBottom: '1px solid #e1e1e1', fontSize:'0.9rem', color:'#3f3f51', fontWeight:'500', paddingBottom:'0.3rem' }}>EASY RETURNS</div>
                        <div style={{fontSize:'0.75rem', color:'#3f3f51', marginTop:'0.3rem'}}>15-Day Return Policy</div>
                    </div>
                </div>

                <div style={{ display: 'flex' }}>
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg" alt="brands count" 
                    style={{height:'7vh'}}/>
                    <div style={{width:'8vw'}}>
                        <div style={{ borderBottom: '1px solid #e1e1e1', fontSize:'0.9rem', color:'#3f3f51', fontWeight:'500', paddingBottom:'0.3rem' }}>100% AUTHENTIC</div>
                        <div style={{fontSize:'0.75rem', color:'#3f3f51', marginTop:'0.3rem'}}>Products Sourced Directly</div>
                    </div>
                </div>

                <div style={{ display: 'flex' }}>
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg" alt="1900+ Brands" 
                    style={{height:'7vh'}}/>
                    <div style={{width:'8vw'}}>
                        <div style={{ borderBottom: '1px solid #e1e1e1', fontSize:'0.9rem', color:'#3f3f51', fontWeight:'500', paddingBottom:'0.3rem' }}>1900+ BRANDS</div>
                        <div style={{fontSize:'0.75rem', color:'#3f3f51', marginTop:'0.3rem'}}>1.2 Lakh+ Products</div>
                    </div>
                </div>

                <div>
                    <div style={{fontSize:'0.8rem', marginBottom:'0.5rem'}}>Show us some love ❤ on social media</div>
                    <div className='icons' style={{display:'flex', justifyContent:'space-around'}}>
                        <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-instagram-filled.svg" alt="Instagram" style={{height:'4vh', margin:'0px'}}/>
                        <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-facebook-filled.svg" alt="Facebook" style={{height:'4vh', margin:'0px'}}/>
                        <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-youtube-filled.svg" alt="Youtube" style={{height:'4vh', margin:'0px'}}/>
                        <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-twitter-filled.svg" alt="Twitter" style={{height:'4vh', margin:'0px'}}/>
                        <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-pinterest-filled.svg" alt="Pinterest" style={{height:'4vh', margin:'0px'}}/>
                    </div>
                </div>

            </div>
        </>
    )
}
