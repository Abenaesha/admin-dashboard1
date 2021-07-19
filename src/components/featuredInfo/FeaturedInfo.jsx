import "./featuredInfo.css"
import Cost from "./featuredItems/Cost"
import Revenue from "./featuredItems/Revenue"
import Sales from "./featuredItems/Sales"

function FeaturedInfo() {
	return (
		<div className="featured">
			<Revenue />
			<Sales />
			<Cost />
		</div>
	)
}

export default FeaturedInfo
