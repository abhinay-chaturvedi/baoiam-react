import React from 'react'
import './myStyle.css'

export default function Images() {
  return (
    <>
      <div id="mainDiv" style={{ display: 'flex', overflowY: 'hidden' }}>
        <div style={{ position: 'relative' }}>
          <img src='https://images-static.nykaa.com/uploads/06c09a12-4c2d-4e1b-a762-6d8589b9e4c9.jpg?tr=w-600,cm-pad_resize' style={{ marginLeft: '0rem' }}></img>
          <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
            <h2 style={{ margin: '0px', color: 'white' }}>Flat 15% Off</h2>
            <h3 style={{ margin: '0px', color: 'white' }}>On Entire Range</h3>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img src='https://images-static.nykaa.com/uploads/500e334a-d2d0-4944-905d-17153d80447b.jpg?tr=w-600,cm-pad_resize'></img>
          <div style={{ position: 'absolute', bottom: '1rem', left: '2rem' }}>
            <h2 style={{ margin: '0px', color: 'white' }}>Shampoo Bestsellers</h2>
            <h3 style={{ margin: '0px', color: 'white' }}>Up To 40% Off</h3>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img src='https://images-static.nykaa.com/uploads/f19c2c0d-6443-47fa-aec5-b5ed1b2547a8.jpg?tr=w-600,cm-pad_resize'></img>
          <div style={{ position: 'absolute', bottom: '1rem', left: '2rem' }}>
            <h2 style={{ margin: '0px', color: 'white' }}>Up To 20% Off</h2>
            <h3 style={{ margin: '0px', color: 'white' }}>Ultimate Dose of Vitamin C</h3>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img src='https://images-static.nykaa.com/uploads/2f8d8bc4-25ca-4449-8450-caf5f5045e4e.jpg?tr=w-600,cm-pad_resize'></img>
          <div style={{ position: 'absolute', bottom: '1rem', left: '2rem' }}>
            <h2 style={{ margin: '0px', color: 'white' }}>Buy 2 Get 1 Free</h2>
            <h3 style={{ margin: '0px', color: 'white' }}>Flat 10% Off on Single's</h3>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img src='https://images-static.nykaa.com/uploads/32ceedfd-87a9-4030-a7ed-761d2278258b.gif?tr=w-600,cm-pad_resize'></img>
          <div style={{ position: 'absolute', bottom: '1rem', left: '2rem' }}>
            <h2 style={{ margin: '0px', color: 'white' }}>Flat 50% Off</h2>
            <h3 style={{ margin: '0px', color: 'white' }}>On Your Summer Must-Haves!</h3>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img src='https://images-static.nykaa.com/uploads/6ab30b92-66e2-490f-a827-fad792295a2e.png?tr=w-600,cm-pad_resize' style={{ marginRight: '0rem' }}></img>
          <div style={{ position: 'absolute', bottom: '1rem', left: '2rem' }}>
            <h2 style={{ margin: '0px', color: 'white' }}>On 3000: Lipstick worth 1950!</h2>
            <h3 style={{ margin: '0px', color: 'white' }}>On 5500: Highlighter worth 3550</h3>
          </div>
        </div>
      </div>
    </>
  )
}
