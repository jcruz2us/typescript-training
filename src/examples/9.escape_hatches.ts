import {Hotel} from "./3.classes";

(function run() {
  const result = {
    foo: 1,
  };
  // result.car = 2;

  // const anyResult = result as any;
  // anyResult.car = 1;

  const hotel = new Hotel("Foo");
  // const name = hotel.city.name;
  // non-null assertion operator = !
  // console.log(hotel.city!.length);

  // if (hotel.name) {
  //   console.log(hotel.name.length);
  // }

  // cast to any
  // console.log((hotel.name as any).length);

})();
