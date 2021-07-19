import React from "react"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import "./App.css"
import Home from "./pages/Home"

function App() {
	return (
		<div className="App">
			<Header />
			<div className="container">
				<Sidebar />
				<Home />
			</div>
		</div>
	)
}

export default App
