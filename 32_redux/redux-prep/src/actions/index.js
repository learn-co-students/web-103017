export const decrement = amount => {
  return { type: 'DECREMENT', amount };
};

export const increment = amount => {
  return { type: 'INCREMENT', amount };
};
