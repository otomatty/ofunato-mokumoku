import { Component, JSX, createEffect, createSignal } from "solid-js";
import { Router, Route, RouteSectionProps } from "@solidjs/router";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/Home/HomePage";
import Schedule from "./pages/Schedule/Schedule";
import Signup from "./pages/Signup/Signup";
import LoginPage from "./pages/Login/LoginPage";
import MemberPage from "./pages/Member/MemberPage";
import NotFoundPage from "./pages/Notfound/NotFoundPage";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/FAQ/FAQ";
import EventReport from "./pages/EventReport/EventReport";
import ReportDetail from "./pages/ReportDetail/ReportDetail";
import ThankYou from "./pages/ThankYou/ThankYou";
import "./App.css";

interface LayoutProps {
  children: JSX.Element;
}

const Layout: Component<LayoutProps> = (props) => {
  const [headerHeight, setHeaderHeight] = createSignal(0);

  createEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  });

  return (
    <>
      <Header />
      <main style={{ "margin-top": `${headerHeight()}px` }}>
        {props.children}
      </main>
      <Footer />
    </>
  );
};

const LayoutWrapper: Component<RouteSectionProps<unknown>> = (props) => {
  return <Layout>{props.children}</Layout>;
};

const App: Component = () => {
  return (
    <Router root={LayoutWrapper}>
      <Route path="/" component={HomePage} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/faq" component={FAQ} />
      <Route path="/reports">
        <Route path="/" component={EventReport} />
        <Route path="/:id" component={ReportDetail} />
      </Route>
      <Route path="/contact" component={Contact} />
      <Route path="/signup" component={Signup} />
      <Route path="/member" component={MemberPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="*" component={NotFoundPage} />
      <Route path="/thank-you" component={ThankYou} />
    </Router>
  );
};

export default App;
