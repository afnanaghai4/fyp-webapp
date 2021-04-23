import React, { Component } from "react"
import NavBar from "./navbar"
import "./fordoctors.css"

class ForDoctor extends Component {

    render() {
        return (
            <div>
                <NavBar />

                <img
                    className="rotation-1-2"
                    src="rotation-1-2.png"
                />

                <div className="banner">


                    <div className="headingpart">
                        <h1 className="text-1 segoeui-normal-fun-blue-45px"></h1>
                        <span className="span2">Regulated medical device helping to detect cancer</span>
                    </div>

                    <div className="read-more">
                        <h1 className="check-your-skin-now segoeui-normal-white-30px">Contact Us</h1>
                    </div>
                </div>

                <div className="banner2">
                    <h1 className="text-1-how segoeui-normal-fun-blue-45px how">How MSCD helps Healthcare Professionals</h1>


                    <img
                        className="doctorimage2"
                        src="doctorimage2.png"
                    />


                    <h1 className="text-1how2 segoeui-normal-black-45px how2">
                        <span className="span">. </span>

                        <span className="span-1">
                            Using MSCD can be the prompt for healthcare professionals to book a follow up consultation with the patient.
                        <br />
                        </span>
                        <span className="span">
                            <br />.{" "}
                        </span>
                        <span className="span4">
                            Healthcare professionals receive the outcome of our clinically validated algorithm to inform their own diagnosis
                    </span>
                    </h1>

                </div>

                <div className="thirdpart">
                    <h1 className="title-mscd3 helveticaneue-bold-fun-blue-40px mscd3">How MSCD Works</h1>

                    <img
                        className="loginimage"
                        src="login.png"
                    />
                    <div className="text-login">
                        <div className="log-in12 ">Log In</div>
                        <p className="ASD">Log in with the credentials you entered when registering on our website.</p>
                    </div>

                    <img
                        className="secondimage"
                        src="images.png"
                    />

                    <div className="x2">
                        <div className="browse-image ">Browse Image</div>
                        <p className="text-1-browse">Upload the dermascopic image from your computer onto our website.</p>
                    </div>


                    <img
                        className="thirdimage"
                        src="schedule-your-next-check.png"
                    />

                    <div className="x3">
                        <div className="get-results ">Get Results</div>
                        <p className="text-1-getresults">Press predict button on the right side so that our integrated AI model will tell you the probability about whether image has melanomic cancer traces or not.</p>
                    </div>
                </div>


            </div>
        )
    }
}

export default ForDoctor