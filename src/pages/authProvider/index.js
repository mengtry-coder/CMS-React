/** @format */

import React, { useCallback, useState, useEffect } from "react";
import firebase, { auth } from "../../utils/firebase";
import Loading from "../../components/UI/spiner/index";
export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
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
        <Loading />
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

export default AuthProvider;
