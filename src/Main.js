import { Routes, Route, useNavigate  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import MenuPage from "./pages/MenuPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/About";
import { useReducer } from "react";

import {
  initializeTimes,
  updateTimes,
} from "./utils/timesReducer";
import { submitAPI } from "./api";
import ConfirmedBooking from "./pages/ConfirmedBooking";

function Main() {
  const navigate = useNavigate();
  /* 3️⃣ useReducer instead of useState */
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  // 1️⃣ Submit form handler
  const submitForm = (formData) => {
    console.log("submitForm called", formData);
    const success = submitAPI(formData);
    console.log("submitAPI result:", success);
    if (success) {
      navigate("/confirmed");
    }
  };
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element = {<AboutPage/>}/>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
         <Route
          path="/confirmed"
          element={<ConfirmedBooking />}
        />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}

export default Main;
