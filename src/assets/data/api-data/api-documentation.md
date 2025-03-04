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

## Recommended Programs

### Description

By calling this API, you can retrieve recommended radio programs.

### API Endpoint

`/program/recommend`

### Optional Parameters

- **limit**: The number of results returned. Default is **10**.
- **offset**: The offset value for pagination. For example, use `(page number - 1) * 10`, where **10** is the limit value. Default is **0**.

### Example Call

- `/program/recommend?limit=5` (5 recommended radio/podcast)
- `/program/recommend?limit=10` (10 recommended radio/podcast)

## 获取歌曲详情

说明: 调用此接口, 传入音乐 id (支持多个 id, 用 `,` 隔开), 可获得歌曲详情（其中 `dt` 表示歌曲时长）。

**必选参数:**

- **ids**: 音乐 id, 如 `ids=347230`

**接口地址:**

- /song/detail

**调用例子:**

- `/song/detail?ids=347230`
- `/song/detail?ids=347230,347231`
- `http://codercba.com:9002/song/detail?ids=25830169`

**返回字段说明:**

- **name**: _String_, 歌曲标题
- **id**: _u64_, 歌曲ID
- **pst**: `0`，功能未知
- **t**: _enum_,
  - `0`: 一般类型
  - `1`: 通过云盘上传的音乐，网易云不存在公开对应
    如果没有权限将不可用，除了歌曲长度以外大部分信息都为 `null`。
    可以通过 `/api/v1/playlist/manipulate/tracks` 接口添加到播放列表。
    如果添加到“我喜欢的音乐”，则仅自己可见，除了长度以外各种信息均为未知，且无法播放。
    如果添加到一般播放列表，虽然返回 code 200，但是并没有效果。
    网页端打开会看到 404 画面。
    属于这种歌曲的例子: [示例链接](https://music.163.com/song/1345937107)
  - `2`: 通过云盘上传的音乐，网易云存在公开对应
    如果没有权限则只能看到信息，但无法直接获取到文件。
    可以通过 `/api/v1/playlist/manipulate/tracks` 接口添加到播放列表。
    如果添加到“我喜欢的音乐”，则仅自己可见，且无法播放。
    如果添加到一般播放列表，则自己会看到显示“云盘文件”，且云盘会多出其对应的网易云公开歌曲。其他人看到的是其对应的网易云公开歌曲。
    网页端打开会看到 404 画面。
    属于这种歌曲的例子: [示例链接](https://music.163.com/song/435005015)
- **ar**: _Vec&lt;Artist&gt;_, 歌手列表
- **alia**: _Vec&lt;String&gt;_,
  别名列表，第一个别名会被显示作副标题
  例子: [示例链接](https://music.163.com/song/536623501)
- **pop**: 小数，常取 [0.0, 100.0] 中离散的几个数值, 表示歌曲热度
- **st**: `0`，功能未知
- **rt**: _Option&lt;String&gt;_, None、空白字串、或者类似 `600902000007902089` 的字符串，功能未知
- **fee**: _enum_,
  - `0`: 免费或无版权
  - `1`: VIP 歌曲
  - `4`: 购买专辑
  - `8`: 非会员可免费播放低音质，会员可播放高音质及下载
    `fee` 为 `1` 或 `8` 的歌曲均可单独购买 2 元单曲
- **v**: _u64_, 常为 [1, ?] 任意数字, 代表歌曲当前信息版本
- **version**: _u64_, 常为 [1, ?] 任意数字, 代表歌曲当前信息版本
- **crbt**: _Option&lt;String&gt;_, None 或字符串表示的十六进制，功能未知
- **cf**: _Option&lt;String&gt;_, 空白字串或者 None，功能未知
- **al**: _Album_, 专辑，如果是 DJ 节目（`dj_type != 0`）或者无专辑信息（`single == 1`），则专辑 id 为 `0`
- **dt**: _u64_, 歌曲时长
- **hr**: _Option&lt;Quality&gt;_, Hi-Res 质量文件信息
- **sq**: _Option&lt;Quality&gt;_, 无损质量文件信息
- **h**: _Option&lt;Quality&gt;_, 高质量文件信息
- **m**: _Option&lt;Quality&gt;_, 中质量文件信息
- **l**: _Option&lt;Quality&gt;_, 低质量文件信息
- **a**: _Option&lt;未知&gt;_, 常为 None, 功能未知
- **cd**: _Option&lt;String&gt;_, None 或如 `"04"`, `"1/2"`, `"3"`, `"null"` 的字符串，表示歌曲属于专辑中第几张 CD，对应音频文件的 Tag
- **no**: _u32_, 表示歌曲属于 CD 中第几曲，`0` 表示没有这个字段，对应音频文件的 Tag
- **rtUrl**: _Option&lt;String(?)&gt;_, 常为 None, 功能未知
- **rtUrls**: _Vec&lt;String(?)&gt;_, 常为空列表, 功能未知
- **djId**: _u64_,
  - `0`: 不是 DJ 节目
  - 其他: 是 DJ 节目，表示 DJ ID
- **copyright**: _u32_, 0, 1, 2: 功能未知
- **s_id**: _u64_, 对于 `t == 2` 的歌曲，表示匹配到的公开版本歌曲 ID
- **mark**: _u64_, 一些歌曲属性，用按位与操作获取对应位置的值
  - `8192`: 立体声？（不是很确定）
  - `131072`: 纯音乐
  - `262144`: 支持 杜比全景声 (Dolby Atmos)
  - `1048576`: 脏标 🅴
  - `17179869184`: 支持 Hi-Res
  - 其他未知，理论上有从 1 到 2^63 共 64 种不同的信息
    专辑信息的 `mark` 字段也同理
    例子: `id` 1859245776 和 1859306637 为同一首歌，前者 `mark & 1048576 == 1048576`，后者 `mark & 1048576 == 0`，因此前者是脏版。
- **originCoverType**: _enum_,
  - `0`: 未知
  - `1`: 原曲
  - `2`: 翻唱
- **originSongSimpleData**: _Option&lt;SongSimpleData&gt;_, 对于翻唱曲，可选提供原曲简单格式的信息
- **single**: _enum_,
  - `0`: 有专辑信息或者是 DJ 节目
  - `1`: 未知专辑
- **noCopyrightRcmd**: _Option&lt;NoCopyrightRcmd&gt;_, 不能判断出歌曲有无版权
- **mv**: _u64_, 非零表示有 MV ID
- **rtype**: 常为 `0`，功能未知
- **rurl**: _Option&lt;String(?)&gt;_, 常为 None，功能未知
- **mst**: _u32_, 偶尔为 `0`, 常为 `9`，功能未知
- **cp**: _u64_, 功能未知
- **publishTime**: _i64_, 毫秒为单位的 Unix 时间戳
- **pc**: 云盘歌曲信息，如果不存在该字段，则为非云盘歌曲
- **privilege**: 权限相关信息
  - `cs`: _bool_, 是否为云盘歌曲
  - `st`: 小于 0 时为灰色歌曲，使用上传云盘的方法解灰后 `st == 0`
  - `toast`: _bool_, 是否「由于版权保护，您所在的地区暂时无法使用。」
  - `flLevel`: 免费用户的该歌曲播放音质
  - `plLevel`: 当前用户的该歌曲最高试听音质
  - `dlLevel`: 当前用户的该歌曲最高下载音质
  - `maxBrLevel`: 歌曲最高音质
