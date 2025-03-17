import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomes } from "../../../store/fetchHomes";
import HomesCard from "../../../components/HomesCard";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import Footer from "../../LandingPage/Footer";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { motion } from "framer-motion";

const AllHomes = () => {
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const dispatch = useDispatch();
  const { homes, isLoading, error } = useSelector((state) => state.fetchHomes);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("All_Homes") === null) {
      dispatch(fetchHomes());
    }
  }, [dispatch]);

  const allHomes = JSON.parse(localStorage.getItem("All_Homes")) || [];

  useEffect(() => {
    setShowLoadingSpinner(true);
    const spin = setTimeout(() => {
      setShowLoadingSpinner(false);
    }, 2000);

    return () => clearTimeout(spin);
  }, []);

  return (
    <React.Fragment>
      {showLoadingSpinner && <LoadingSpinner />}
      {!showLoadingSpinner && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-center mb-2 text-3xl md:text-5xl font-semibold">
              Find Property
            </h1>
            <p className="text-center mb-6 md:w-[60%] mx-auto">
              Find a home that suits you and your family. All types are available, whether a home for rent or a home to buy, we have it all.
            </p>
          </motion.div>

          {isLoading && !error && <LoadingSpinner />}
          <motion.div 
            className="px-6 lg:px-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {!isLoading && !error &&
              allHomes.length > 0 &&
              allHomes.map((eachHome) => {
                const homeAddress = "2861 62nd Ave, Oakland, CA 94605";
                return (
                  <motion.div
                    key={eachHome.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <HomesCard
                      id={eachHome.id}
                      homeImage={eachHome.coverPhoto.url}
                      homeLocation={homeAddress}
                      bedrooms={+eachHome.rooms + 1}
                      bathrooms={eachHome.baths}
                      area={eachHome.area.toFixed(2)}
                      paymentType={eachHome.purpose}
                    >
                      <div className="flex flex-row justify-between space-x-4 items-center px-2 md:px-8 pt-6">
                        <Link to={`/all-properties/${eachHome.id}`}>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button btnName="View Details" />
                          </motion.div>
                        </Link>
                        <p className="text-xl font-semibold">
                          ${eachHome.price.toLocaleString("en-US")}
                        </p>
                      </div>
                    </HomesCard>
                  </motion.div>
                );
              })}
            {!isLoading && allHomes.length === 0 && (
              <motion.p 
                className="w-full text-center mx-auto my-12 text-3xl text-orange-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                No homes available. Please check back later!
              </motion.p>
            )}
          </motion.div>
        </>
      )}
      <Footer />
    </React.Fragment>
  );
};

export default AllHomes;
