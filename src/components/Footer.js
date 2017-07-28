import React, {Component} from 'react'
import '../css/Footer.css'

class Footer extends Component {
    render() {

        return (

            <div className="footer">
              <div><a target="_blank" rel="noopener noreferrer" href ="http://www.jkoo87.com/"><div>By Jeong Hoon Koo</div></a></div> <hr/>
              <a target="_blank" rel="noopener noreferrer" href ="https://github.com/jkoo87/react-redux-memory-game"><div>Github Code</div></a> |
              | <a target="_blank" rel="noopener noreferrer" href ="https://www.linkedin.com/in/jkoo87/"><div>LinkedIn</div></a> |
              | <a href="mailto:junghoone17@gmail.com?subject=Hello%20Jeong%20Hoon%20Koo" target="_top"><div >junghoone17@gmail.com</div></a>
            </div>

        );
    }
}

export default Footer;
