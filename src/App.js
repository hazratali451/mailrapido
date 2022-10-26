import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "swiper/css";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Blog from "./pages/blog/Blog";
import BlogSingle from "./pages/blog/BlogSingle";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Privacy from "./pages/privacy/Privacy";
function App() {
	useEffect(() => {
		AOS.init({
			easing: "ease-in-cubic",
			once: true,
			offset: 0,
		});
	}, []);
	const Wrapper = ({ children }) => {
		const location = useLocation();
		useLayoutEffect(() => {
			document.documentElement.scrollTo(0, 0);
		}, [location.pathname]);
		return children;
	};

	return (
		<>
			<BrowserRouter>
				<Wrapper>
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
					<Routes>
						<Route path="/blog" element={<Blog />} />
					</Routes>
					<Routes>
						<Route path="/blog/:id" element={<BlogSingle />} />
					</Routes>
					<Footer />
				</Wrapper>
			</BrowserRouter>
		</>
	);
}

export default App;
