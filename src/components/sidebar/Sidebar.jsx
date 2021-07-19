import React from "react"
import "./sidebar.css"
import Dashboard from "./sidebarMenu/Dashboard"
import QuickMenu from "./sidebarMenu/QuickMenu"
import Notifications from "./sidebarMenu/Notifications"
import Staff from "./sidebarMenu/Staff"

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<Dashboard />
				<QuickMenu />
				<Notifications />
				<Staff />
			</div>
		</div>
	)
}

export default Sidebar
