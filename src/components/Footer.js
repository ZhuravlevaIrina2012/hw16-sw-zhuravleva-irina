import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className='footer row align-items-center no-gutters'>
                <div className="btn btn-danger col-2 offset-2 text-center">
                    Send me an <span className="email text-uppercase">email</span>
                </div>
            </div>
        );
    }
}

export default Footer;