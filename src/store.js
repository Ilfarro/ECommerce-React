import createStore from "unistore";
import axios from "axios";

const initialState = {
  token: "",

  user_id: "",
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  jumlah_iklan: "",
  jumlah_iklan_premium: "",
  url_foto_user: "",
  user_status: "",

  is_login: false,
  listIklanSaya: [],

  pasangKategori: "",
  pasangNama: "",
  pasangDeskripsi: "",
  pasangHarga: "",
  pasangLokasi: "",
  pasangUrlFoto: "",

  reigsterUsername: "",
  registerPassword: "",
  registerFirstName: "",
  registerLastName: "",
  registerEmail: "",
  registerPhone: "",

  idEditIklan: "",
  editIklanKategori: "",
  editIklanNama: "",
  editIklanDeskripsi: "",
  editIklanHarga: "",
  editIklanLokasi: "",
  editIklanUrlFoto: "",
  editIklanStatus: "",

  searchKeyword: "",
  listIklanSearched: []
};

const urlProfile =
  "https://cors-anywhere.herokuapp.com/http://rumahorang.web.id/api/users/me";

const urlSpecificProfile =
  "https://cors-anywhere.herokuapp.com/http://rumahorang.web.id/api/users/me/";

const urlItems =
  "https://cors-anywhere.herokuapp.com/http://rumahorang.web.id/api/users/items";

const urlSpecificItems =
  "https://cors-anywhere.herokuapp.com/http://rumahorang.web.id/api/users/items/";

const urlRegister =
  "https://cors-anywhere.herokuapp.com/http://rumahorang.web.id/api/users/register";

const urlSearch =
  "https://cors-anywhere.herokuapp.com/http://rumahorang.web.id/api/public/items?search=";

export const store = createStore(initialState);

export const actions = store => ({
  setField: (state, event) => {
    return { [event.target.name]: event.target.value };
  },

  postLogout: state => {
    return { is_login: false };
  },

  postLogin: async state => {
    const data = { username: state.username, password: state.password };
    const auth_header = {
      headers: { "Content-Type": "application/json" }
    };
    await axios
      .post(
        "https://cors-anywhere.herokuapp.com/http://rumahorang.web.id/api/users/login",
        data,
        auth_header
      )
      .then(response => {
        if (response.data.hasOwnProperty("token")) {
          store.setState({
            token: response.data.token,
            is_login: true
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getUserData: state => {
    const profileHeader = {
      headers: {
        Authorization: "Bearer " + state.token,
        "Access-Control-Allow-Origin": "*"
      }
    };
    axios
      .get(urlProfile, profileHeader)
      .then(function(response) {
        store.setState({
          user_id: response.data.data.id,
          username: response.data.data.username,
          password: response.data.data.password,
          first_name: response.data.data.first_name,
          last_name: response.data.data.last_name,
          email: response.data.data.email,
          phone: response.data.data.phone,
          jumlah_iklan: response.data.data.jumlah_iklan,
          jumlah_iklan_premium: response.data.data.jumlah_iklan_premium,
          url_foto_user: response.data.data.url_foto,
          user_status: response.data.data.status
        });
        return axios
          .get(
            "https://cors-anywhere.herokuapp.com/http://rumahorang.web.id/api/users/items?post_by=" +
              response.data.data.id,
            profileHeader
          )
          .then(function(response) {
            store.setState({ listIklanSaya: response.data.data });
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  setKategori: (state, e) => {
    store.setState({ pasangKategori: e.target.value });
  },

  pasangIklan: async state => {
    const header = {
      headers: {
        Authorization: "Bearer " + state.token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    const data = {
      kategori: state.pasangKategori,
      nama: state.pasangNama,
      deskripsi: state.pasangDeskripsi,
      harga: state.pasangHarga,
      lokasi: state.pasangLokasi,
      url_foto: state.pasangUrlFoto
    };
    await axios
      .post(urlItems, data, header)
      .then(response => {
        if (response.data.hasOwnProperty("data")) {
          console.log("success");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  register: async state => {
    const header = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    const data = {
      username: state.reigsterUsername,
      password: state.registerPassword,
      first_name: state.registerFirstName,
      last_name: state.registerLastName,
      email: state.registerEmail,
      phone: state.registerPhone
    };
    await axios
      .post(urlRegister, data, header)
      .then(response => {
        if (response.data.hasOwnProperty("data")) {
          console.log("success");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  setEditIklanKategori: (state, e) => {
    store.setState({ editIklanKategori: e.target.value });
  },

  setEditIklanStatus: (state, e) => {
    store.setState({ editIklanStatus: e.target.value });
  },

  setIdEditIklan: (state, value) => {
    store.setState({ idEditIklan: value });
  },

  setEditIklan: (state, value) => {
    const profileHeader = {
      headers: {
        Authorization: "Bearer " + state.token,
        "Access-Control-Allow-Origin": "*"
      }
    };
    axios
      .get(urlSpecificItems + value, profileHeader)
      .then(function(response) {
        store.setState({
          idEditIklan: value,
          editIklanKategori: response.data.kategori,
          editIklanNama: response.data.nama,
          editIklanDeskripsi: response.data.deskripsi,
          editIklanHarga: response.data.harga,
          editIklanLokasi: response.data.lokasi,
          editIklanUrlFoto: response.data.url_foto,
          editIklanStatus: response.data.status_item
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  editIklan: async state => {
    const header = {
      headers: {
        Authorization: "Bearer " + state.token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    const data = {
      kategori: state.editIklanKategori,
      nama: state.editIklanNama,
      deskripsi: state.pasangDeskripsi,
      harga: state.editIklanHarga,
      lokasi: state.editIklanLokasi,
      url_foto: state.editIklanUrlFoto,
      status_item: state.editIklanStatus
    };

    await axios
      .patch(urlSpecificItems + state.idEditIklan, data, header)
      .then(response => {
        if (response.data.hasOwnProperty("data")) {
          console.log("success");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  deleteIklan: async (state, value) => {
    const header = {
      headers: {
        Authorization: "Bearer " + state.token,
        "Access-Control-Allow-Origin": "*"
      }
    };
    await axios
      .delete(urlSpecificItems + value, header)
      .then(response => {
        console.log("success");
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  editUser: async state => {
    const header = {
      headers: {
        Authorization: "Bearer " + state.token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    const data = {
      first_name: state.first_name,
      last_name: state.last_name,
      email: state.email,
      phone: state.phone,
      url_foto: state.url_foto_user,
      password: state.password
    };
    await axios
      .patch(urlSpecificProfile + state.user_id, data, header)
      .then(response => {
        if (response.data.hasOwnProperty("data")) {
          console.log("success");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  search: async (state) => {
      const param = {
          params: {
              search : "hello"
          }
      }
    await axios
      .get(urlSearch + state.searchKeyword, param)
      .then(function(response) {
        store.setState({
          listIklanSearched: response.data.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
});
