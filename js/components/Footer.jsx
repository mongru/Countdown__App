import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <a href="https://github.com/mongru/Countdown__App" target="_blank">
                    <i id="github" className="fa fa-github-square fa-x" aria-hidden="true"></i>
                </a>
                <p className="footer__text">
                    Built with fun while procrastiworking by <span><a href="https://github.com/mongru" target="_blank">Me</a></span> <br/>
                    Photo credits <a href="https://unsplash.com/@punttim" target="_blank">Tim Gouw</a>
                </p>
            </div>
        )
    }
}

export default Footer;
