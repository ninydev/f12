import React from "react"


class AboutPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementById("pageHeaderBg").style.backgroundImage = "url('/assets/img/about-bg.jpg')"
        document.getElementById("pageHeaderTitle").innerText = " About Me"
        document.getElementById("pageHeaderSlogan").innerText = "This is what I do."
    }

    render() {
        return (
            <>
                AboutPage
            </>
        )
    }


}

export default AboutPage