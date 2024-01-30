
import Restcard from "./RestCard"
import Shimmer from "./Shimmer"
import { useEffect, useState } from "react"


const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=29.1727303&lng=75.7309029");
        const json = await data.json();
        console.log(json);
        setlistOfRestaurants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)

    }
    useEffect(() => {
        fetchData();

    }, []);

    if (listOfRestaurants.length === 0) {
        return (<Shimmer />)
    }


    return (<div className="body">
        <div className="filter">
            {<button className="filter-btn" onClick={() => {

                let filteredList = listOfRestaurants.filter((restaurant) => {
                    return (restaurant.info.avgRating > 4);
                })
                console.log(filteredList)
                setFilteredRestaurants(filteredList)
            }
            }>Top Rated restaurant</button>}

            <input type="text" onChange={(e) => {
                setSearchText(e.target.value)
            }}></input>

            <button onClick={() => {
                const filteredRestaurantList = listOfRestaurants.filter((restaurant) => {
                    return (restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));

                })
                console.log(filteredRestaurantList)
                setFilteredRestaurants(filteredRestaurantList)
            }}>Search</button>

        </div>

        <div className="rest-container-wrapper">
            <div className="rest-container">
                {filteredRestaurant.map((restaurant) => {
                    return (<Restcard resData={restaurant.info} key={restaurant.info.id} />)
                })
                }
            </div>
        </div>
    </div>

    )
}
export default Body;
