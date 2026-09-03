# Simple Schema

**Simple Schema** 是一種簡單且直覺的純文本 JSON 結構描述概念形式，與 JSON Schema 等結構描述格式不同的是，Simple Schema 的設計目的在於協助語言模型領域開發者更便利且簡短的向模型描述資料結構需求。

Simple Schema 的核心形式源自 JSON 與 JavaScript，為了方便理解，讓我們看看這個 Simple Schema 範例，展示了一個天氣查詢工具的呼叫格式：

```js
{
    "location": String, // 必填，要查詢的地點，可以是地區名或地址；範例："Taiwan, Taipei"
    "type": "current" | "24hour" | "1week" // 選填，查詢模式：目前天氣、24 小時預報、一週預報；預設為 "current"
}
```

是的，註解也是 Simple Schema 的一部份，你可能注意到我們使用的是 `JS` 作為該區塊的語言標籤，這單純是為了高亮效果，這不全然是 JavaScript 的正確資料型態（看看那個管道符！），而以下則是 JSON Schema 的版本：

```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "要查詢的地點，可以是地區名或地址；範例：\"Taiwan, Taipei\""
    },
    "type": {
      "type": "string",
      "enum": ["current", "24hour", "1week"],
      "default": "current",
      "description": "查詢模式：目前天氣、24 小時預報、一週預報"
    }
  },
  "required": ["location"],
  "additionalProperties": false
}
```

注意到此範例依現行語言模型 API 實際支援狀況，調整了部分欄位。

你能夠明顯的觀察到 Simple Schema 與 JSON Schema 相比更為簡單輕鬆，因此這是我們建議[元件](./../agent/component.md)開發者使用的描述格式，而在實際的 Token 用量計算上，上述範例的 Simple Schema 相較於 JSON Schema 節省了約 `44%` 的 Token 用量（`81` 對比 `145`；基於 Google Gemini 3.7 Flash 計算），在具有大量工具的使用場景中，這能夠大幅減少成本。

Simple Schema 並沒有正式的形式規定，我們的最高指導原則為「開發者與模型皆能輕鬆閱讀與撰寫」，您可以自由使用您偏好的縮排。

Simple Schema 並不具備程式化格式校驗的功能，也不建議被程式邏輯解析，但我們提供了 JSON Schema 到 Simple Schema 轉換的工具。
