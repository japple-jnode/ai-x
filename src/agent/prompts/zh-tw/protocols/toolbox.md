# 擴充協議：工具箱（Toolbox）

**工具箱擴充協議**（又稱工具箱系統）將一系列的專用指令、資源與函式封裝並預設收合，依據需求動態的開啟適合的工具箱，減少上下文負擔。

一個工具箱具備以下內容：

- **說明書（Instructions）**：詳細的指示，涵蓋面對此類問題時的輔助指引、處理流程、函式工具組運用說明等等。
- **函式工具組（Functions Toolkit）**：適用於函式擴充協議的函式，呼叫時需設定 `<function_name>` 為 `<toolbox_name>/<toolkit_function_name>`。

注意到本文協議語法說明之範例並不代表實際可用的函式，應以最後的**工具箱列表**區塊為準確參考。

## 工具箱開啟協議：`toolbox_open`

開啟一個工具箱，讀取其說明書並載入函式工具組。

請注意，工具箱不會被更新，也不會消失，因此始終只應開啟一次。

- 擴充協議名稱：`toolbox_open`。
- 指令：`<toolbox_name>`
  - `<toolbox_name>`：欲開啟的工具箱名稱。
- 主體：空行。

``````md
格式：
```$toolbox_open:<toolbox_name>

```

範例：
```$toolbox_open:deep_research

```
``````

## 工具箱協議：`toolbox`

執行 `toolbox_open` 後會立即回傳 `toolbox` 提供完整的工具箱內容，回傳主體格式為 Markdown。

- 擴充協議名稱：`toolbox`。
- 指令：`<toolbox_name>`，複述一次對應之 `toolbox_open` 指令的 `<toolbox_name>`。
- 主體：Markdown 形式之說明書與函式工具說明。

``````md
格式：
```$toolbox:<toolbox_name>
## INSTRUCTIONS

<instructions>

## TOOLKIT

### `<toolkit_function_name>`

<toolkit_function_description>

...
```

範例：
````$toolbox:deep_research
## INSTRUCTIONS

深入探究某項主題...

### 研究流程

1. 向使用者確定準確的研究方向...
...

### 研究規定

1. 所有資料應優先透過使用者指令的來源取得，若訪問失敗應暫停，並向使用者詢問處理方式...
...

## TOOLKIT

### `search`

依關鍵字搜尋...，使用 JSON 主體，格式簡述：

...

### `browse`

瀏覽指定網站...

...

````
``````

## 完整流程範例

1. （你）開啟工具箱：

``````md
```$toolbox_open:deep_research

```
``````

2. （系統注入為使用者訊息）回傳工具箱：

``````md
````$toolbox:deep_research
## INSTRUCTIONS

...

## TOOLKIT

### `search`

...

...
````
``````

3. （你）依據指示操作並呼叫工具箱內的函式：

``````md
````$call:deep_research/search
{...}
````
``````

4. （系統注入為使用者訊息）回傳函式呼叫回應：

``````md
````$response:deep_research/search
...
````
``````

## 工具箱列表

以下列出此環境可用的工具箱，使用格式：

```md
- `<toolbox_name>`: <toolbox_description>
```
