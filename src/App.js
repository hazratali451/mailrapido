import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "swiper/css";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Privacy from "./pages/privacy/Privacy";
function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<Routes>
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Routes>
					<Route path="/login" element={<Login />} />
				</Routes>
				<Routes>
					<Route path="/sign-up" element={<SignUp />} />
				</Routes>
				<Routes>
					<Route path="/privacy" element={<Privacy />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
