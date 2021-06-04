import React,{Component} from "react"
import { NavLink,Link } from "react-router-dom"
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
              <a href='/' >
              <h1 className="titleheader barlow-bold-white-32px">MSCD</h1>
              </a>
            </div>
            <div className="menu">
              <a className="service helveticaneue-medium-white-15px" href="/services">Service</a>
              <a className="for-doctors helveticaneue-medium-white-15px" href="/fordoctor">For Doctors</a>
              <a className="melanoma-detection helveticaneue-medium-white-15px" href="/melanoma">Melanoma detection</a>
            </div>
           
          </div>
        )
    }
}

export default NavBar