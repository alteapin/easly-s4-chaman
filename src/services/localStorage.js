const saveFavorites = JSON.parse(localStorage.getItem("favorites"));
const uniqueFavorites = saveFavorites
    ? saveFavorites.filter((value, index, array) => {
          return (
              array.findIndex(
                  valueArray =>
                      JSON.stringify(valueArray) === JSON.stringify(value)
              ) === index
          );
      })
    : false;

export { saveFavorites, uniqueFavorites };
