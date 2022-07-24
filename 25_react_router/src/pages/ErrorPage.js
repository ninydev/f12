import React from "react"


class ErrorPage extends React.Component {

    componentDidMount() {
        document.getElementById("pageHeaderBg").style.backgroundImage = "url('/assets/img/home-bg.jpg')"
        document.getElementById("pageHeaderBg").style.transition = "background-image 1s"
        document.getElementById("pageHeaderTitle").innerText = " Error "
        document.getElementById("pageHeaderSlogan").innerText = ""
    }

    render() {
        return (
            <>
                ErrorPage
            </>
        )
    }


}

export default ErrorPage