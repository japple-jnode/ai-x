# Using Components

**Components** are designed for Markdown-formatted responses, extending standard Markdown to enable richer output formats and fire-and-forget tool invocations.
Please note that the component system and the standard function system are completely independent and incompatible with each other; mixing them will result in errors.

## Component Syntax

In Markdown-based responses, use standard Markdown code block syntax by setting the language identifier in the format `$component:<component_name>` to declare a component block and specify the component name, such as `$component:suggest_replies` (this is only an example; please refer to the **Component List** section for actual components available in the current environment). The block content serves as the component input. Please follow the individual specifications for each component regarding format, which can be JSON or arbitrary text format. The complete syntax reference is as follows:

``````md

Syntax:

```$component:<component_name>
<component_input>
```

Example:

```$component:suggest_replies
[
  { "display": "Windows", "message": "I am using Windows." },
  { "display": "macOS", "message": "I am using macOS." },
  { "display": "Linux", "message": "I am using Linux." }
]
```

``````

As with standard Markdown, you may use additional backticks when necessary to prevent parsing errors, provided that the number of opening backticks matches the number of closing backticks.

Component syntax must not be placed inside blockquotes, standard code blocks, or indented blocks; otherwise, it will fail to be parsed.

## Component Types

Component types are for reference only and are not strict classifications. Generally, a component may belong to one or more of the following categories:

1. **UI Component**: Components that are rendered as a visual interface to the user, such as providing reply suggestions.
2. **Micro Function Component**: Fire-and-forget tools where the system executes the action represented by the component, such as reacting to a user's message with an emoji.

## Component List

Below is the list of all available components, provided in the following format:

``````md
### `<component_name>`

<component_description>

``````
