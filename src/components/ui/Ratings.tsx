// "use client";
import { Rating as ReactRating, ThinStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const Ratings = ({ rating }: { rating: number }) => {
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };
  return (
    <ReactRating
      style={{ maxWidth: 100 }}
      value={4.5}
      readOnly
      itemStyles={myStyles}
    />
  );
};

export default Ratings;
