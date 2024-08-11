import Login from "./components/login/login.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/about/about.jsx";
import Contact from "./components/contact/contact.jsx";
import Header from "./components/header.jsx";
import Home from "./components/Home/home.jsx";
import Projects from "./components/projects/projects.jsx";
import Footer from "./footer/footer.jsx";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getUser, loadUser } from "./actions/user.js";
import AdminPanel from "./components/Admin/AdminPanel.jsx";
import Timeline from "./components/Admin/Timeline.jsx";
import Youtube from "./components/Admin/Youtube.jsx";
import Project from "./components/Admin/Project.jsx";
import Loader from "./components/loader/loader.jsx";

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  youtubes={user.youtube}
                  timelines={user.timeline}
                  skills={user.skills}
                />
              }
            />
            <Route path="/about" element={<About about={user.about} />} />
            <Route
              path="/projects"
              element={<Projects projects={user.projects} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />
            <Route
              path="/admin/youtube"
              element={isAuthenticated ? <Youtube /> : <Login />}
            />

            <Route
              path="/admin/project"
              element={isAuthenticated ? <Project /> : <Login />}
            />
          </Routes>

          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
