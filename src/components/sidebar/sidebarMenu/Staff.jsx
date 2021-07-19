import React from "react"
import {
	Timeline,
	WorkOutline,
	Report,
} from "@material-ui/icons"

function Staff() {
	return (
		<div className="sidebarMenu">
			<h3 className="sidebarTitle">Staff</h3>
			<ul className="sidebarList">
				<li className="sidebarListItem">
					<WorkOutline className="sidebarIcon" />
					Manage
				</li>
				<li className="sidebarListItem">
					<Timeline className="sidebarIcon" />
					Analytics
				</li>
				<li className="sidebarListItem">
					<Report className="sidebarIcon" />
					Reports
				</li>
			</ul>
		</div>
	)
}

export default Staff
