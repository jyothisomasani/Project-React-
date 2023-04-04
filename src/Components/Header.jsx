import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
              <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <a href='https://javaguides.net' className='navbar-brand'>Employee Management App</a>
                </div>
                </nav>
                </header>  
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;
