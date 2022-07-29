import React from "react"


class FormRegister extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isEmailValid: true,
            password: '',
            passwordC: '',
            isPasswordValid: true,

            isFormValid: true,
            btnSubmitClass: 'btn btn-primary text-uppercase disabled'
        }
        this.onChange= this.onChange.bind(this) // Разрешить методу доступ к классу
    }

    onChange(e){
        const oldState = this.state
        oldState[e.target.name] = e.target.value
        this.setState(oldState)
    }


    send(){
        // console.log('send')
        let data = {
            email: this.state.email,
            password: this.state.password,
        }

        console.log('send')
        console.log(data)

        fetch('http://localhost:3333/api' + '/auth/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data=> {
                console.log(data)
            })
            .catch(err=> {
                console.log("Error")
                console.log(err)
            })



    }


    render() {
        return (
            <>
                <form id="contactForm">
                    <div className="form-floating">
                        <input onChange={this.onChange}  name="email" className="form-control" id="email" type="email" placeholder="Enter your email..."/>
                        <label htmlFor="email">Email address</label>
                        <div className="invalid-feedback" id="email_required">An email is required.</div>
                        <div className="invalid-feedback" id="email_email">Email is not valid.</div>
                    </div>
                    <div className="form-floating">
                        <input onChange={this.onChange}  name="password" className="form-control" id="phone" type="tel" placeholder="Enter your password..."/>
                        <label htmlFor="password">Password</label>
                        <div className="invalid-feedback" id="phone_required">A password is required.
                        </div>
                    </div>
                    <div className="form-floating">
                        <input onChange={this.onChange}  name="passwordC" className="form-control" id="phone" type="tel" placeholder="Enter your password..."/>
                        <label htmlFor="passwordC">Password</label>
                        <div className="invalid-feedback" id="phone_required">A password is required.
                        </div>
                    </div>

                    <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">Error register!</div>
                    </div>

                    <button onClick={this.send.bind(this)} disabled={!this.state.isFormValid} className={this.state.btnSubmitClass} id="submitButton" type="button">Send</button>
                </form>
            </>
        )
    }


}

export default FormRegister