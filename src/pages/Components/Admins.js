import React from "react";
import { Footer, Header } from "../../components/admin";
import SideBar from "../../components/admin/sidebar";

const Admins = () => {
    return(
        <>
        <Header />
        <SideBar />
        <div className="main-content">
        <section className="section">
        <div className="section-header">
            <h1>Admins</h1>
        </div>
          <div className="section-body">
            <div className="row">
              <div className="col-12 col-md-8 col-lg-8">
                <div className="card">
                </div>
                <div className="card">
                  <form className="needs-validation" noValidate>
                    <div className="card-body">
                      <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" className="form-control" required />
                        <div className="invalid-feedback">
                          What's your name?
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" required />
                        <div className="invalid-feedback">
                          Oh no! Email is invalid.
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" required />
                        <div className="invalid-feedback">
                          Oh no! Password is invalid.
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" required />
                        <div className="invalid-feedback">
                          Oh no! Password is invalid.
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Mobile No</label>
                        <input type="number" className="form-control" required />
                        <div className="invalid-feedback">
                          Oh no! Mobile No is invalid.
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Gender</label>
                        <input type="text" className="form-control" required />
                        <div className="invalid-feedback"> Oh no ! select your gender
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" required />
                        <div className="invalid-feedback"> Address is required
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Image</label>
                        <input type="file" className="form-control" required />
                        <div className="invalid-feedback">
                            Image should be file formate.
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-right">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
        </>
    )
}

export default Admins;