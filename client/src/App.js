/* eslint-disable */
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import { api } from "./api";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Stories from "./pages/Stories";
import Testimonials from "./pages/Testimonials";
import Faqs from "./pages/Faqs";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Team from "./pages/Team";
import Donate from "./pages/Donate";
import Navbar1 from "./components/Navbar1";
import EventsGallery from "./pages/EventsGallery";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";
import CreateTestimonial from "./pages/CreateTestimonial";
import CreateEvent from "./pages/CreateEvent";
import CreateStory from "./pages/CreateStory";
import ViewUser from "./pages/ViewUser";
import ViewRoles from "./pages/ViewRoles";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [user, setUser] = useState(null);
  const [amt, setAmt] = useState(0);
  // console.log(user);

  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      const user_id = cookies["UserId"];
      if (!user_id) {
        return;
      }
      const data = await api.getSingleUser(user_id);

      if (isSubscribed) {
        setUser(data.data);
      }
    };
    fetchData().catch(console.error);

    return () => {
      isSubscribed = false;
      console.log("cleanup");
    };
  }, [cookies["UserId"]]);

  const donateAmount = (amount) => {
    setAmt(amount);
    // console.log(amount);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar user={user} />
                <Home user={user} />
                <About />
                <Events user={user} />
                <Stories user={user} />
                <Testimonials user={user} />
                <Faqs user={user} />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                {!cookies["UserId"] && <Signup />}
                {cookies["UserId"] && <Navigate to="/" />}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {!cookies["UserId"] && <Login />}
                {cookies["UserId"] && <Navigate to="/" />}
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <Navbar1 user={user} />
                <Team />
                <Footer />
              </>
            }
          />
          <Route
            path="/donate"
            element={
              <>
                {!cookies["UserId"] && <Login />}
                {cookies["UserId"] && (
                  <>
                    <Donate user={user} func={donateAmount} />
                  </>
                )}
              </>
            }
          />
          <Route path="/success" element={<><Navbar1 user={user} /><PaymentSuccess user={user} /></>} />
          <Route
            path="/eventsgallery"
            element={
              <>
                <Navbar1 user={user} />
                <EventsGallery />
                <Footer />
              </>
            }
          />
          <Route path="/cancel" element={<PaymentCancel user={user} />} />

          <Route
            path="/createtestimonial"
            element={
              <>
                {!(user?.is_alumni || user?.is_admin) && <Login />}
                {(user?.is_alumni || user?.is_admin) && (
                  <>
                    <CreateTestimonial user={user} />
                  </>
                )}
              </>
            }
          />
          <Route
            path="/createevent"
            element={
              <>
                {!(user?.is_member || user?.is_admin) && <Login />}
                {(user?.is_member || user?.is_admin) && (
                  <>
                    <CreateEvent user={user} />
                  </>
                )}
              </>
            }
          />
          <Route
            path="/createstory"
            element={
              <>
                {!(user?.is_member || user?.is_admin) && <Login />}
                {(user?.is_member || user?.is_admin) && (
                  <>
                    <CreateStory user={user} />
                  </>
                )}
              </>
            }
          />
          <Route
            path="/viewuser"
            element={
              <>
                {!user?.is_admin && <Login />}
                {user?.is_admin && (
                  <>
                    <ViewUser user={user} />
                  </>
                )}
              </>
            }
          />
          <Route
            path="/viewroles"
            element={
              <>
                {!user?.is_admin && <Login />}
                {user?.is_admin && (
                  <>
                    <ViewRoles user={user} />
                  </>
                )}
              </>
            }
          />

          <Route path="/about" element={<Navigate to="/" />} />
          <Route path="/events" element={<Navigate to="/" />} />
          <Route path="/stories" element={<Navigate to="/" />} />
          <Route path="/testimonials" element={<Navigate to="/" />} />
          <Route path="/faqs" element={<Navigate to="/" />} />
          <Route path="/contact" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
