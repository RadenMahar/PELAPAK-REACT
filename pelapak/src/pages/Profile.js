import React from "react";
import Header from "../components/Header";
import { actions } from "../store";
import { connect } from "unistore/react";
import Tesla from "../static/img/tesla.jpg";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete = event => {
    event.preventDefault();
    const self = this;
    // localStorage.getItem("id_pelapak")
    const req = {
      method: "delete",
      url: "http://localhost:3000/pelapak/3",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    axios(req)
      .then(function(response) {
        console.log("BENAR", response.data);
        self.props.history.push("/");
      })
      .catch(function(error) {
        console.log("ERROR", error);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-md-8">
              <div class="card mb-3">
                <img class="card-img-top" src={Tesla} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">My Profile</h5>
                  <p class="card-text">
                    <i class="icon-chevron-sign-right" />{" "}
                    {/* {this.props.nama_pelapak} */}
                    {localStorage.getItem("id_pelapak")}
                  </p>
                  <p class="card-text">
                    <i class="icon-chevron-sign-right" />{" "}
                    {/* {this.props.nama_pelapak} */}
                    {localStorage.getItem("nama_pelapak")}
                  </p>
                  <p class="card-text">
                    <i class="icon-chevron-sign-right" />{" "}
                    {localStorage.getItem("user_name")}
                    {/* {this.props.user_name} */}
                  </p>
                  <p class="card-text">
                    <i class="icon-chevron-sign-right" />{" "}
                    {/* {this.props.alamat_pelapak} */}
                    {localStorage.getItem("alamat_pelapak")}
                  </p>
                  <p class="card-text">
                    <i class="icon-chevron-sign-right" />{" "}
                    {/* {this.props.contact_pelapak} */}
                    {localStorage.getItem("contact_pelapak")}
                  </p>
                  <p class="card-text">
                    <i class="icon-chevron-sign-right" />{" "}
                    {localStorage.getItem("email_pelapak")}
                    {/* {this.props.email_pelapak} */}
                  </p>
                  <button
                    type="button"
                    class="btn btn-outline-info mt-1 btn-lg button2"
                    role="button"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    Hapus Profil
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModalCenter"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">
                            Hapus Item
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          Apa anda yakin untuk menghapus Akun anda ini ?
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-outline-info mt-1 btn-lg"
                            data-dismiss="modal"
                            role="button"
                          >
                            Tutup
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-info mt-1 btn-lg"
                            role="button"
                            data-dismiss="modal"
                            onClick={this.handleDelete}
                          >
                            Hapus Profil
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span> </span>
                  <Link
                    to="/edit_profil"
                    class="btn btn-outline-info mt-1 btn-lg button2"
                    href="#"
                    role="button"
                  >
                    Rubah Profil
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "nama_pelapak, idktp_pelapak, user_name, alamat_pelapak, contact_pelapak, kelamin_pelapak, email_pelapak",
  actions
)(withRouter(Profile));
