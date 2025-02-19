import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import AllHomes from "./pages/ListingHomes/AllHomes/AllHomes";
import HomeDetails from "./pages/ListingHomes/HomeDetails/HomeDetails";
import FavouriteHomes from "./pages/FavouriteHomes/FavouriteHomes";

function App() {

 

  return (
    <div>
      <Nav />

      <section className="bg-orange-100 bg-opacity-30 pt-16 min-h-[calc(100vh-5rem)]">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/all-properties" element={<AllHomes />} />
          <Route path="/all-properties/:id" element={<HomeDetails />} />
          <Route path="/favourites" element={<FavouriteHomes/>} />

        </Routes>
      </section>
    </div>
  );
}

export default App;
