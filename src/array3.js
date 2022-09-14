fetch("https://academy-year-2021.herokuapp.com/week-3/wedding")
  .then((response) => response.json())
  .then((result) => console.log(result.some((item) => item.attending)))
  .catch((err) => console.log(err));