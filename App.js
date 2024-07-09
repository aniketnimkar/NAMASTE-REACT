import React from "react";
import ReactDOM from "react-dom/client";

// JSX (Transpiled before it reaches to the JS) - PARCEL - Babel (babel does this transpilation which is provided by Parcel)
// const jsxHeading = <h1 id="heading">Namaste React using JSX💖</h1>;
// console.log(jsxHeading);

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats.png"
          alt="Uber Eats Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
        className="res-logo"
        alt="Restaurant Logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};
// console.log(resData.info.costForTwoString);
const resList = [
  {
    info: {
      id: "63392",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId: "wyjdcndvtuabccfjndce",
      locality: "Gubalala Gate",
      areaName: "Kanakapura Road",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
      avgRating: 4.5,
      veg: true,
      parentId: "22",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=15143050~p=0~adgrpid=15143050#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=63392~eid=5c5f9e9e-bace-454e-8221-aff5797d0398~srvts=1720444772404~collid=69584",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-08 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Mithai.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
            description: "Delivery!",
          },
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLASHDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off | Use FLASHDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Mithai.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                },
              },
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-dbac2fa5-0290-4922-87ab-f26016ff3312",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-gubalala-gate-kanakapura-road-bangalore-63392",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },

  {
    info: {
      id: "564978",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Ganigarapalya",
      areaName: "Kanakapura Road",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-09 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGY50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code SWIGGY50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-dbac2fa5-0290-4922-87ab-f26016ff3312",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-ganigarapalya-kanakapura-road-bangalore-564978",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "788131",
      name: "The Gongura Palace",
      cloudinaryImageId: "12ece550ab5d596c959d23e55fa2a6a1",
      locality: "Doddakallasandra",
      areaName: "Doddakallasandra",
      costForTwo: "₹600 for two",
      cuisines: ["Biryani", "Andhra", "South Indian"],
      avgRating: 3.9,
      parentId: "468558",
      avgRatingString: "3.9",
      totalRatingsString: "100+",
      promoted: true,
      adTrackingId:
        "cid=15108108~p=1~adgrpid=15108108#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=788131~eid=5db0530a-1abf-490b-8f3b-5625f99b4462~srvts=1720444772404~collid=69584",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-08 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off | Use code PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-dbac2fa5-0290-4922-87ab-f26016ff3312",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-gongura-palace-doddakallasandra-bangalore-788131",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "415373",
      name: "UBQ BY Barbeque Nation",
      cloudinaryImageId: "oj8qclggidtymabmooh8",
      locality: "Doddakallasandra",
      areaName: "Kanakapura Road",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 3.9,
      parentId: "10804",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 61,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-08 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-dbac2fa5-0290-4922-87ab-f26016ff3312",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-doddakallasandra-kanakapura-road-bangalore-415373",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "433076",
      name: "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/13/5064548d-f53c-45a7-87fd-62339183601a_433076.jpg",
      locality: "DODDAKALASANDRA",
      areaName: "Kanakapura Mn Rd",
      costForTwo: "₹250 for two",
      cuisines: ["Beverages", "Ice Cream", "Desserts"],
      avgRating: 4.3,
      veg: true,
      parentId: "5655",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      promoted: true,
      adTrackingId:
        "cid=14920264~p=2~adgrpid=14920264#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=433076~eid=e22a2762-7043-4027-8c39-4782b516d2c6~srvts=1720444772404~collid=69584",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-09 02:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGY50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code SWIGGY50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-dbac2fa5-0290-4922-87ab-f26016ff3312",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/frozen-bottle-milkshakes-desserts-and-ice-cream-doddakalasandra-kanakapura-mn-rd-bangalore-433076",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "853338",
      name: "Samosa Party",
      cloudinaryImageId: "d8d4e708a41f011361c949d44990d5e0",
      locality: "Judicial Layout",
      areaName: "Kanakapura Road",
      costForTwo: "₹150 for two",
      cuisines: ["Chaat"],
      avgRating: 4.4,
      parentId: "6364",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-08 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use SPECIALS",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 on select items | Use code SPECIALS",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-dbac2fa5-0290-4922-87ab-f26016ff3312",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/samosa-party-judicial-layout-kanakapura-road-bangalore-853338",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "859966",
      name: "The Paratha Kitchen",
      cloudinaryImageId: "677956c13f17f24b90c7c491cb58dfe0",
      locality: "Surya Prema Building",
      areaName: "Kanakapura Road",
      costForTwo: "₹250 for two",
      cuisines: ["Indian"],
      avgRating: 5,
      veg: true,
      parentId: "212303",
      avgRatingString: "5.0",
      totalRatingsString: "8",
      promoted: true,
      adTrackingId:
        "cid=14928298~p=3~adgrpid=14928298#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=859966~eid=d7a66ad9-8ae2-46db-aab4-022266fd98e3~srvts=1720444772404~collid=69584",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-08 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "10% OFF",
        shortDescriptionList: [
          {
            meta: "Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹100 on orders above ₹479 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-dbac2fa5-0290-4922-87ab-f26016ff3312",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-paratha-kitchen-surya-prema-building-kanakapura-road-bangalore-859966",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "780664",
      name: "Kolkata Famous Kati Roll",
      cloudinaryImageId: "b8aabb06bbf015247a6ac5c730d0667b",
      locality: "Paramount Gardens",
      areaName: "Kanakapura Road",
      costForTwo: "₹150 for two",
      cuisines: ["Fast Food"],
      avgRating: 4.4,
      parentId: "3550",
      avgRatingString: "4.4",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-08 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-dbac2fa5-0290-4922-87ab-f26016ff3312",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kolkata-famous-kati-roll-paramount-gardens-kanakapura-road-bangalore-780664",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
