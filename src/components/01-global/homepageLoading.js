import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as HomepageLoading from './loadingIcons/homepageLoading.json'
import * as HomepageDone from './loadingIcons/homepageDone.json'

const loadingIconOptions = {
    loop: true,
    autoplay: true,
    animationData: HomepageLoading.default,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
}

const loadedIconOptions = {
    loop: false,
    autoplay: true,
    animationData: HomepageDone.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
   }
}



export class HomeLoading extends React.Component {

    render(){

        const loadedStyle = {
            display: 'none'
        }

        const loadingStyle = {
            display: 'flex'
        }

       return(
        <div className="h-screen flex absolute z-50 inset-0 bg-tertiary justify-center items-center" style={{...this.props.state.done === false ? loadingStyle : loadedStyle}}>
            {/* <ReactLoading type={"bars"} color={"white"} /> */}
            <FadeIn>
                <div className="flex justify-center items-center">
                    <h1 className="text-white text-4xl font-bold">Loading App</h1>
                    {!this.props.state.loading ? (
                        <Lottie options={loadingIconOptions} height={80} width={80} />
                    ) : (
                        <Lottie options={loadedIconOptions} height={80} width={80} />
                    )}
                </div>                  
            </FadeIn>
        </div>
       )
    }
 }