export default function formatOrdinalDate(date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const ddFloat = parseFloat(dd);

  if (ddFloat > 3 && ddFloat < 21) {
    return dd + 'th';
  }
  switch (ddFloat % 10) {
    case 1:
      return dd + 'st';
    case 2:
      return dd + 'nd';
    case 3:
      return dd + 'rd';
    default:
      return dd + 'th';
  }
}
