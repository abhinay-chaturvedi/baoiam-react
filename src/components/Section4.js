import React from 'react'
import './myStyle.css'

export default function Section4() {
  return (
    <>
    <div style={{marginLeft:'3rem', marginRight:'3rem', marginBottom : '3rem'}}>
        <h2 style={{marginBottom :'0.5rem'}}>First Purchase App Offers</h2>
        <div className='images' style={{display : 'flex', overflowY : 'hidden'}}>
            <img src='https://images-static.nykaa.com/uploads/1cb78ed2-2f99-4f40-b7a4-4ab7df4a66a9.jpg?tr=w-1200,cm-pad_resize' style={{height:'12vh', marginLeft:'0rem'}}></img>
            <img src='https://images-static.nykaa.com/uploads/c9a66f59-0934-4b33-9652-e498bd07a155.jpg?tr=w-1200,cm-pad_resize' style={{height:'12vh', marginRight:'0rem'}}></img>
        </div>
    </div>
    </>
  )
}
