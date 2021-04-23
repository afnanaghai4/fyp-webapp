import React,{Component} from "react"
import './navbar.css'

class NavBar extends Component{
    render(){
        return(
            <div className="header">
            <div className="logo">
            
              <img
                className="rotation-1"
                src="rotation-1-5.png"
              />
              <h1 className="titleheader barlow-bold-white-32px">MSCD</h1>
            </div>
            <div className="menu">
              <div className="service helveticaneue-medium-white-15px">Service</div>
              <div className="for-doctors helveticaneue-medium-white-15px">For Doctors</div>
              <div className="melanoma-detection helveticaneue-medium-white-15px">Melanoma detection</div>
              <div className="place helveticaneue-medium-white-15px">Research</div>
              <div className="recent-case-studies helveticaneue-medium-white-15px">Recent CaseStudies</div>
              <div className="log-in helveticaneue-medium-white-15px">LogIn</div>
            </div>
            <div className="say-hi">
              <div className="sign-up helveticaneue-medium-white-15px">Sign Up</div>
            </div>
          </div>
        )
    }
}

export default NavBar