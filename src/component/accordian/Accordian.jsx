import React, { useState } from 'react'
import data from './data'
import "./style.css";

function Accordian() {
  const [singleSelect, setSingleSelect] = useState(null);
  const [multipleSelection, setMultipleSelection] = useState(false);
  const [multipleSelect, setMultipleSelect] = useState([])

  const handleSingle = (el) => {
    setSingleSelect(el.id === singleSelect ? null : el.id)
  }

  const handleMultiple = (el) => {
    const multiArray = [...multipleSelect];

    const id = multiArray.indexOf(el.id);
    if(id === -1){
        multiArray.push(el.id);
    }
    else{
        multiArray.splice(id, 1);
    }

    setMultipleSelect(multiArray);
    console.log(multipleSelect)
  }

  return (
    <div className='wrapper'>
      <button onClick={() => setMultipleSelection((prev) => !prev)}>Multiple selcet</button>
      <div className='accordian'>

        {data.map((el, index) => (
            <>
                <div key = {index} className='item'>
                    <h3>{el.question}</h3>
                    <span onClick={multipleSelection ? () => handleMultiple(el) : () => handleSingle(el)}>+</span>
                    {multipleSelection ? 
                        (multipleSelect.indexOf(el.id) !== -1 && <div className='item'>{el.answer}</div>)
                        :(singleSelect === el.id) && (<div className='item'>{data[singleSelect - 1].answer}</div>)
                    }
                </div>
            </>
        ))}
      </div>
    </div>
  )
}

export default Accordian
