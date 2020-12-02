import React from 'react'

function fontendLayout(props) {
    return (
        <div>
            <span>Header Here</span>
                {props.children}
            <span>Footer Here</span>
        </div>
    )
}

export default fontendLayout
