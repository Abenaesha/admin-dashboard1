import React from "react"
import {ArrowDownward} from "@material-ui/icons"

function Sales() {
	return (
		<div className="featuredItem">
			<span className="featuredTitle">Sales</span>
			<div className="featuredMoneyContainer">
				<span className="featuredMoney">$4,415</span>
				<span className="featuredMoneyRate">
					-1.4 <ArrowDownward className="featuredIcon negative" />
				</span>
			</div>
			<span className="featuredSub">Compared to last month</span>
		</div>
	)
}

export default Sales
