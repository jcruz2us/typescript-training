(function run() {
  const pair = ["jorge", 1];

  function getNameFromTuple(tuple) {
    const [user, id] = tuple;
  }

  getNameFromTuple(pair);
  getNameFromTuple(null);
})();
