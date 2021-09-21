import { Component } from 'react';

class Custom extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                Other option.
            </div>
        );
    }
}

export default Custom;