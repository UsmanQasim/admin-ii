import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";

import { decryptMessage } from "./utils/cipher";
import { fetchUsers } from "./redux";

import Login from "./pages/Login/Login";
import Panel from "./pages/Panel/Panel";
import Loader from "./pages/Panel/components/loader/Loader";

const App = ({ userState, fetchUsers }) => {
  const [logged, setLogged] = useState(undefined);
  const loginRef = useRef(null);
  loginRef.current = fetchUsers;

  useEffect(() => {
    loginRef.current();

    if (localStorage.getItem("LOGIN_USER_KEY")) {
      let stKey = localStorage.getItem("LOGIN_USER_KEY");
      let decryptedKey = decryptMessage(stKey);
      if (decryptedKey.includes("chromaticabberations_")) setLogged(true);
      else setLogged(false);
    } else setLogged(false);
  }, [loginRef]);

  useEffect(() => {}, []);

  return (
    <div className="parent">
      {logged === undefined || userState.loading ? (
        <Loader>Loading</Loader>
      ) : !logged ? (
        <Login users={userState.users} setLogged={setLogged} />
      ) : (
        <Panel setLogged={setLogged} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({ userState: state.userState });
const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
