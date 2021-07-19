import React from "react"
import {LineStyle, Timeline, TrendingUp} from "@material-ui/icons"

function Dashboard() {
	return (
		<div className="sidebarMenu">
			<h3 className="sidebarTitle">Dashboard</h3>
			<ul className="sidebarList">
				<li className="sidebarListItem active">
					<LineStyle className="sidebarIcon" />
					Home
				</li>
				<li className="sidebarListItem">
					<Timeline className="sidebarIcon" />
					Analytics
				</li>
				<li className="sidebarListItem">
					<TrendingUp className="sidebarIcon" />
					Sales
				</li>
			</ul>
		</div>
	)
}

export default Dashboard