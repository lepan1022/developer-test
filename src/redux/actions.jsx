export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addItemToList = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const deleteItemfromList = (item) => {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
};

