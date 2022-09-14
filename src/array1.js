fetch("https://academy-year-2021.herokuapp.com/week-3/party")
  .then((response) => response.json())
  .then(
    (result) =>
      console.log(
        result.some((item) => item.name.includes("Gabrielė") && item.vip)
      ) ||
      console.log(
        result.some((item) => item.name.includes("Giedrė") && item.vip)
      )
  )
  .catch((err) => console.log(err));
