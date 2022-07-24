import React from "react"


class PageHeader extends React.Component {

    render() {
        return (
            <header id="pageHeaderBg" className="masthead">
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div id="pageHeading" className="page-heading">
                                <h1 id="pageHeaderTitle">About Me</h1>
                                <h2 id="pageHeaderSlogan" className="subheading">This is what I do.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }


}

export default PageHeader