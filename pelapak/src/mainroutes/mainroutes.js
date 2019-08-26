import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Masuk from "../pages/Masuk";
import Daftar from "../pages/Daftarlapak";
import { Provider } from "unistore/react";
import { store } from "../store";
import Profile from "../pages/Profile";
import Tambahkan from "../pages/Tambahkan";
import Item from "../pages/Barangsaya";
import Edit from "../pages/Deleteitem";
import Editprofile from "../pages/Editprofile";
import Rubah from "../pages/Rubah";
import React from "react";
// import

const MainRoutes = () => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/daftar" component={Daftar} />
          <Route exact path="/masuk" component={Masuk} />
          <Route exact path="/profil" component={Profile} />
          <Route exact path="/tambah" component={Tambahkan} />
          <Route exact path="/mobil" component={Item} />
          <Route exact path="/itemsaya" component={Item} />
          <Route exact path="/deletebarang" component={Item} />
          <Route path="/edit/:barang_id" component={Edit} />
          <Route path="/rubah/:barang_id" component={Rubah} />
          <Route path="/edit_profil" component={Editprofile} />
          {/* <Route component={NotMatch} /> */}
        </Switch>
      </Provider>
    </Router>
  );
};

export default MainRoutes;
