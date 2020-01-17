/**
 * ### Challenge `getLastCarInfo`
 *
 * @instructions
 * getLastCarInfo takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getLastCarInfo returns a string in the format `This is a {car_make} {car_model}
 *
 * For example, if getLastCarInfo is invoked passing the inventory inside /data/inventory.js,
 * it will return `This is a Lincoln Town Car`.
*/
function getLastCarInfo(arr) {
  return `This is a ${arr[arr.length - 1].car_make} ${arr[arr.lenght - 1].car_model}`;
}
