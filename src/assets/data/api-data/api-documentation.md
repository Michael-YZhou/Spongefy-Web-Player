# API Documentation

## Base URL

http://codercba.com:9002

## Banner

### Description

By calling this API, you can retrieve banner (carousel image) data.

### Optional Parameters

- **type**: Resource type, corresponding to the following values. Default is **0** (PC).
  - `0`: PC
  - `1`: Android
  - `2`: iPhone
  - `3`: iPad

### API Endpoint

`/banner`

### Example Calls

- `/banner` (Default PC version)
- `/banner?type=2` (iPhone version)

## Recommended Playlists

### Description

By calling this API, you can retrieve recommended playlists.

### Optional Parameters

- **limit**: The number of playlists to retrieve. Default is **30** (offset is not supported).

### API Endpoint

`/personalized`

### Example Calls

- `/personalized?limit=1` (Retrieve one recommended playlist)

## Latest Albums

### Description

By calling this API, you can retrieve the latest album releases from the NetEase Cloud Music homepage.

### API Endpoint

`/album/newest`

### Example Call

`/album/newest`

## Playlist Details

### Description

You can see the playlist name but not the full playlist content. By calling this API and providing the **playlist ID**, you can retrieve all songs in the playlist.

- If you are **not logged in**, the playlist content will be **incomplete**.
- If you are **logged in**, the full playlist content will be available.
- The **trackIds** returned will always be complete, but the **tracks** field may be incomplete.
- To get full details of all songs, use the **trackIds** and call the [`song/detail`](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/452) API.

### Required Parameter

- **id**: Playlist ID

### Optional Parameter

- **s**: Number of recent collectors of the playlist. Default is **8**.

### API Endpoint

`/playlist/detail`

### Example Call

`/playlist/detail?id=24381616`

```
Hot Chart: http://codercba.com:9002/playlist/detail?id=2884035
New Chart: http://codercba.com:9002/playlist/detail?id=3779629
Original Chart: http://codercba.com:9002/playlist/detail?id=2884035
```

## Singer Category List

### Description

By calling this API, you can retrieve a list of singer categories.

### Optional Parameters

- **limit**: The number of results returned. Default is **30**.
- **offset**: The offset value for pagination. For example, use `(page number - 1) * 30`, where **30** is the limit value. Default is **0**.
- **initial**: Filters results based on the first letter of the singer’s name. For example, `/artist/list?type=1&area=96&initial=b` returns singers whose **name** or **pinyin** starts with "b".
  - Use `-1` for popular singers.
  - Use `0` for names starting with `#`.

### Type Values

- `-1`: All
- `1`: Male singers
- `2`: Female singers
- `3`: Bands

### Area Values

- `-1`: All
- `7`: Chinese (Mandarin)
- `96`: Western (Europe & America)
- `8`: Japan
- `16`: Korea
- `0`: Others

### API Endpoint

`/artist/list`

### Example Calls

- `/artist/list?type=1&area=96&initial=b` (Male singers from Western countries whose names start with "b")
- `/artist/list?type=2&area=2&initial=b` (Female singers from a specific area with names starting with "b")
- `/artist/list?type=-1&area=96` (All English singers)
