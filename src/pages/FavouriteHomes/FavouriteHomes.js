import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HomesCard from "../../components/HomesCard";
import { data, Link } from "react-router-dom";
import Button from "../../components/Button";

const FavouriteHomes = () => {
  const dispatch = useDispatch();

  const { datas } = useSelector((state) => state.storeFavouriteHomes);
  console.log(data);
  const homeAddress = "2861 62nd Ave, Oakland, CA 94605";

  return datas.map((data) => (
    <HomesCard
      key={data.id}
      id={data.id}
      homeImage={data.coverPhoto.url}
      homeLocation={homeAddress}
      bedrooms={+data.rooms + 1}
      bathrooms={data.baths}
      area={data.area.toFixed(2)}
      paymentType={data.purpose}
    >
      <div className="flex flex-row justify-between space-x-4 items-center px-2 md:px-8 pt-6">
        <Link to={`/all-properties/${data.id}`}>
          <Button btnName="View Details" />
        </Link>
        <p className="text-xl font-semibold">
          ${data.price.toLocaleString("en-US")}
        </p>
      </div>
    </HomesCard>
  ));
};

export default FavouriteHomes;
