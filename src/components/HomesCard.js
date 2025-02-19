import React, { useState } from "react";
import Card from "./Card";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed, FaHeart, FaRegHeart, FaShower } from "react-icons/fa";
import { TiArrowMaximise } from "react-icons/ti";
import { FaTags } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { favouriteHomesAction } from "../store/storeFavouriteHomes";


const HomesCard = (props) => {
  const [favourite, setFavourite] = useState(false);
  const dispatch = useDispatch();

  // const { homes } = useSelector((state) => state.fetchHomes);
  const homes = JSON.parse(localStorage.getItem('All_Homes'))
  const {datas} = useSelector((state) => state.storeFavouriteHomes)
  // console.log(props.id)

  const togglefavourite = (id) => {
    setFavourite((prev) => !prev);
    console.log(favourite);

    let selectedHome = homes.find((home) => home.id === parseInt(id));
    console.log(selectedHome);

    // Checking if the id is already in the favourite homes array
    const idInDatas = datas.find(data =>data.id === selectedHome.id)

    if(idInDatas) {
      setFavourite(!favourite);
      console.log("Home already in favourites");
      return;
    }

    if (selectedHome && !favourite) {
      dispatch(favouriteHomesAction.addFavouriteHome(selectedHome));

      console.log("Home added to favourites");
    } else if (selectedHome && favourite) {
      dispatch(favouriteHomesAction.removeFavouriteHome(id));
    } else {
      console.log("error");
    }

    

  };

  return (
    <Card className="pb-6">
      <section className="flex flex-col space-y-3">
        {/* Image */}
        <img
          src={props.homeImage}
          alt={`${props.id} - home`}
          className="w-full h-72"
        />

        {/* Infos */}
        <div className="grid grid-cols-2 gap-4 px-2 md:px-8 font-semibold">
          <span className="col-span-2 row-span-2 flex flex-row space-x-3 items-center">
            <FaLocationDot />
            <p>{props.homeLocation}</p>
            <aside onClick={() => togglefavourite(props.id)}>
              {favourite ? (
                <FaHeart
                  className="cursor-pointer text-2xl text-red-400"
                  title="Add to favourite"
                />
              ) : (
                <FaRegHeart
                  className="cursor-pointer text-2xl"
                  title="Add to favourite"
                />
              )}
            </aside>
          </span>

          <span className="flex flex-row space-x-3 text-gray-500 items-center">
            <FaBed />
            <p>{props.bedrooms} Bed Room</p>
          </span>
          <span className="flex flex-row space-x-3 text-gray-500 items-center">
            <FaShower />
            <p>{props.bathrooms} Bath Rooms</p>
          </span>
          <span className="flex flex-row space-x-3 text-gray-500 items-center">
            <TiArrowMaximise />
            <p>{props.area} sqft</p>
          </span>
          <span className="flex flex-row space-x-3 text-gray-500 items-center">
            <FaTags />
            <p className="">{props.paymentType}</p>
          </span>
        </div>

        {props.children}
      </section>
    </Card>
  );
};

export default HomesCard;
