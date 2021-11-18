import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";
import Header from "./components/header.component";
import AuthPage from "./pages/authpage.component";
import EditNotePage from "./pages/editnotepage.component";
import NotesPage from "./pages/notespage.component";
import Spinner from "./components/spinner/spinner.component";
import { logoutUser } from "./redux/actions/authActionCreator";
const App = ({ user, dispatchLogoutAction }) => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        transition={Slide}
      />
      <Spinner />
      <Header
        isLoggedIn={user.isLoggedIn}
        userName={user.fullName}
        onLogout={dispatchLogoutAction}
      />
      <div className="container my-5">
        {!user.isLoggedIn ? (
          <Routes>
            <Route exact path="/auth" element={<AuthPage />} />
            <Route path="/" element={<AuthPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/notes" element={<NotesPage />} />
            <Route exact path="/edit-note" element={<EditNotePage />} />
            <Route exact path="/edit-note/:noteId" element={<EditNotePage />} />
            <Route path="/" element={<NotesPage />} />
          </Routes>
        )}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({
  dispatchLogoutAction: () => dispatch(logoutUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
