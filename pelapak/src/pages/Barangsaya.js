import React from "react";
import Home from "./Home";
import { actions } from "../store";
import { connect } from "unistore/react";
import Header from "../components/Headeritem";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  //untuk mendapatkan data barang milik pelapak saat berpindah ke halaman ini
  componentWillMount = () => {
    this.props.getItem();
  };

  render() {
    return (
      <div>
        <Header />
        <div class="container">
          {this.props.data.map((value, index) => {
            if (value.username_pelapak === localStorage.getItem("user_name")) {
              return (
                <div class="row mt-4">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                    key={index}
                  >
                    <div className="col-md-4">
                      <img
                        src={value.image_barang}
                        class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt=""
                      />
                    </div>
                    <div className="col-md-8">
                      <h4>{value.nama_barang}</h4>
                      <h5>{value.tipe_barang}</h5>
                      <h5>ID: {value.barang_id}</h5>
                      <br />
                      <h6>{value.tahun_barang}</h6>
                      <br />
                      <p>
                        <strong>{value.username_pelapak}</strong>
                      </p>
                      <br />
                      <p>{value.deskripsi_barang}</p>
                    </div>
                  </a>
                  <Link
                    to={"/edit/" + value.barang_id}
                    class="btn btn-outline-info mt-1 btn-lg"
                    role="button"
                  >
                    Hapus{" "}
                  </Link>
                  <span> </span>
                  <Link
                    to={"/rubah/" + value.barang_id}
                    class="btn btn-outline-info mt-1 btn-lg"
                    role="button"
                  >
                    Rubah{" "}
                  </Link>
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
  "data, user_name",
  actions
)(withRouter(Item));

// if(this.match.params.source_name === this.props.values.Category)
