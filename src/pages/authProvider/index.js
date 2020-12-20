/** @format */

import React, { useState, useEffect } from "react";
import firebase from "../../utils/firebase";
import Loading from "../../components/UI/spiner/index";
import { setUser } from "../../stores/actions/index";
import { useDispatch } from "react-redux";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  const fetchCurrentUser = async (user) => {
    try {
      await dispatch(setUser(user.uid));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        await fetchCurrentUser(user);
      }
      setCurrentUser(user);
      setPending(false);
    });
  }, []);
  if (pending) {
    return (
      <div>
        <div className="spin-style">
          <Loading size="large" />
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
