export function formatCount(count: number) {
  if (count > 1000000000) {
    return (Math.floor((count / 1000000000) * 10) / 10).toFixed(1) + ' Billion';
  } else if (count > 1000000) {
    return (Math.floor((count / 1000000) * 10) / 10).toFixed(1) + ' Million';
  } else if (count > 10000) {
    return (Math.floor((count / 1000) * 10) / 10).toFixed(1) + ' Thousand';
  } else {
    return count.toString();
  }
}

export function formatImageSize(
  imageUrl: string,
  width: number,
  height: number = width,
) {
  return imageUrl + `?param=${width}y${height}`;
}

export function formatTime(time: number) {
  const timeInSeconds = time / 1000;
  const min = Math.floor(timeInSeconds / 60);
  const sec = Math.floor(timeInSeconds % 60);
  const formatMinute = min < 10 ? '0' + min : min;
  const formatSecond = sec < 10 ? '0' + sec : sec;
  return `${formatMinute}:${formatSecond}`;
}
