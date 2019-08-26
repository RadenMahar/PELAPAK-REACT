import React from "react";
import { actions } from "../store";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Image from "../static/img/Login.png";

class Masuk extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { email_pelapak: null, password_pelapak: null };

  changeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  postLogin = () => {
    const { email_pelapak, password_pelapak } = this.state;

    const req = {
      method: "post",
      url: "http://0.0.0.0:3000/login",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        email_pelapak: email_pelapak,
        password_pelapak: password_pelapak
      }
    };

    const self = this;
    axios(req)
      .then(function(response) {
        self.props.setToken(response.data.token);
        console.log("my token", response.data.token);
        localStorage.setItem("Barier", response.data.token);
        console.log("my bearer", self.props.Bearer);
        // store.setState({ is_login: true });
        if (response.data.pelapak.hasOwnProperty("status")) {
          localStorage.setItem(
            "nama_pelapak",
            response.data.pelapak.nama_pelapak
          );
          localStorage.setItem("id_pelapak", response.data.pelapak.id_pelapak);
          localStorage.setItem("user_name", response.data.pelapak.user_name);
          localStorage.setItem(
            "alamat_pelapak",
            response.data.pelapak.alamat_pelapak
          );
          localStorage.setItem(
            "contact_pelapak",
            response.data.pelapak.contact_pelapak
          );
          localStorage.setItem(
            "email_pelapak",
            response.data.pelapak.email_pelapak
          );
          localStorage.setItem("status", response.data.pelapak.status);
          localStorage.setItem(
            "kelamin_pelapak",
            response.data.pelapak.kelamin_pelapak
          );
          self.props.setNama(response.data.pelapak.nama_pelapak);
          self.props.setUser(response.data.pelapak.user_name);
          self.props.setAlamat(response.data.pelapak.alamat_pelapak);
          self.props.setContact(response.data.pelapak.contact_pelapak);
          self.props.setEmail(response.data.pelapak.email_pelapak);
          self.props.setLogin(response.data.pelapak.status);
          self.props.setNama(response.data.pelapak.nama_pelapak);
          self.props.setKelamin(response.data.pelapak.kelamin_pelapak);
          self.props.history.push("/profil");
        }
      })
      .catch(function(error) {
        console.log("ASEM1", error);
      });
  };

  render() {
    console.log("ini props", this.props);
    console.log("is_login");
    console.log("state", this.state);
    return (
      <div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-8 text-center">
              <img src={Image} alt="" className="Login" />
            </div>
            <div className="col-md-4 login">
              <form onSubmit={e => e.preventDefault()}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email_pelapak"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={e => this.changeInput(e)}
                    required
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    name="password_pelapak"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={e => this.changeInput(e)}
                    required
                  />
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={() => this.postLogin()}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "Bearer",
  actions
)(withRouter(Masuk));
