import React, { Component } from 'react'

export class error extends Component {
    render() {
        return (
            <div>
                <div className="logo">
                  <Image
                    width={100}
                    src="./not_found.svg"
                    />
                </div>
                <h1>Page Not Found!</h1>
            </div>
        )
    }
}

export default error
