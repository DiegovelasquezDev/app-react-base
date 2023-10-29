import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Topbar,
  Sidebar,
  Dashboard,
  Team,
  Invoices,
  Contacts,
  Bar,
  Form,
  Line,
  Pie,
  AboutUs,
  Geography,
  Calendar,
  Users,
  Error404,
} from "../";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slice/userSlice";

const Layout = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="app">
      <Sidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/form" element={<Form />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/line" element={<Line />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </div>
  );
};

export default Layout;
