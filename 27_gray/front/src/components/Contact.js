import ClassMethod from "./useState/ClassMethod";
import HookMethod from "./useState/HookMethod";
import SelectNovaPoshta from "./novaPoshta/SelectNovaPoshta";
import ContactForm from "./forms/ContactForm";
import PasswordForm from "./forms/PasswordForm";
import FormRegistration from "./auth/forms/FormRegistration";
import FormLogin from "./auth/forms/FormLogin";
import FormEditUser from "./auth/forms/FormEditUser";
import FileForm from "./forms/FileForm";

export default function Contact() {

    return(
        <section className="contact-section bg-black" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Address</h4>
                                <hr className="my-4 mx-auto"/>

                                <FormRegistration></FormRegistration>


                                <hr />
                                <div className="small text-black-50">4923 Market Street, Orlando FL</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4 mx-auto"/>

                                <FormLogin></FormLogin>

                                <hr />

                                <div className="small text-black-50"><a href="#!">hello@yourdomain.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4 mx-auto"/>

                                <FormEditUser></FormEditUser>

                                <hr />

                                <div className="small text-black-50">+1 (555) 902-8832</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social d-flex justify-content-center">
                    <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>
    )

}