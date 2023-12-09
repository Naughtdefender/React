import { IMG_URL_CDN } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRatingString,
  sla,
}) => (
  <>
    <div className="m-10 transition-transform transform hover:scale-110x">
      <div className=" h-auto  w-56">
        <div
          className="shadow-lg p-4 rounded-2xl bg-center bg-no-repeat bg-cover w-52 h-36 "
          style={{
            backgroundImage: `url(${IMG_URL_CDN + cloudinaryImageId})`,
          }}
        ></div>
        {/* <img
        src={IMG_URL_CDN + cloudinaryImageId}
        className="w-52 h-52 "
        alt="food gallery" /> */}

        <h4 className="font-bold p-1 m-1 text-lg">{name}</h4>
        <span className="m-1">&#11088;{avgRatingString} &bull;</span>
        <span className="">{sla?.lastMileTravelString}</span>
        <p className="p-1 m-1 truncate">{cuisines.join(", ")}</p>
      </div>
    </div>
  </>
);

export default RestaurantCard;
