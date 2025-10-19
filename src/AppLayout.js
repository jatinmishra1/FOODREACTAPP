import { Outlet } from "react-router";
import UserDataContext from "./Utils/UserDataContext";
import Header from "./Components/Header";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";

const AppLayout = () => {
  const [useData, setUserData] = useState({
    username: "jatin",
    password: "hello",
    personalInfo: { address: "sitapur", villlage: { name: "agra" } },
  });
  return (
    <>
      <Provider store={appStore}>
        <UserDataContext.Provider value={{ useData, setUserData }}>
          <Header />
          <Outlet />
        </UserDataContext.Provider>
      </Provider>
    </>
  );
};

export default AppLayout;
