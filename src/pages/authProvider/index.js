/** @format */

import React, { useState, useEffect } from "react";
import firebase from "../../utils/firebase";
import Loading from "../../components/UI/spiner/index";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      //   console.log(user);
      setCurrentUser(user);
      setPending(false);
    });
  }, []);
  if (pending) {
    return (
      <div>
        <div className='spin-style'>
          <Loading size='large' />
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
