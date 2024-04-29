import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import BookDetails from "./pages/BookDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Favourite from "./pages/Favourite";
import About from "./pages/About";
import Error from "./pages/Error";
import AddNewBook from "./pages/AddNewBook";

function App() {
  return (
    <div className="h-screen">
      <div className="">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/book-details/:id" element={<BookDetails />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/favourite" element={<Favourite />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/addbook" element={<AddNewBook />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/error" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
