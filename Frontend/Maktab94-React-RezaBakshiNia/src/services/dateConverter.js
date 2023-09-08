import PersianDate from "persian-date";

export const convertADToJalali = (date) => {
  const gregorianDate = new Date(date);
  const persianDate = new PersianDate(gregorianDate);

  return persianDate.format("YYYY/MM/DD");
};
