import React from "react"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import "./App.css"
import Home from "./pages/home/Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import UserList from "./pages/userList/UserList"
import User from "./pages/user/User"
import NewUser from "./pages/newUser/NewUser"

function App() {
	return (
		<Router>
			<Header />
			<div className="container">
				<Sidebar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/users">
						<UserList />
					</Route>
					<Route path="/user/:userId">
						<User />
					</Route>
					<Route path="/newUser">
						<NewUser />
					</Route>
					{/* <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route> */}
				</Switch>
			</div>
		</Router>
	)
}

export default App
