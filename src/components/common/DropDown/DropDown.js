import React ,{useContext}from 'react';
import ThemeContext from '../../../context/ThemeContext';
import './dropDown.css'


const DropDown = ({options, handleSelected, selectedOption}) => {
  const theme = useContext(ThemeContext)
  console.log(theme);
  return (
    <div>
        <select value={selectedOption} onChange={handleSelected} style={{backgroundColor: theme.background_color}} className='select-opt'>
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