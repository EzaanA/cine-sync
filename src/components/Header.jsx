import React, { useEffect } from "react";
import { onAuthStateChanged, auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, navigate to '/browse'
        navigate("/browse");
      } else {
        // User is signed out, navigate to '/'
        navigate("/");
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <img src="src/assets/logo1.png" alt="logo" className="w-24 md:w-48 p-2" />
    </div>
  );
};

export default Header;
