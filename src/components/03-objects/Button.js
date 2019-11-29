import React from 'react';

class Button extends React.Component {
    render () {
        return (
            <div class="btn btn--secondary">
                {this.props.btnText}
            </div>
        );
    }
}

export default Button;