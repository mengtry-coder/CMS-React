import React from 'react'

function loginLayout(props) {
    return (
        <div className={props.class}>
            {props.children}
        </div>
    )
}

export default loginLayout
