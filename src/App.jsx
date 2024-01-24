import "./App.css";
import Home from "./routes/home/home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/sign-in/sign-in";

const App = () => {
  const Shop = () => {
    return <h1>Shop</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
