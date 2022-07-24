import React from "react"


class HomePage extends React.Component {

    componentDidMount() {
        document.getElementById("pageHeaderBg").style.backgroundImage = "url('/assets/img/home-bg.jpg')"
        document.getElementById("pageHeaderBg").style.transition = "background-image 1s"
        document.getElementById("pageHeaderTitle").innerText = " Clean Blog"
        document.getElementById("pageHeaderSlogan").innerText = "A Blog Theme by Start Bootstrap"
    }

    render() {
        return (
            <>
                HomePage
            </>
        )
    }


}

export default HomePage