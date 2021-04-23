import React, { Component } from "react"
import "./services.css"

import NavBar from "./navbar.js"

class Services extends Component {

    render() {
        return (
            <div>
                <NavBar />

                <div className="rectangle-39">
                    <div className="firstservicesdiv">
                        <h1 className="title-firstservices">HOW DOES IT WORK?</h1>
                        <p className="lorem-ipsum-is-simpl helveticaneue-bold-white-15px">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five{" "}
                        </p>
                        <button className="button1">Check Your Skin Now
                            </button>
                    </div>

                    <img
                        className="dermaimage"
                        src="dermaimage.png"
                    />
                    <img
                        className="path-45"
                        src="path-45.png"
                    />
                    <img
                        className="icon-awesome-circle-notch"
                        src="icon-awesome-circle-notch.png"
                    />
                </div>

                <div className="rectangle-40">
                    <img
                        className="icon-material-add-a-photo"
                        src="icon-material-add-a-photo.png"
                    />
                    <h1 className="title-secondpartservices ">UPLOAD PICTURE</h1>
                </div>

                <div className="rectangle-41">
                    <h1 className="secondpartservices">DETAILS</h1>
                    <img
                        className="path-47"
                        src="path-47.png"
                    />
                </div>

                <button className="browse-cloud">BROWSE CLOUD</button>
                <button className="browse-pc">BROWSE PC</button>

                <div className="thirdpart-services">

                    <h1 className="title-thirdpartservices">INSIGHTS:</h1>
                </div>

                <div className="fourthpart-services">
                    <div className="title-4thpart">
                        <h1 className="title-1-1-4thpart ">MSCD Service</h1>
                        <p className="text-1-4thpart ">provides doctors with the initial insight which can contribute significantly in giving final verdict if patient has developed skin cancer or not.</p>
                    </div>

                    <img
                        className="images1"
                        src="images.png"
                    />
                    <img
                        className="schedule-your-next-check1"
                        src="schedule-your-next-check.png"
                    />

                    <img
                        className="login1"
                        src="login.png"
                    />

                    <div className="textlogin-services">
                        <div className="login1-services">Log In</div>
                        <p className="text-1-loginservices">Log in with the credentials you entered when registering on our website.</p>
                    </div>

                    <div className="x2-services">
                        <div className="browse-image-services">Browse Image</div>
                        <p className="text-1-browseservices">Upload the dermascopic image from your computer onto our website.</p>
                    </div>

                    <div className="x3-services">
                        <div className="get-results-services">Get Results</div>
                        <p className="text-1-getresults-services">Press predict button on the right side so that our integrated AI model will tell you the probability about whether image has melanomic cancer traces or not.</p>
                    </div>

                </div>

                <div className="fifthpart-services">
                    <div className="title-1-fifthpartservices">
                        <h1 className="title-fifthpartservices">HOW TO UPLOAD?</h1>
                        <p className="mscd-uses-ai-models-fifthpartservices">MSCD uses AI models to help doctors increase their accuracy of correctly predicting if the patient has traces
                        of melanoma cancer or not.
          <br />
                            <br />
          Our AI model analyzes the photo uploaded and helps the doctor in gaining initial insights regarding the image
          which later helps him/her in his analysis.
          <br /></p>
                    </div>

                    <img
                        className="takephotoimage"
                        src="takephotoimage.png"
                    />

                </div>


            </div>
        )
    }
}

export default Services