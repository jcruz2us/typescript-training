export class Hotel {
  constructor(name, description, stars) {
    this.name = name;
    this.description = description;
    this.stars = stars;
  }
}

(function run() {
  const hotel = new Hotel(1, false, {});
})();
