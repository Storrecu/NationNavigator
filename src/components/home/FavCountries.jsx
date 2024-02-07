import React from 'react';

const FavCountries = () => {
  return <div>FavCountries</div>;
};

export default FavCountries;

//favoritos

// const handleFavorite = (favCountry) => {
//   //favCountry: parámetro, será el nuevo país añadido en la lista "favorite"
//   // copiamos array que guardará los paises favoritos
//   const newFavCountry = [...favorite];
//   // comprobar si hay alguna coincidencia entre el pais marcado como favorito y los paises que ya estén en la lista
//   const isNewFavCountryExists = newFavCountry.some(
//     (country) => favorite === favCountry
//   );

//   if (isNewFavCountryExists) {
//     alert('This country is already added to you favorites list');
//     si hay coincidencia entre el país marcado y los paises que están en la lista de favoritos, arroja una alerta
//   } else {
//     const newFav = {};
//   AÑADIR AQUÍ EL NUEVO OBJETO: PAÍS A LA LISTA DE FAVORITOS!!!
//   }
// };

// const addNewTodo = (newTodoText) => {
//   const newTodos = [...todos];
//   const isTodoExists = newTodos.some((todo) => todo.text === newTodoText);
//   if (isTodoExists) {
//     alert('Esa tarea ya está en la lista');
//   } else {
//     const newTodo = { text: newTodoText, completed: false };
//     setTodos([...newTodos, newTodo]);
//   }
// };
