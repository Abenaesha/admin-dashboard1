import React from "react"
import {
	PermIdentity,
	Storefront,
	AttachMoney,
	BarChart,
} from "@material-ui/icons"
import {Link} from "react-router-dom"

function QuickMenu() {
	return (
		<div className="sidebarMenu">
			<h3 className="sidebarTitle">Quick Menu</h3>
			<ul className="sidebarList">
				<Link to="/users" className="link">
					<li className="sidebarListItem">
						<PermIdentity className="sidebarIcon" />
						Users
					</li>
				</Link>
				<Link to="/products" className="link">
				<li className="sidebarListItem">
					<Storefront className="sidebarIcon" />
					Products
				</li>
				</Link>
				<li className="sidebarListItem">
					<AttachMoney className="sidebarIcon" />
					Transactions
				</li>
				<li className="sidebarListItem">
					<BarChart className="sidebarIcon" />
					Reports
				</li>
			</ul>
		</div>
	)
}

export default QuickMenu
