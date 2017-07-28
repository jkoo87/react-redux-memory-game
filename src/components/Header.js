import React, {Component} from 'react'
import '../css/Header.css'

class Header extends Component {

    render() {
        return (

            <div className="header">
              <div className="item" ><a href="/">MEMORY GAME<br/><hr/><div className="subTitle">with React and Redux</div></a></div>
            </div>

        );
    }
}

export default Header;
