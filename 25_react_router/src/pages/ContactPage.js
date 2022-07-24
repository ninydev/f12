import React from "react"


class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isNameValid: true,
            inpNameClass: 'form-control',
            email: '',
            isEmailValid: true,
            phone: '',
            isPhoneValid: true,
            message: '',
            isMessageValid: true,
            isFormValid: false,
            btnSubmitClass: 'btn btn-primary text-uppercase disabled'
        }
        this.onChange= this.onChange.bind(this) // Разрешить методу доступ к классу
    }

    /**
     * Динамический перенос данных в state
     * @param e
     */
    onChange(e){
        const oldState = this.state
        oldState[e.target.name] = e.target.value
        this.setState(oldState)

        this.validateForm()
    }

    send(){
        // console.log('send')
        let data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message
        }


    }

    validateForm(){
        const oldState = this.state

        if(oldState.name.length === 0) {
            oldState.isNameValid = false
            oldState.inpNameClass = 'form-control is-invalid'
            // document.getElementById("name_required").style.display = "block"
        } else {
            oldState.isNameValid = true
            oldState.inpNameClass = 'form-control'
            // document.getElementById("name_required").style.display = "none"
        }

        if(oldState.isNameValid && oldState.isEmailValid && oldState.isPhoneValid && oldState.isMessageValid) {
            oldState.isFormValid = true
            oldState.btnSubmitClass = 'btn btn-primary text-uppercase'
        } else {
            oldState.isFormValid = false
            oldState.btnSubmitClass = 'btn btn-primary text-uppercase disabled'
        }

        this.setState(oldState);
    }

    componentDidMount() {
        document.getElementById("pageHeaderBg").style.backgroundImage = "url('/assets/img/contact-bg.jpg')"
        document.getElementById("pageHeaderBg").style.transition = "background-image 1s"
        document.getElementById("pageHeaderTitle").innerText = " Contact Me"
        document.getElementById("pageHeaderSlogan").innerText = "Have questions? I have answers."
    }


    render() {
        return (
            <>
            <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as
                possible!</p>
        <div className="my-5">
            <form id="contactForm">
                <div className="form-floating">
                    <input onChange={this.onChange} name="name" className={this.state.inpNameClass} id="name" type="text" placeholder="Enter your name..." />
                    <label htmlFor="name">Name</label>
                    <div className="invalid-feedback" id="name_required">A name is required.</div>
                </div>
                <div className="form-floating">
                    <input onChange={this.onChange}  name="email" className="form-control" id="email" type="email" placeholder="Enter your email..."/>
                    <label htmlFor="email">Email address</label>
                    <div className="invalid-feedback" id="email_required">An email is required.</div>
                    <div className="invalid-feedback" id="email_email">Email is not valid.</div>
                </div>
                <div className="form-floating">
                    <input onChange={this.onChange}  name="phone" className="form-control" id="phone" type="tel" placeholder="Enter your phone number..."/>
                    <label htmlFor="phone">Phone Number</label>
                    <div className="invalid-feedback" id="phone_required">A phone number is required.
                    </div>
                </div>
                <div className="form-floating">
                    <textarea onChange={this.onChange} className="form-control" id="message" placeholder="Enter your message here..." style={{height: '12rem'}} name={"message"}></textarea>
                    <label htmlFor="message">Message</label>
                    <div className="invalid-feedback" id="message_required">A message is required.</div>
                </div>

                <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">Error sending message!</div>
                </div>

                <button onClick={this.send.bind(this)} disabled={!this.state.isFormValid} className={this.state.btnSubmitClass} id="submitButton" type="button">Send</button>
            </form>
        </div>

                </>
        )
    }


}

export default ContactPage