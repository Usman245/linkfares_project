import React from "react";
import { Tabs, Tab, Chip } from "@nextui-org/react";
import HotelListCardlg from "./HotelListCardlg";

const HotelsListPage = () => {
  
  const hotlesData = [
    {
      hotelimg: "/images/hotellist.png",
      hoteltitle: "Vintage Grand Hotel - Formerly Ghaya Grand Hotel",
      hotellocation: "27.93 km from city centre",
      hotelrating: 5,
      hotelreviews: 4206,
      hotelpackages: [
        {
          packagetitle: "Best",
          packagePrice: "19,407",
        },
        {
          packagetitle: "Standard",
          packagePrice: "21,407",
        },
        {
          packagetitle: "Luxury",
          packagePrice: "26,407",
        },
      ],
      hotelPrice: "20,796",
      hoteltype: "a night",
    },

    {
      hotelimg: "/images/hotelavani.png",
      hoteltitle: "Avani Deira Dubai Hotel",  
      hotellocation: "27.93 km from city centre",
      hotelrating: 5,
      hotelreviews: 4206,
      hotelpackages: [
        {
          packagetitle: "Best",
          packagePrice: "19,407",
        },
        {
          packagetitle: "Standard",
          packagePrice: "21,407",
        },
        {
          packagetitle: "Luxury",
          packagePrice: "26,407",
        },
      ],
      hotelPrice: "20,796",
      hoteltype: "a night",
    },

    {
      hotelimg: "/images/MarcoPolo.png",
      hoteltitle: "Marco Polo Hotel",
      hotellocation: "27.93 km from city centre",
      hotelrating: 5,
      hotelreviews: 4206,
      hotelpackages: [
        {
          packagetitle: "Best",
          packagePrice: "19,407",
        },
      ],
      hotelPrice: "20,796",
      hoteltype: "a night",
    },

    {
      hotelimg: "/images/crowneplaza.png",
      hoteltitle: "Crowne Plaza Dubai Deira, an IHG Hotel",
      hotellocation: "27.93 km from city centre",
      hotelrating: 3,
      hotelreviews: 4206,
      hotelpackages: [
        {
          packagetitle: "Best",
          packagePrice: "19,407",
        },
        {
          packagetitle: "Best",
          packagePrice: "19,407",
        },
      ],
      hotelPrice: "20,796",
      hoteltype: "a night",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex flex-col gap-3 ">
        <div className="flex justify-between items-center">
          <h4 className="font-poppins text-black-16 font-medium ">
            All taxes and fees included  |  971 results
          </h4>
          <p className="text-lg font-bold font-roboto text-green-600">
            Learn more about price changes
          </p>
        </div>

        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-4  border-divider  flex justify-between",
            cursor: "w-full bg-green-600",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-green-600",
          }}
        >
          <Tab
            key="recomended"
            title={
              <div className="flex items-center space-x-2">
                <span>Recomended</span>
              </div>
            }
          />
          <Tab
            key="topreviews"
            title={
              <div className="flex items-center space-x-2">
                <span>Top reviews</span>
              </div>
            }
          />
          <Tab
            key="lowestprice"
            title={
              <div className="flex items-center space-x-2">
                <span>Lowest Price</span>
              </div>
            }
          />

          <Tab
            key="mostStars"
            title={
              <div className="flex items-center space-x-2">
                <span>Most Stars</span>
              </div>
            }
          />

          <Tab
            key="Nearestfirst"
            title={
              <div className="flex items-center space-x-2">
                <span>Nearest First</span>
              </div>
            }
          />
        </Tabs>


    

        <p className="text-sm font-roboto  font-regular  text-center  ">
          We search for prices from hundreds of providers — what they pay us may
          affect our sort order.
          <span className="text-green-600">Learn how Skyscanner works</span>
        </p>

        <div className="flex flex-col gap-4">
          {hotlesData.map((items, index) => (
            <HotelListCardlg key={index} hotels={items} />
          ))}
        </div>

        <div className="flex flex-col "></div>
      </div>
    </div>
  );
};

export default HotelsListPage;
