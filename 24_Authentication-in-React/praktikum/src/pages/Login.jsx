import { useState } from "react";
import { Navbar } from "../components/Navbar";

export const Login = () => {
  const [dataLogin, setDataLogin] = useState({});
  const onChange = (e) => {
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });  
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (dataLogin.email == "inal@mail.com" && dataLogin.password == "admin") {
      localStorage.setItem("status", true);
      localStorage.setItem("token", "ey....");
      alert("berhasil login in");
      // navigate('/dashboard')
    } else {
      alert("username atau password salah");
    }
  };
  return (
    <>
      <Navbar />
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card text-white mb-4"
                style={{
                  "border-radius": "1rem",
                  "background-color": "#37517E",
                }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <form action="" onSubmit={handelSubmit}>
                      <div
                        data-mdb-input-init
                        className="form-outline form-white mb-4"
                      >
                        <label className="form-label" htmlFor="typeEmailX">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          onChange={onChange}
                          id="typeEmailX"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div
                        data-mdb-input-init
                        className="form-outline form-white mb-4"
                      >
                        <label className="form-label" htmlFor="typePasswordX">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          onChange={onChange}
                          id="typePasswordX"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <button
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
