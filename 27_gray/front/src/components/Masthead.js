import {useEffect} from "react";
import {useSpring, animated} from "react-spring";
import GoogleMapsTest from "./testing/GoogleMapsTest";
import GoogleMapTestModule from "./testing/GoogleMapTestModule";

export default function Masthead() {
    // useEffect(() => {
    //     console.log('use Effect Masthead')
    // });
    //
    // const animateStyles = useSpring({
    //     from: { opacity: 0 } ,
    //     to: { opacity: 1, background: '#f00'},
    //     leave: { opacity: 0 },
    //     delay: 0
    // })

    return (
        <header className="masthead" id="masthead">
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Grayscale</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme
                            created by Start Bootstrap.</h2>
                        <GoogleMapTestModule></GoogleMapTestModule>
                        <a className="btn btn-primary" href="#about">Get Started</a>
                    </div>
                </div>
            </div>
        </header>
    )

}