export class Hotel {
  constructor(name, description, stars, city) {
    this.name = name;
    this.description = description;
    this.stars = stars;
    this.city = city;
  }
}

(function run() {
  const hotel = new Hotel(1, false, {}, null);
})();
