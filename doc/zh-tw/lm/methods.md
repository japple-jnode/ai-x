# AIX 標準方法格式參考（AIX Standard Method Format Reference）

本參考將使用 **Simple Schema** 提供，[了解 Simple Schema](./../schema/simple.md)。

## 方法：`listModels`

`listModels` 方法用於列出該服務的所有可用模型。

### `listModels` 請求主體

```js
{
   "size": Integer, // 選填，限制列出的模型數。
   "page": Integer | String // 選填，指定頁數、模型 ID、模型位置、頁面 Token 等。
}
```

### `listModels` 回應主體

```js
{
   "models": [ ModelObject, ... ], // 模型列表
   "nextPage": Integer | String | null // 下一頁的 `page` 項。
}
```

### `ModelObject` 資料

> **互動式模型**（Interactive Model）也可以稱為對話式模型

```js
{
   "type": "interactive" | "media" | String, // 模型種類，在 AIX LM 環境下只會顯示 `interactive` 模型
}
```

## 方法：`interact`

`interact` 方法相當於常見的 **Chat Completion**（OpenAI）或 **Generate Content**（Gemini API），用於產生對話式回應。

### `interact` 請求主體

```js
{
    
}
```
