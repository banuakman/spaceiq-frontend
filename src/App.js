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
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/bookadesk" component={BookADesk} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/mybookings" component={MyBookings} />
        <Route exact path="/hello" component={MyProfile} />
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Router>
  );
}

export default App;
