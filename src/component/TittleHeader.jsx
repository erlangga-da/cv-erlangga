import React, { Component } from 'react'

export default class TittleHeader extends Component {
    render() {
        return (
            <div>
                <div  className="pattern-diagonal-lines-sm yellow max-w-pc" id="header-stripe">
                <h1 className="header-stripe-text">{this.props.judul}</h1>
              </div>
            </div>
        )
    }
}
