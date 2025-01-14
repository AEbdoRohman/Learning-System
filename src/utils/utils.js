// capitalize first letter of a string
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatTimeTo12Hour = (time) => {
  const [hours, minutes, seconds] = time.split(":");
  const hour = parseInt(hours, 10);
  const period = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 || 12; // تحويل الساعة إلى نظام 12 ساعة
  return `${formattedHour}:${minutes}:${seconds} ${period}`;
};
