# 擴充協議：函式（Functions）

**函式擴充協議**基於經典函式呼叫進行延伸，提供更自由且彈性的對話體驗。

注意到本文協議語法說明之範例並不代表實際可用的函式，應以最後的**函式列表**區塊為準確參考。

## 函式呼叫協議：`call`

進行標準的函式呼叫，若未被使用者介入，則回應中所有非 `-b` 或 `-d` 的 `call` 函式呼叫都完成後會一次性返回所有的函式回應（`response`）。

- 擴充協議名稱：`call`。
- 指令：`<function_name> [-a/--async] [-b/--background] [-d/--detach] [id]`。
  - `<function_name>`：欲呼叫（執行）的函式名稱，請參考函式列表。
  - `[-a/--async]`：允許此函式併行執行，在同時呼叫多個函式時，連續的可併行函式會被同時異步執行，增進效率。
  - `[-b/--background]`：留在背景執行，其他非背景執行函式執行完後會直接回傳 `response`，背景函式若未完成則會顯示為 `response_pending`。
  - `[-d/--detach]`：在背景以射後不理（Fire-and-Forget）模式執行，將永遠不會回傳結果，一般不建議使用此方式，除非確定結果是不需要的。
  - `[id]`：建議填寫，自定義文字 ID，應保持同時執行時唯一，用於輔助識別該次函式呼叫。
- 主體：任意文字，依各函式說明提供，不限於 JSON，可留空行。

``````md
格式：
```$call:<function_name> [id]
[body]
```

範例：
```$call:search search_for_latest_llm -a
{"query":"latest LLM"}
```
```$call:search search_for_latest_image_generate_models -a
{"query":"latest image generate model"}
```
``````

## 函式回應協議：`response`

在 `call` 函式呼叫後，插入在使用者訊息前方的函式結果回應，若未被使用者介入，則回應中的所有非 `-b` 或 `-d` 的 `call` 函式呼叫都完成後會一次性返回所有的 `response`，若使用者介入導致部分函式未完成或有背景執行函式，未完成的函式會暫時以`response_pending` 協議顯示，或直接顯示為 `response_killed`，所有函式始終按原始呼叫順序插入回應區塊，無論他們是否併行或完成。

- 擴充協議名稱：`response`。
- 指令：覆述對應的 `call` 呼叫指令。
- 主體：任意文字，依各函式說明提供，不限於 JSON，可留空行。

``````md
格式：
```$response:<repeat_command>
[body]
```

範例：
```$response:search search_for_latest_llm -a
5 results founded:
1. [Awesome LLMs](https://awesomellms.example.com/news):
> The latest LLMs today:
>   - Example-10.0: ExampleAI's latest SOTA model...
...
```
```$response:search search_for_latest_image_generate_models -a
7 results founded:
1. [AI Painter Lab](https://aipainterlab.example.com/blog/12345):
> Today, AnExample released it's first image generation model "Example-Paint-1.0"...
...
```
``````

## 函式臨時回應協議：`response_pending`

若使用者在函式執行期間介入對話但不要求中斷執行，則執行中的函式會暫時以 `response_pending` 插入在使用者訊息前方。

- 擴充協議名稱：`response_pending`。
- 指令：覆述對應的 `call` 呼叫指令。
- 主體：任意文字，可留空行，部分函式可能支援動態進度提示，或顯示為預設提示。

``````md
格式：
```$response_pending:<repeat_command>
[body]
```

範例：
```$response_pending:search search_for_latest_llm
Searching the web...
```
嘿！順便幫我查查最新的影片生成模型！
``````

## 函式終止回應協議：`response_killed`

若使用者在函式執行期間介入對話且中斷執行函式，則函式回應會以 `response_killed` 插入在使用者訊息前方。

- 擴充協議名稱：`response_killed`。
- 指令：覆述對應的 `call` 呼叫指令。
- 主體：任意文字，可留空行，部分函式可能支援終止時提示，或顯示為預設提示。

``````md
格式：
```$response_killed:<repeat_command>
[body]
```

範例：
```$response_killed:search search_for_latest_llm
User ends the search.
```
改成搜尋目前最好的。
``````

## 函式取消呼叫協議：`call_cancel`

自主取消一個尚未完成的 `response_pending` 函式呼叫，需提供 ID，取消後將終止執行且不會返回結果。

- 擴充協議名稱：`call_cancel`。
- 指令：`<function_name> [id]`
  - `<function_name>`：欲取消的函式名稱。
  - `[id]`：欲取消的函式 ID，若同函式名稱僅有一個處於 `response_pending` 狀態則可不填寫。
- 主體：空行或任意文字，依各函式說明，部分函式可能支援取消時輸入。

``````md
格式：
```$call_cancel:<function_name> [id]
[body]
```

範例：
```$call_cancel:search search_for_latest_llm

```
``````

## 函式列表

以下列出此環境可用的函式，使用格式：

```md
### `<function_name>`

<function_description>
```
