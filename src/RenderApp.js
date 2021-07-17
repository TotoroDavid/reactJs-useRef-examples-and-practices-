import React, { useState, useEffect, useRef } from 'react'

const RenderApp = () => {

    const [text, setText] = useState('')
    const renderRef = useRef('') //render 1 

    //render 1 ref = 1
    useEffect(() => {
        renderRef.current++
        // render 1 ref ++ = 2
    })

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <h1>Renders : {renderRef.current}</h1>
        </div>
    )
}

export default RenderApp
