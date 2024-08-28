import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  renderItem,
  setErrorMessage,
  setStatus,
  setSuccessMessage,
} from "../../../../store/itemSlice";
import Navbar from "../../navbar/Navbar";
import Card from "./Card";
import { toast } from "react-toastify";
import STATUS from "../../../../status/status";

const MyListing = () => {
  const { errorMessage, successMessage, itemData, status } = useSelector(
    (store) => store.itemslice
  );
  console.log(itemData);
  const [visibleItems, setVisibleItems] = useState(9); // Initially show 9 items
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(renderItem());
  }, []);

  useEffect(() => {
    if (status === STATUS.SUCCESS && successMessage) {
      dispatch(setStatus(null));
      dispatch(setSuccessMessage(null));
    } else if (status === STATUS.ERROR && errorMessage) {
      toast.error(errorMessage);
      dispatch(setStatus(null));
      dispatch(setErrorMessage(null));
    }
  }, [status, successMessage, errorMessage, dispatch]);

  const handleSeeMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6); // Show 6 more items
  };

  const safeItemData = itemData || [];

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 gap-y-10 p-8">
        {safeItemData &&
          safeItemData
            .slice(0, visibleItems)
            .map((data) => <Card key={data.id} data={data} />)}
      </div>
      {visibleItems < safeItemData.length && (
        <div className="text-center mt-4 p-11">
          <button
            onClick={handleSeeMore}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default MyListing;
