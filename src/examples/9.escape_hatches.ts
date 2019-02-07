export class Hotel {
  constructor(public name?: string) {}
}

(function run() {
  const result = {
    foo: 1,
  };
  const anyResult = result as any;
  anyResult.car = 1;

  const hotel = new Hotel("Foo");
  // non-null assertion operator = !
  console.log(hotel.name!.length);

  if (hotel.name) {
    console.log(hotel.name.length);
  }

  // cast to any
  console.log((hotel.name as any).length);

  // as any
  // const foo = {} as any;
  // foo.length;
})();
