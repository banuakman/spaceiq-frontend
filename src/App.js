import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import BookADesk from "./pages/BookADesk";
import HomePage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import MyBookings from "./pages/MyBookings";
import MyProfile from "./pages/MyProfile";

const App = () => (
  <Router>
    <Header>
      <NavTabs />
    </Header>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/bookadesk" component={BookADesk} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/mybookings" component={MyBookings} />
    <Route exact path="/hello" component={MyProfile} />
    <Footer />
  </Router>
);

export default App;
