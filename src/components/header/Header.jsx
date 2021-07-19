import React from "react"
import "./header.css"
import {NotificationsNone, Language, Settings} from "@material-ui/icons"

function Header() {
	return (
		<div className="header">
			<div className="headerWrapper">
				<div className="headerLeft">
					<span className="logo">Admin Dashboard</span>
				</div>
				<div className="headerRight">
					<div className="headerIconContainer">
						<NotificationsNone />
						<span className="headerIconBadge">2</span>
					</div>
					<div className="headerIconContainer">
						<Language />
						<span className="headerIconBadge">2</span>
					</div>
					<div className="headerIconContainer">
						<Settings />
					</div>
					<img
						alt=""
						className="headerAvatar"
						src="https://images.pexels.com/photos/3343253/pexels-photo-3343253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
