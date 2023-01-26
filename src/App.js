import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function App() {
	return (
		<div className="">
			<Navbar />
			{/* <div className="brand bg-sky-200">Website ku</div>
      <nav className="nav">
				<Link to="/" className="nav-item">
					Home
				</Link>
				<Link to="/blog" className="nav-item">
					Blog
				</Link>
				<Link to="/contact" className="nav-item">
					Contact
				</Link>
				<Link to="/profile" className="nav-item">
					Profile
				</Link>
			</nav> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:id" element={<BlogDetail />} />
			</Routes>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
