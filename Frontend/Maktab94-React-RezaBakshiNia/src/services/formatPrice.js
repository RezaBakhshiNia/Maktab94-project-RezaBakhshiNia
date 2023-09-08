export function toman(number) {
  // تبدیل عدد به رشته
  let str = number.toString();

  // حذف کاراکترهای غیر عددی
  str = str.replace(/[^0-9]/g, "");

  // تقسیم عدد بر 10 برای تبدیل به تومان
  str = str / 10;

  // افزودن ممیز هر سه رقم
  for (let i = 0; i < str.length - 2; i += 3) {
    str = str.slice(0, i) + "," + str.slice(i);
  }

  // افزودن تومان در انتهای رشته
  str = str + " تومان";

  return str;
}

export function formatNumberToCurrency(number) {
  const reversedNumber = number.toString().split('').reverse().join('');
  const formattedNumber = reversedNumber.replace(/(\d{3})(?=\d)/g, '$1,').split('').reverse().join('');
  return formattedNumber + " تومان";
}