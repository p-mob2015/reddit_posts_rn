export const dateFromTimestamp = (ts) => {
  const date = new Date(ts * 1000);
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`;
  const day = `0${date.getDate()}`;

  return `${year}-${month.substr(-2)}-${day.substr(-2)}`;
};
