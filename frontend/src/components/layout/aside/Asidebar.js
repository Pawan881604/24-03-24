import React from "react";
import FilterPrice from "./FilterPrice";
import Categories from "./Categories";
import RatingsFilter from "./RatingsFilter";
import "./style.css";
import ClearFilter from "./ClearFilter";
import { Button } from "@material-ui/core";
import { IoIosArrowRoundBack } from "react-icons/io";
const Asidebar = ({
  //------------props
  setFilter,
  filter,
  inputevent,
  price,
  ratingsHeandle,
  ratings,
  clearFilterHeandler,
  clearFilter,
}) => {
  return (
    <>
      <div className="aside-filter aside-hr">
        <div className="inner-aside-filter">
          <Button onClick={() => setFilter(!filter)} className="filter">
            Filter
            <IoIosArrowRoundBack className="filter-arrow" />
          </Button>
          <Button
            style={{
              marginTop: 5,
              fontWeight: 600,
              fontSize: "13px",
              width: "130px",
            }}
            onClick={() => clearFilterHeandler()}
          >
            Clean All
          </Button>
        </div>
      </div>
      <div className="mob--cont">
        <div className="aside-price-categories aside-hr">
          <Categories clearFilter={clearFilter} />
        </div>
        <div className="aside-price-filter aside-hr">
          <FilterPrice price={price} inputevent={inputevent} />
        </div>
        {/* <RatingsFilter ratingsHeandle={ratingsHeandle} ratings={ratings} /> */}
        {/* <ClearFilter
          clearFilterHeandler={clearFilterHeandler}
          clearFilter={clearFilter}
        /> */}
      </div>
    </>
  );
};

export default Asidebar;
