import React from 'react'

const TextArea = ({label, state, setState, height = '100px'}) => {
  return (
    <div className="form-floating">
     <textarea className="form-control" 
               placeholder={label} 
               value={state}
               onChange={e => setState(e.target.value)}
               id="floatingTextarea2Disabled"
               style={{height: height}}
      ></textarea>
     <label htmlFo="floatingTextarea2Disabled">{label}</label>
    </div>
  )
}

export default TextArea