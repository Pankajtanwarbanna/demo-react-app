import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Navbar extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top animated slideInDown">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/"> Pankaj Tanwar </a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a target="_blank" href="https://drive.google.com/open?id=1y8B56FY1I9od6trhDGp_IR6p-nkfNTng">RESUME</a></li>
                            <li><a target="_blank" href="https://www.instagram.com/the2ndfloorguy/">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <div className="stars"/>
                <div className="twinkling">
                    <div className="middle text-center">
                        <img src="./designer.png" className="img-circle animated infinite bounce" alt="Cinque Terre" width={304} height={236} />
                        <h3 className="animated slideInLeft"> Pankaj Tanwar </h3>
                        <p className="animated slideInUp"> My code never has bugs, it just develops random unexpected features</p>
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<Navbar/>, document.getElementById('Navbar'));
ReactDOM.render(<Content />, document.getElementById('root'));