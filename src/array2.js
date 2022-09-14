fetch("https://academy-year-2021.herokuapp.com/week-3/wedding")
  .then((response) => response.json())
  .then((result) =>
    result
      .filter((att) => {
        return att.attending;
      })
      .every((att) => {
        return console.log(att.plusOne);
      })
  )
  .catch((err) => console.log(err));