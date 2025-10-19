import { useContext } from "react";
import UserDataContext from "../Utils/UserDataContext";
const Contact = () => {
  const data = useContext(UserDataContext);
  console.log(data);
  return <>This is contact</>;
};

export default Contact;
