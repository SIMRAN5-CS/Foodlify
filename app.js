import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (<div className="header">
        <div className="logo">
            <img className="logo-img" src="data:image/jpeg;base64,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" alt=""></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>)
}
const resList = [
    {

        "id": "815649",
        "name": "Saini Snacks Point",
        "cloudinaryImageId": "53d952b4e56a01b6774bb2f522d709c3",
        "locality": "Hari Nagar",
        "areaName": "Hari Nagar",
        "costForTwo": "₹110 for two",
        "cuisines": [
            "Chinese",
            "Juices",
            "Snacks",
            "Healthy Food",
            "Fast Food",
            "Burgers"
        ],
        "veg": true,
        "parentId": "486012",
        "avgRatingString": "NEW",
        "promoted": true,
        "adTrackingId": "cid=10691299~p=1~eid=0000018d-2597-7f1d-2c3c-b6f000860145~srvts=1705732701981~45995",
        "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 4.2,
            "serviceability": "SERVICEABLE",
            "slaString": "43 mins",
            "lastMileTravelString": "4.2 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-01-20 22:01:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {

                },
                "textExtendedBadges": {

                },
                "textBased": {

                }
            }
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {


        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=815649",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {

        "id": "419721",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "xaulsehuowdiunzmdwd2",
        "locality": "Eminent Mall",
        "areaName": "Hari Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "2456",
        "avgRatingString": "4.2",
        "totalRatingsString": "100+",
        "sla": {
            "deliveryTime": 25,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-01-21 00:59:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {

                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {


        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=419721",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {

        "id": "455928",
        "name": "The Good Bowl",
        "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
        "locality": "Bank Colony",
        "areaName": "Hari Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Biryani",
            "North Indian",
            "Pastas",
            "Punjabi",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "7918",
        "avgRatingString": "4.3",
        "totalRatingsString": "100+",
        "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 4.1,
            "serviceability": "SERVICEABLE",
            "slaString": "32 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-01-20 23:59:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textExtendedBadges": {

                },
                "textBased": {

                },
                "imageBased": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹110"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {


        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=455928",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {

        "id": "223399",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Eminent Mall",
        "areaName": "Mehta Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Burgers",
            "American"
        ],
        "avgRating": 4.3,
        "parentId": "166",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "31 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-01-21 01:00:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {

                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {


        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=223399",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {

        "id": "713954",
        "name": "Star Parantha",
        "cloudinaryImageId": "31ace5142813954736e58e0e92eb98fb",
        "locality": "Mohalla Dogran",
        "areaName": "Hisar Locality",
        "costForTwo": "₹150 for two",
        "cuisines": [
            "Indian"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "426179",
        "avgRatingString": "4.6",
        "totalRatingsString": "20+",
        "promoted": true,
        "adTrackingId": "cid=10548843~p=3~eid=0000018d-2597-7f1d-2c3c-b6f200860371~srvts=1705732701981~45995",
        "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "32 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-01-20 15:45:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textExtendedBadges": {

                },
                "textBased": {

                },
                "imageBased": {

                }
            }
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {


        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=713954",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {

        "id": "321601",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "xlea6cy8to9g0lfvw6pu",
        "locality": "Palam Vihar",
        "areaName": "Hari Nagar",
        "costForTwo": "₹100 for two",
        "cuisines": [
            "Desserts",
            "Ice Cream",
            "Ice Cream Cakes"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "582",
        "avgRatingString": "4.6",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 6.3,
            "serviceability": "SERVICEABLE",
            "slaString": "35 mins",
            "lastMileTravelString": "6.3 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-01-20 17:00:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {

                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {


        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=321601",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {

        "id": "155751",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
        "locality": "Pla Market",
        "areaName": "Hari Nagar",
        "costForTwo": "₹150 for two",
        "cuisines": [
            "Desserts"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "5588",
        "avgRatingString": "4.5",
        "totalRatingsString": "100+",
        "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 4.2,
            "serviceability": "SERVICEABLE",
            "slaString": "35 mins",
            "lastMileTravelString": "4.2 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-01-20 23:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "exclusiveOfferMessage": "EXTRA 10% OFF",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {


        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=155751",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {

        "id": "455907",
        "name": "Faasos - Wraps, Rolls & Shawarma",
        "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
        "locality": "Bank Colony",
        "areaName": "Hari Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Kebabs",
            "Fast Food",
            "Snacks",
            "American",
            "Healthy Food",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.5,
        "parentId": "21809",
        "avgRatingString": "4.5",
        "totalRatingsString": "500+",
        "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 4.1,
            "serviceability": "SERVICEABLE",
            "slaString": "35 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-01-20 23:59:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {

                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {


        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=455907",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {

        "id": "155792",
        "name": "Pizza Wings",
        "cloudinaryImageId": "a46a6aa00709f771fabb45c864a81b5e",
        "locality": "Pla Market",
        "areaName": "Police Line Area",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Pizzas",
            "Italian-American"
        ],
        "avgRating": 4.2,
        "parentId": "159048",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "promoted": true,
        "adTrackingId": "cid=10724604~p=4~eid=0000018d-2597-7f1d-2c3c-b6f300860410~srvts=1705732701981~45995",
        "sla": {
            "deliveryTime": 37,
            "lastMileTravel": 3.9,
            "serviceability": "SERVICEABLE",
            "slaString": "37 mins",
            "lastMileTravelString": "3.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-01-21 01:00:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {

                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {


        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=155792",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {

        "id": "455930",
        "name": "LunchBox - Meals and Thalis",
        "cloudinaryImageId": "gnbqsie0mfjly75rltqo",
        "locality": "Bank Colony",
        "areaName": "Hari Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Biryani",
            "North Indian",
            "Punjabi",
            "Healthy Food",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "4925",
        "avgRatingString": "4.1",
        "totalRatingsString": "100+",
        "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 4.1,
            "serviceability": "SERVICEABLE",
            "slaString": "36 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-01-20 23:59:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {

                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹159"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {


        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=455930",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {

        "id": "637225",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "nwmbe9p0yeczjglapss8",
        "locality": "Red square Market",
        "areaName": "Hari Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "4961",
        "avgRatingString": "4.1",
        "totalRatingsString": "500+",
        "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 2.6,
            "serviceability": "SERVICEABLE",
            "slaString": "30 mins",
            "lastMileTravelString": "2.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-01-21 01:00:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {

                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {


        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=637225",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {

        "id": "455912",
        "name": "Behrouz Biryani",
        "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
        "locality": "Bank Colony",
        "areaName": "Hari Nagar",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Biryani",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "1803",
        "avgRatingString": "4.4",
        "totalRatingsString": "500+",
        "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 4.1,
            "serviceability": "SERVICEABLE",
            "slaString": "34 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-01-20 23:59:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {

                },
                "textExtendedBadges": {

                },
                "textBased": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹110"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {


        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=455912",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {

        "id": "708491",
        "name": "Wow Pizza",
        "cloudinaryImageId": "e03a0820df3c005283e94c48281aea41",
        "locality": "Mehta Nagar",
        "areaName": "Hisar Locality",
        "costForTwo": "₹150 for two",
        "cuisines": [
            "Pizzas",
            "Fast Food",
            "Snacks",
            "Beverages"
        ],
        "avgRating": 3.8,
        "veg": true,
        "parentId": "14380",
        "avgRatingString": "3.8",
        "totalRatingsString": "20+",
        "promoted": true,
        "adTrackingId": "cid=10321347~p=5~eid=0000018d-2597-7f1d-2c3c-b6f40086055d~srvts=1705732701981~45995",
        "sla": {
            "deliveryTime": 37,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "37 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-01-20 23:59:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textExtendedBadges": {

                },
                "textBased": {

                },
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {


        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=708491",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {

        "id": "254451",
        "name": "Prime Pizza [Red Square Market]",
        "cloudinaryImageId": "wo7lknmsgs8id0gsx9h6",
        "locality": "Sector 13",
        "areaName": "Hari Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Pizzas",
            "Italian",
            "American",
            "Beverages"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "460041",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 2.6,
            "serviceability": "SERVICEABLE",
            "slaString": "32 mins",
            "lastMileTravelString": "2.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-01-20 23:59:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        }
                    ]
                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {


        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=254451",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {

        "id": "455925",
        "name": "Oven Story Pizza - Standout Toppings",
        "cloudinaryImageId": "b39e4312ae2e9f65c3b58faaed83f488",
        "locality": "Bank Colony",
        "areaName": "Hari Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 3.9,
        "parentId": "3534",
        "avgRatingString": "3.9",
        "totalRatingsString": "100+",
        "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 4.1,
            "serviceability": "SERVICEABLE",
            "slaString": "24-34 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-01-20 23:59:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {

                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹110"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {


        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=455925",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {

        "id": "455927",
        "name": "Sweet Truth - Cake and Desserts",
        "cloudinaryImageId": "81cf6bfe2760a45a0caf2e28716ca4d7",
        "locality": "Bank Colony",
        "areaName": "Hari Nagar",
        "costForTwo": "₹450 for two",
        "cuisines": [
            "Snacks",
            "Bakery",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.5,
        "parentId": "4444",
        "avgRatingString": "4.5",
        "totalRatingsString": "100+",
        "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 4.1,
            "serviceability": "SERVICEABLE",
            "slaString": "29 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-01-20 23:59:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {

                },
                "imageBased": {

                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹110"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {


        },
        "analytics": {

        },
        "cta": {
            "link": "swiggy://menu?restaurant_id=455927",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    }
]







const Restcard = (props) => {
    const { resData } = props


    return (<div className="card">
        <div className="rest-logo">
            <img className="rest-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.cloudinaryImageId}></img>
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
const Body = () => {
    return (<div className="body">
        <div className="search">
            <button>Search</button>
        </div>
        <div className="rest-container-wrapper">
            <div className="rest-container">
                {resList.map((restaurant) => {
                    return (<Restcard key={restaurant.id} resData={restaurant} />)
                })
                }



            </div>
        </div>
    </div>

    )
}





const Applayout = () => {
    return (<div className="app-layout">
        <Header />
        <Body />
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
