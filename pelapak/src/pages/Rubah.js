import React from "react";
import image from "../static/img/Tambahkan.png";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { actions } from "../store";
import { connect } from "unistore/react";
import Header from "../components/Headeritem";

class Rubah extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    nama_barang: "",
    tipe_barang: "",
    deskripsi_barang: "",
    harga_barang: "",
    tahun_barang: "",
    image_barang: ""
  };

  changeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  postLogin = () => {
    const {
      nama_barang,
      tipe_barang,
      deskripsi_barang,
      harga_barang,
      tahun_barang,
      image_barang
    } = this.state;

    const self = this;
    const req = {
      method: "put",
      url: "http://0.0.0.0:3000/barang/" + self.props.match.params.barang_id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Barier")
      },

      data: {
        nama_barang: nama_barang,
        tipe_barang: tipe_barang,
        deskripsi_barang: deskripsi_barang,
        harga_barang: harga_barang,
        tahun_barang: tahun_barang,
        image_barang: image_barang
      }
    };
    console.log("Ini Dataku", req.data);
    axios(req)
      .then(response => {
        console.log(response.data);
        console.log("ini state", self.state);
        self.props.history.push("/mobil");
      })
      .catch(error => {
        console.log("ini Error", error.response.data);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4">
              <form onSubmit={e => e.preventDefault()}>
                <div class="form-group">
                  <label for="exampleInputNama">Nama Mobil</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="nama_barang"
                    id="exampleInputEmail1"
                    placeholder="Mobil"
                    ref="namapelapak"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted" />
                </div>
                <div class="form-group">
                  <label for="exampleInputNama">Brand</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="tipe_barang"
                    id="exampleInputEmail1"
                    placeholder="Brand"
                    ref="idktp"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted" />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Deskripsi</label>
                  <textarea
                    required
                    class="form-control"
                    name="deskripsi_barang"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted" />
                </div>
                <div class="form-group">
                  <label for="exampleInputNama">Harga</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="harga_barang"
                    id="exampleInputEmail1"
                    placeholder="Harga"
                    ref="alamat"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted" />
                </div>
                <div class="form-group">
                  <label for="exampleInputNama">Tahun Model</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="tahun_barang"
                    id="exampleInputEmail1"
                    placeholder="Tahun Model"
                    ref="contact"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted" />
                </div>
                <div class="form-group">
                  <label for="exampleInputNama">URL Image</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="image_barang"
                    id="exampleInputEmail1"
                    placeholder="Url Image"
                    ref="kelamin"
                    onChange={e => this.changeInput(e)}
                  />
                  <small id="emailHelp" class="form-text text-muted" />
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
            <div className="col-md-8 text-center">
              <h2>ITEM</h2>
              <h2>ID: {this.props.match.params.barang_id}</h2>
              {/* <img className="registergambar" src={image} alt="" /> */}
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
)(withRouter(Rubah));
