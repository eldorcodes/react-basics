import React from 'react'

const Btn = ({text, backColor, textColor, padding, margin, addItem}) => {
    return (
        <button
        onClick={addItem}
        style={{
            backgroundColor:backColor,
            color: textColor,
            padding: padding,
            margin:margin
        }}
        >{text}</button>
    )
}
export default Btn