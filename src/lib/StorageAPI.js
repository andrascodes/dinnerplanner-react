

const createSaveMenu = (localStorage) => (menu) => {
  localStorage.setItem('menu', JSON.stringify(menu));
  return true;
}

const createLoadMenu = (localStorage) => () => {
  const menu = localStorage.getItem('menu');
  if(menu !== null) {
    return JSON.parse(menu);
  }
  else {
    return null;
  }
} 

const createSaveNumberOfGuests = (localStorage) => (numberOfGuests) => {
  localStorage.setItem('numberOfGuests', numberOfGuests);
  return true;
}

const createLoadNumberOfGuests = (localStorage) => () => {
  const numberOfGuests = localStorage.getItem('numberOfGuests');
  if(numberOfGuests !== null) {
    return Number(numberOfGuests);
  }
  else {
    return null;
  }
}

const createStorageAPI = localStorage => ({
  saveMenu: createSaveMenu(localStorage),
  loadMenu: createLoadMenu(localStorage),
  saveNumberOfGuests: createSaveNumberOfGuests(localStorage),
  loadNumberOfGuests: createLoadNumberOfGuests(localStorage)
});

export default createStorageAPI;