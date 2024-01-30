import { CDN_URL } from "../utils/mockData";

const Restcard = (props) => {
    const { resData } = props

    //
//    / const restaurantArray=resData.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants;


    


    return (<div className="card">
        <div className="rest-logo">
            <img className="rest-img" src={CDN_URL + resData.cloudinaryImageId}></img>
        </div>
        <div className="rest-content">

            <h1>{resData.name}</h1>
            <h3>{resData.cuisines.join(" ,")}</h3>
            <h3>{resData.sla.deliveryTime + " minutes"}</h3>
            <h3>{resData.avgRating + "STARS"}</h3>

        </div>
    </div>

    )
}
export default Restcard;