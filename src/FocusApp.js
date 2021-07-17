import React, { useState, useRef } from 'react'

const FocusApp = () => {

    const [text, setText] = useState('hello')
    const inputRef = useRef()

    const handleFocus = () => {
        const input = inputRef.current

        input.focus()

        // console.log(input.value)
        // input.value = 'Value mutate'

        // const input = document.getElementById('input')
        // console.log(input.value)
        // input.value = 'text mutate'
        // input.focus()
    }

    return (
        <div>
            <input
                ref={inputRef}
                // id="input"
                type=""
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleFocus}  >
                Focus
            </button>
        </div>
    )
}

export default FocusApp
