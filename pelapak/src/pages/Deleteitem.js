import React from "react";
import { actions } from "../store";
import { connect } from "unistore/react";
import { Link } from "react-router-dom";
import Header from "../components/Headeritem";
import axios from "axios";

class Edit extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete = event => {
    event.preventDefault();
    const self = this;
    console.log(event.target.value);
    const req = {
      method: "delete",
      url: "http://localhost:3000/barang/delete/" + event.currentTarget.value,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Barier")
      }
    };
    axios(req)
      .then(function(response) {
        console.log("BEANR", response.data);
        self.props.history.push("/mobil");
      })
      .catch(function(error) {
        console.log("ERROR", error);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <div class="container">
          {this.props.data.map((value, index) => {
            if (value.barang_id == this.props.match.params.barang_id) {
              return (
                <h1 class="my-4">
                  {value.nama_barang}
                  {/* <small> {value.tipe_barang}</small> */}
                </h1>
              );
            }
          })}
          {this.props.data.map((value, index) => {
            if (value.barang_id == this.props.match.params.barang_id) {
              return (
                <div class="row" id="ads">
                  <div class="col-md-8">
                    <img
                      class="img-fluid big"
                      src={value.image_barang}
                      alt=""
                    />
                  </div>

                  <div class="col-md-4">
                    <h3 class="my-3">Car Description</h3>
                    <p>{value.deskripsi_barang}</p>
                    <h3 class="my-3">Details gained</h3>
                    <ul>
                      <li>IDR {value.harga_barang}</li>
                      <li>{value.tahun_barang}</li>
                      <li>{value.username_pelapak}</li>
                      <li>{value.tipe_barang}</li>
                    </ul>
                    <h6>ID: {value.barang_id}</h6>
                    <button
                      type="button"
                      class="btn btn-info"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Hapus
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
                            Apa anda yakin untuk menghapus produk anda ini ?
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Tutup
                            </button>
                            <button
                              type="button"
                              class="btn btn-info"
                              data-dismiss="modal"
                              value={value.barang_id}
                              onClick={e => this.handleDelete(e)}
                            >
                              Hapus{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span> </span>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  "data, user_name, Bearer",
  actions
)(Edit);
