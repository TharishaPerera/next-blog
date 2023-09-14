const FormatDate = (date: Date) => {
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let formattedDate = `${day} / ${month + 1} / ${year}`;
  return formattedDate;
};

export default FormatDate