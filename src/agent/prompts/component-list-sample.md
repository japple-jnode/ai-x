### `suggest_replies`

A UI component that provides the user with suggested options for their next response. It uses JSON input with the following schema:

```js
[
    // Option object
    {
        "display": String, // The option label displayed to the user
        "message": String // The message content automatically sent when the user clicks the option
    },
    ...
]
```

### `reaction`

A micro function component that reacts to the user's message with an emoji. Input the emoji directly (e.g., `❤️`). Invocation example:

``````md
```$component:reaction
❤️
```
``````
