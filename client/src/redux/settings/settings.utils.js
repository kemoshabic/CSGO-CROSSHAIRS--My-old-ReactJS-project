export const addItemToFavorite = (favoriteItems, itemToAdd) => {
  const existingItem = favoriteItems.find(item => item.id === itemToAdd.id);
  if(existingItem) return favoriteItems;
  return [...favoriteItems, {...itemToAdd}];
}

export const removeItemFromFavorite = (favoriteItems, itemToRemove) => {
  const existingItem = favoriteItems.find(
    item => item.id === itemToRemove.id
  )
  if(existingItem) return favoriteItems.filter(item => item.id !== itemToRemove.id)
}