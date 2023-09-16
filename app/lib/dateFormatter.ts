const FormatDate = (date: Date) => {
  let day = date.getDate();
  // let month = date.getMonth();
  let month = date.toLocaleString('default', { month: 'long' });
  let year = date.getFullYear();
  let formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
};

export default FormatDate