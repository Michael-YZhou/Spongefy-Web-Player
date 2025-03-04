import type { ILyricLine } from '@/views/Player/type';

// regular expression to match time in lyric string
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export function parseLyric(lyricString: string) {
  const lyrics: ILyricLine[] = [];
  // split the string into lines
  const lines = lyricString.split('\n');
  for (const line of lines) {
    // extract time and text from each line
    const result = timeRegExp.exec(line);
    // if no time is found, skip the line
    if (!result) continue;
    // convert time to milliseconds
    const timeMinutes = parseInt(result[1]) * 60 * 1000;
    const timeSeconds = parseInt(result[2]) * 1000;
    const timeMilliseconds =
      result[3].length === 3
        ? parseInt(result[3])
        : result[3].length === 2
          ? parseInt(result[3]) * 10
          : parseInt(result[3]) * 100;
    const time = timeMinutes + timeSeconds + timeMilliseconds;

    // extract text from the line
    const text = line.replace(timeRegExp, '').trim();
    lyrics.push({ time, text });
  }
  return lyrics;
}
