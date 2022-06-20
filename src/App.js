import "./App.css";
import Home from "./Components/Home";
import Post from "./Components/post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="post/comment/:code" element={<Post />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
