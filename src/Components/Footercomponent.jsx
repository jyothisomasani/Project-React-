import React from 'react';
import PropTypes from 'prop-types';

class Footercomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <footer className='footer'>
                <span className='text-muted'>All Rights Reserved 2020</span>

                </footer>
            </div>
        );
    }
}

Footercomponent.propTypes = {};

export default Footercomponent;
