import React from "react"


class PostsPage extends React.Component {

    componentDidMount() {
        document.getElementById("pageHeaderBg").style.backgroundImage = "url('/assets/img/post-bg.jpg')"
        document.getElementById("pageHeaderBg").style.transition = "background-image 1s"
        document.getElementById("pageHeaderTitle").innerText = "Post"
        document.getElementById("pageHeaderSlogan").innerText = "Problems look mighty small from 150 miles up"
        let ph = document.getElementById('pageHeading')
        let span = document.createElement('span')
        // ph.className = 'post-heading'
        span.id = 'pagePostSpan'
        span.className = 'meta'
        span.innerHTML = '<a href="#!">Start Bootstrap</a> on August 24, 2022'
        ph.appendChild(span)
    }

    componentWillUnmount() {
        let span = document.getElementById('pagePostSpan')
        let ph = document.getElementById('pageHeading')
        ph.removeChild(span)
        // ph.className = 'page-heading'
    }


    render() {
        return (
            <>
                PostsPage
            </>
        )
    }


}

export default PostsPage