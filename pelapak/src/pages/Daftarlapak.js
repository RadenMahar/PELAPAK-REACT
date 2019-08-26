import React from "react";
import image from "../static/img/Register.png";
import axios from "axios";
import { Link } from "react-router-dom";

class Daftar extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    nama_pelapak: "",
    idktp_pelapak: "",
    user_name: "",
    alamat_pelapak: "",
    contact_pelapak: "",
    kelamin_pelapak: "",
    email_pelapak: "",
    password_pelapak: ""
  };

  changeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  postLogin = () => {
    const {
      nama_pelapak,
      idktp_pelapak,
      user_name,
      alamat_pelapak,
      contact_pelapak,
      kelamin_pelapak,
      email_pelapak,
      password_pelapak
    } = this.state;

    const req = {
      method: "post",
      url: "http://0.0.0.0:3000/pelapak",
      headers: {},
      data: {
        nama_pelapak: nama_pelapak,
        idktp_pelapak: idktp_pelapak,
        user_name: user_name,
        alamat_pelapak: alamat_pelapak,
        contact_pelapak: contact_pelapak,
        kelamin_pelapak: kelamin_pelapak,
        email_pelapak: email_pelapak,
        password_pelapak: password_pelapak
      }
    };

    axios(req)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("ini Error", error);
      });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4">
              <form onSubmit={e => e.preventDefault()}>
                <div class="form-group">
                  <label for="exampleInputNama">Nama pelapak</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="nama_pelapak"
                    id="exampleInputEmail1"
                    placeholder="Nama pelapak"
                    ref="namapelapak"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted" />
                </div>
                <div class="form-group">
                  <label for="exampleInputNama">ID KTP</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="idktp_pelapak"
                    id="exampleInputEmail1"
                    placeholder="Id Ktp"
                    ref="idktp"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted" />
                </div>
                <div class="form-group">
                  <label for="exampleInputNama">Username</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="user_name"
                    id="exampleInputEmail1"
                    placeholder="Username"
                    ref="username"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted" />
                </div>
                <div class="form-group">
                  <label for="exampleInputNama">Alamat</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="alamat_pelapak"
                    id="exampleInputEmail1"
                    placeholder="Alamat"
                    ref="alamat"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted" />
                </div>
                <div class="form-group">
                  <label for="exampleInputNama">Contact</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="contact_pelapak"
                    id="exampleInputEmail1"
                    placeholder="Contact"
                    ref="contact"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted" />
                </div>
                <div class="form-group">
                  <label for="exampleInputNama">Jenis Kelamin</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="kelamin_pelapak"
                    id="exampleInputEmail1"
                    placeholder="Pria / Perempuan"
                    ref="kelamin"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted" />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    required
                    type="email"
                    class="form-control"
                    name="email_pelapak"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    ref="email"
                    onChange={e => this.changeInput(e)}
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
                    ref="password"
                    onChange={e => this.changeInput(e)}
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
                <Link to="/masuk">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={() => this.postLogin()}
                  >
                    Submit
                  </button>
                </Link>
              </form>
            </div>
            <div className="col-md-8 text-center">
              <img className="registergambar" src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Daftar;
