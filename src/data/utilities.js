//
export function getTimeAndDate() {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const DateNow = `${dd}-${mm}-${yyyy}`;

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  const CreateDate = `${DateNow}  ${formattedTime} `;

  return CreateDate;
}
