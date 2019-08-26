import createStore from "unistore";
import axios from "axios";

export const store = createStore({
  nama_pelapak: "",
  idktp_pelapak: "",
  user_name: "",
  alamat_pelapak: "",
  contact_pelapak: "",
  kelamin_pelapak: "",
  email_pelapak: null,
  password_pelapak: null,
  is_login: false,
  Bearer: "",
  data: []
});

export const actions = store => ({
  setToken: (state, value) => {
    return { Bearer: value };
  },

  setNama: (state, value) => {
    return {
      nama_pelapak: value
    };
  },

  getItem: state => {
    axios
      .get("http://0.0.0.0:3000/barang/barangpelapak")
      .then(response => {
        store.setState({ data: response.data });
        console.log(response);
      })
      .catch(error => {
        console.log("terdapat eror ini :", error);
      });
  },

  setUser: (state, value) => {
    return {
      user_name: value
    };
  },

  setAlamat: (state, value) => {
    return {
      alamat_pelapak: value
    };
  },

  setContact: (state, value) => {
    return {
      contact_pelapak: value
    };
  },

  setEmail: (state, value) => {
    return {
      email_pelapak: value
    };
  },

  setLogin: (state, value) => {
    return {
      is_login: value
    };
  },
  setKelamin: (state, value) => {
    return {
      kelamin_pelapak: value
    };
  },

  setData: (state, value) => {
    return {
      data: value
    };
  }
});
