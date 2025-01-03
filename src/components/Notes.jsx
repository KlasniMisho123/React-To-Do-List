import React, { useState } from 'react'

export default function Notes(props) {

  const [noteFormActive, setNoteFormActive] = useState(false)

  return (
    <>
      {noteFormActive? 
      (
      <div className='note-form-overlay'>
      <button className='note-form-overlay-btn' 
      onClick={() => {setNoteFormActive(false)}}>
      </button>
      <div className='note-form'> 
        <h3> New Note </h3>
        <input 
          className='new-note-input'
          placeholder='Input your Note..'
          />
          <div className="note-form-btn-div">
            <button className='note-form-btn cancel-btn' >Cancel</button>
            <button className='note-form-btn apply-btn' >Apply</button>
          </div>
        </div>
      </div>
      ) : (null)}

      <div>
        NOTES
      </div>
      <button className="add-note-btn"
        onClick={()=> {setNoteFormActive(true)}}
      >
        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_18_253)">
          <circle cx="29" cy="29" r="25" fill="#6C63FF"/>
          </g>
          <path fillRule="evenodd" clipRule="evenodd" d="M27.5 38.8916C27.5 39.2891 27.658 39.6704 27.9393 39.9514C28.2206 40.2325 28.6022 40.3904 29 40.3904C29.3978 40.3904 29.7794 40.2325 30.0607 39.9514C30.342 39.6704 30.5 39.2891 30.5 38.8916V29.8988H39.5C39.8978 29.8988 40.2794 29.7409 40.5607 29.4598C40.842 29.1787 41 28.7975 41 28.4C41 28.0025 40.842 27.6213 40.5607 27.3402C40.2794 27.0591 39.8978 26.9012 39.5 26.9012H30.5V17.9084C30.5 17.5108 30.342 17.1296 30.0607 16.8485C29.7794 16.5675 29.3978 16.4095 29 16.4095C28.6022 16.4095 28.2206 16.5675 27.9393 16.8485C27.658 17.1296 27.5 17.5108 27.5 17.9084V26.9012H18.5C18.1022 26.9012 17.7206 27.0591 17.4393 27.3402C17.158 27.6213 17 28.0025 17 28.4C17 28.7975 17.158 29.1787 17.4393 29.4598C17.7206 29.7409 18.1022 29.8988 18.5 29.8988H27.5V38.8916Z" fill="#F7F7F7"/>
          <defs>
          <filter id="filter0_d_18_253" x="0" y="0" width="58" height="58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.423529 0 0 0 0 0.388235 0 0 0 0 1 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_253"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_253" result="shape"/>
          </filter>
          </defs>
        </svg>
      </button>

    </>
  )
}
