import React from "react"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import "./App.css"

function App() {
	return (
		<div className="App">
			<Header />
			<div className="container">
				<Sidebar />
				<div className="others">other pages</div>
			</div>
		</div>
	)
}

export default App
