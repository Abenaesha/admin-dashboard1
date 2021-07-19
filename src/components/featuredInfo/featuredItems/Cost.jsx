import React from "react"
import {ArrowUpward} from "@material-ui/icons"

function Cost() {
	return (
		<div className="featuredItem">
			<span className="featuredTitle">Cost</span>
			<div className="featuredMoneyContainer">
				<span className="featuredMoney">$2,225</span>
				<span className="featuredMoneyRate">
					+2.4 <ArrowUpward className="featuredIcon" />
				</span>
			</div>
			<span className="featuredSub">Compared to last month</span>
		</div>
	)
}

export default Cost
