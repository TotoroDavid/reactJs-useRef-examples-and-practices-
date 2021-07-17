import React, { useState, useRef } from 'react'
import Card from './Card'

const LoadingApp = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                show/hide
            </button>
            {show && <Card />}

        </div>
    )
}

export default LoadingApp
