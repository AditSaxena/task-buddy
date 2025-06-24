import React from 'react'



function InputBox(props) {
    const handleInput = props.handleInput
    const handleAddItem = props.handleAddItem
    const content = props.content
    return (
        <div className="input-box">
            <input id='text-box' type="text" onChange={handleInput} value={content} />
            <button id='add-btn' onClick={handleAddItem}>Add Item</button>
        </div>
    )
}

export default InputBox