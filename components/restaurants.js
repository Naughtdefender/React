const Restaurants = function ({
  url,
  setFilteredRestaurant,
  setAllRestaurant,
}) {
  async function fetchedRestaurants(url) {
    const data = await fetch(url);
    const json = await data.json();
    const allRestaurant = await json?.data?.cards[5]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants;
    setFilteredRestaurant(allRestaurant);
    setAllRestaurant(allRestaurant);
    return allRestaurant;
  }
  fetchedRestaurants(url);
};
export default Restaurants;
