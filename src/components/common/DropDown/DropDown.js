import React from 'react';
import './dropDown.css'

const DropDown = ({options, handleSelected, selectedOption}) => {
  return (
    <div>
        <select value={selectedOption} onChange={handleSelected} className='select-opt'>
            {
                options?.map((opt)=>{
                    return <option value={opt.type}>{opt.type}</option>
                })
            }
        </select>
    </div>
  )
}

export default DropDown