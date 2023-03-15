import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navigation from "./components/Navigation";
import Register from "./components/pages/Register";
import UserProfileEdit from "./components/pages/UserProfileEdit";
import UserProfile from "./components/pages/UserProfile";
import MemberList from "./components/pages/MemberList";
import MyFooter from "./components/Footer";
import CardInfoPage from "./components/pages/cardInfo";
import SearchResults from "./components/pages/searchResults";
import MobileNav from "./components/MobileNav";
import NotFound from "./components/pages/NotFound";
import Cart from "./components/pages/Cart";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <MobileNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            exact
            path="/users/profile/edit"
            element={<UserProfileEdit />}
          />
          <Route path="/users/search" element={<MemberList />} />
          <Route path="/users/profile/:username" element={<UserProfile />} />
          <Route exact path="/products/search" element={<SearchResults />} />
          <Route path="/products/:cardmarketId" element={<CardInfoPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <MyFooter />
      </Router>
    </>
  );
}

export default App;
