import React, { Component, useRef } from "react"
import "./services.css"
import $ from "jquery"

import NavBar from "./navbar.js"

class Services extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageURL: null,
            accuracy: 0
        }
    }

    componentDidMount(){
        fetch(`http`)
    }

    buildImgTag(){
        let imgTag = null;
        if (this.state.imageURL !== null)
          imgTag = (<div className="row">
                      <div className="small-9 small-centered columns" >
                        <img className="thumbnail"  style={{height:405,width:500,maxHeight:250,maxWidth:500,position:"absolute",top:1000,left:250,borderRadius:25}} src={this.state.imageURL}></img>
                      </div>
                    </div>);
        return imgTag;
      }

    async getpicture(picture) {
        let file = picture.target.files
        
        

        let reader = new FileReader();
        reader.readAsDataURL(file[0]);  //convert image into base64 string
        reader.onload = function(picture){
            this.setState({imageURL:picture.target.result})
        
       console.log(this.state.imageURL)
         fetch(`http://127.0.0.1:5000/predict`, {
            method: 'POST',
            headers:{'Content-Type': "application/json","accept":"application/json"},
            body:JSON.stringify({
                imagedata: this.state.imageURL
            })
        })

        .then(response => response.json())
        .then(data => {
            this.setState({
                accuracy: data
            })
        })
    }.bind(this)
        }
        
    

    handlechange(e){
        this.getpicture(e)
        if(this.props.onChange !== undefined){
            this.props.onChange(e)
        }
    }

    render() {
        const imgtag = this.buildImgTag();
        return (
            <div>
                <NavBar />

                <div className="rectangle-39">
                    <div className="firstservicesdiv">
                        <h1 className="title-firstservices">HOW DOES IT WORK?</h1>
                        <p className="lorem-ipsum-is-simpl helveticaneue-bold-white-15px">
                            Our Melanoma detection machine learning model is trained on Inception v3 classifier. Upload a clear dermascopic image to get your result{" "}
                        </p>
                        <button className="button1">Check Your Skin Now
                            </button>
                    </div>

                    <img
                        className="dermaimage"
                        src="dermaimage.png"
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
                   
                    <h1 className="accuracy">{this.state.accuracy}</h1>
                </div>

                
                <label className="browse-pc">
                    <input id='file-upload' type='file' onChange={this.handlechange.bind(this)} />
                Browse PC</label>{imgtag}
                


                {/* <div className="thirdpart-services">

                    
                </div> */}

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
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

            </div>
        )
    }
}

export default Services