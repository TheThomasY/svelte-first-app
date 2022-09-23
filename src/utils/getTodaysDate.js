const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export default function getTodaysDate() {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth();

  return {
    date: dd,
    month: months[mm]
  };
}
