(function run() {
  const PROPERTY_TYPES = {
    HOTEL: 1,
    APARTMENT: 2,
    MOTEL: 3,
    CABIN: 4,
  };

  function getPrettyPropertyName(propertyType) {
    switch (propertyType) {
      case 1:
        return "Hotel";
      case 2:
        return "Apartment";
      case 3:
        return "Motel";
      case 4:
        return "Cabin";
    }
  }

  getPrettyPropertyName("Boat");
})();
