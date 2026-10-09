# AIX 標準方法格式參考（AIX Standard Method Format Reference）

本參考將使用 **Simple Schema** 提供，[了解 Simple Schema](./../schema/simple.md)。

## 方法：`listModels`

`listModels` 方法用於列出該服務的所有可用模型。

### `listModels` 請求主體

```js
{
  "size": Integer, // 選填，限制列出的模型數
  "page": Integer | String // 選填，指定頁數、模型 ID、模型位置、頁面 Token 等
}
```

### `listModels` 回應主體

```js
{
  "models": [ ModelObject, ... ], // 模型列表
  "nextPage": Integer | String | null // 下一頁的 `page` 項，`null` 時表示不適用或已到底
}
```

### `TypeString` 格式

在 AIX 中，我們使用一種特殊的類別表示字串格式，以提供豐富的層級擴充管理，此即 `TypeString`。

`TypeString` 層級由英文字母、數字與連字號（`-`）組成，具多層時以點（`.`）分隔，不分大小寫，第一層（最前面）為主類別，後續為子類別，子類別可由 AIX 標準訂定或個別訂定。

`TypeString` 範例：`media.image.diffusion`、`interactive`。

AIX 標準建議實作時採取「優先支援」與「包容忽略」的原則，例如實作 `media.image` 時應優先支援採用 `media` 具備的屬性，而在遇到未知的屬性時應忽略而非觸發錯誤。

### 模型種類（Model Types）

- `interactive`：互動式模型，也可以稱為對話式模型，泛指一切以對話形態進行操作的模型，常見的語言模型與部分影像生成模型皆屬於此類。
- `media`：媒體模型，提供輸入與參數，一次性的生成一項或多項媒體內容（檔案文件）的模型，一般的影像生成模型屬於此類。
  - `media.image`：圖像模型，專用於生成靜態圖像。
  - `media.video`：影片模型，專用於生成影片。
  - `media.audio`：音訊模型，專用於生成音訊。
    - `media.audio.speech`：語音模型，專用於生成人聲語音。
    - `media.audio.music`：音樂模型，專用於生成音訊。
- `embedding`：嵌入模型。
- `decision`：決策模型。

### 模型旗標（Model Flags）

- 適用於 `interactive` 模型
  - `thinking`：思考。
    - `thinking.level`：思考層級控制。
      - `thinking.level.none`：禁用思考（0.0）。
      - `thinking.level.minimal`：最小思考（0.1）。
      - `thinking.level.low`：低思考（2.0）。
      - `thinking.level.medium`：中度思考（4.0）。
      - `thinking.level.high`：高度思考（6.0）。
      - `thinking.level.max`：頂級思考（8.0）。
      - `thinking.level.ultra`：極致思考（10.0）。
    - `thinking.original`：支援展示原始思考輸出。
    - `thinking.summary`：支援展示簡略的思考過程。
  - `multimodal`：多模態輸入支援。
    - `multimodal.image`：支援圖片輸入。
    - `multimodal.video`：支援影片輸入。
    - `multimodal.animatedImage`：支援動態圖片輸入。
    - `multimodal.audio`：支援音訊輸入。
  - `input`：輸入形式。
    - `input.urlAttachment`：支援從網址載入。
  - `output`：輸出形式。
    - `output.text`：支援輸出文字。
    - `output.media`：支援輸出媒體。
      - `output.media.image`：支援輸出圖片。
      - `output.media.video`：支援輸出影片。
      - `output.media.audio`：支援輸出音訊。
        - `output.media.audio.speech`：支援輸出語音音訊。
        - `output.media.audio.music`：支援輸出音樂音訊。
    - `output.decision`：支援輸出決策。
      - `output.decision.noul`：支援輸出機率型是非決策。
      - `output.decision.choice`：支援輸出選項型決策。
      - `output.decision.score`：支援輸出有序評分型決策。
  - `agent`：代理型操作。
    - `agent.function`：支援函式呼叫。
    - `agent.search`：支援內建搜尋。

### `QualityString` 格式

`QualityString` 主要適用於 `media.image` 與 `media.video` 模型，表示畫質參數，涵蓋兩種表示法：

- **K 表示法**：`<數字>K`，水平像素數量，如 `1K`、`2K`。
- **p 表示法**：`<數字>p`，垂直像素數量，如 `1080p`、`720p`。

注意到，兩種表示法皆為大小寫敏感（Case Sensitive）。

### `RatioString` 格式

`RatioString` 主要適用於 `media.image` 與 `media.video` 模型，表示比例參數，格式為 `<width>:<height>`，例如 `16:9`、`1:1`。

### `ModelObject` 資料

> 請注意，由於現行各 API 平台格式差異極大，AIX 為維持通用性，無法要求所有屬性皆需具備，但我們高度建議所有實作 AIX 的平台盡可能支援所有屬性。

```js
{
  "type": TypeString, // 模型種類
  "id": String, // 模型唯一 ID，例如：`gpt-10-universe`
  "alt": [String] | null, // 指向此模型的額外唯一 ID，例如 `gpt-latest`
  "name": String | null, // 模型可讀名稱，例如：`GPT-10 Universe`
  "description": String | null, // 模型的簡述
  "flags": [TypeString], // 模型旗標列表

  // interactive 適用屬性
  "maxInput": Integer | null, // 最大輸入 Token 限制參考
  "maxOutput": Integer | null, // 最大輸出 Token 限制參考
  "contextSize": Integer | null, // 綜合上下文長度參考
  "inputPrice": Number | null, // 輸入價格參考，USD/M token
  "cachedInputPrice": Number | null, //  /M token
  "outputPrice": Number | null, // 輸出價格參考，USD/M token

  // media 適用屬性
  "unitPrice": Number | null, // 單元（如單張圖片）基礎價格，USD/Unit

  // media.image 適用屬性
  "sizeLimit": { // 尺寸限制，建議擇一使用
    // 任意像素型尺寸限制
    "maxWidth": Integer | null, // 最大寬度，pixel
    "maxHeight": Integer | null, // 最大高度，pixel
    "maxTotalPixel": Integer | null, // 最大像素尺寸，pixel
    // 畫質與比例型尺寸選項
    "qualityOptions": [QualityString] | null, // 可用的畫質選項
    "ratioOptions": [RatioString] | null // 可用的比例選項
  }
}
```

## 方法：`interact`

`interact` 方法相當於常見的 **Chat Completion**（OpenAI）或 **Generate Content**（Gemini API），用於產生對話式回應。

### `interact` 請求主體

```js
{
    
}
```
