import React, { Component } from "react"
import NavBar from "./navbar.js"
import "./research.css"


class Research extends Component {

    render() {
        return (
            <div>
                <NavBar />

                <img
                    className="rotation-1-4"
                    src="rotation-1-4.png"
                />

                <img
                    className="rotation-1-3"
                    src="rotation-1-3.png"
                />

                <img
                    className="rotation-1-1"
                    src="rotation-1-1.png"
                />

                <img
                    className="rotation-1-2"
                    src="rotation-1-2.png"
                />



                <div className="rectangle-3-research"></div>
                <div className="ellipse-15 "></div>
                <div className="rectangle-2 "></div>


                <div className="position-firstresearch">
                    <h1 className="a-single-neuron-in-t ">
                        A single neuron in the brain is an incredibly complex machine that even today we don&#39;t understand. A single
                        &#39;neuron&#39; in&nbsp;&nbsp;a neural network is an incredibly simple mathematical function that captures a
            minuscule fraction of the complexity of a biological neuron. <br />
                        <br />
                    </h1>
                    <h1 className="title-research">~Andrew Ng</h1>

                </div>

                <div className="secondpart-research">
                    <img
                        className="recentpaper"
                        src="recentpaper.png"
                    />
                    <h1 className="abstract-skin-can segoeui-bold-black-40px">
                        <h1 className="recent-paper ">Recent Papers Published</h1>

                        <span className="span1-research">Abstract:</span>
                        <span className="span2-research">
                            {" "}
                            <br />
                        </span>
                        <span className="span3-research">
                            <br />
        Skin cancer is an alarming disease for mankind. The necessity of early diagnosis of the skin cancer have been
        increased because of the rapid growth rate of Melanoma skin cancer, it &amp; acute; high treatment costs, and
        death rate. This cancer cells are detected manually and it takes time to cure in most of the cases. This paper
        proposed an artificial skin cancer detection system using image processing and machine learning method. The
        features of the affected skin cells are extracted after the segmentation of the dermoscopic images using feature
        extraction technique. A deep learning based method convolutional neural network classifier is used for the
        stratification of the extracted features. An accuracy of 89.5% and the training accuracy of 93.7% have been
        achieved after applying the publicly available data set.
      </span>
                    </h1>
                </div>


                <div className="thirdpart-research">
                    <h1 className="text-1-research"> Latest Papers on Melanoma Detection</h1>
                <img
                        className="image1"
                        src="image1.png"
                    />
                    <img
                        className="image2"
                        src="image2.png"
                    />
                    <img
                        className="image3"
                        src="image3.png"
                    />
                    
                    <div className="text-1-thirdpart1 ">Business &amp; corporate</div>
                     <p className="text-1-thirdpart2 helveticaneue-regular-normal-white-15px">
                        Find fault with a man who chooses to enjoy a pleasure that has no annoying.
                    </p>

                    <div className="text-2-thirdpart1 ">Food &amp; restaurant</div>
                     <p className="text-2-thirdpart2 helveticaneue-regular-normal-white-15px">
                        Find fault with a man who chooses to enjoy a pleasure that has no annoying.
                    </p>

                    <div className="text-3-thirdpart1 ">Travel &amp; tourism</div>
                     <p className="text-3-thirdpart2 helveticaneue-regular-normal-white-15px">
                        Find fault with a man who chooses to enjoy a pleasure that has no annoying.
                    </p>
                </div>

            </div>
        )
    }
}

export default Research