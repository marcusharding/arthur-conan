import React from 'react';

class Button extends React.Component {
    render () {
        return (
            <div className="btn btn--secondary">
                {this.props.btnText}
            </div>
        );
    }
}

export default Button;