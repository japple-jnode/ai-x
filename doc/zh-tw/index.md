# `@jnode/ai-x`

AIX 協助您更輕鬆地使用 AI API。

## 運作模式

我們使用了以下結構，提供高度明確且整潔的職責分配。

- `AIXService`：AI 服務，代表一個 API 或服務供應商等。
  - `.methods`：此服務支援的開放方法，每個屬性皆對應一個 `AIXMethod`。
- `AIXClient`：AI 服務客戶端，代表一個帳號提供 API Key 等。
  - `.methods`：此服務客戶端支援的方法，每個屬性皆對應一個 `AIXMethod`。
- `AIXModel`：模型，代表一個模型的名稱與參數等。
  - `.methods`：此模型支援的方法，每個屬性皆對應一個 `AIXMethod`。
- `AIXMethod`：操作方法，相當於一個 API 方法路徑。
