export default function convertMinutesToHour(time: any): string {
  const hours = time / 60;
  const roundedHours = Math.floor(hours);
  const minutes = (hours - roundedHours) * 60;
  const roundedMinutes = Math.round(minutes);

  const formatWithZero = (value: number) => {
    return ('0' + value).slice(-2);
  };

  return `${formatWithZero(roundedHours)}:${formatWithZero(roundedMinutes)}`;
}
