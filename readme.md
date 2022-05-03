# Node.js Random Emoji Generator

When the programm is not run with any input, print a random emoji:

```bash
$ node index.js
👉

$ node index.js
🍔
```

When a user enters a correct emoji name, print that emoji:

```bash
$ node index.js <---
🐻
```

```bash
$ node index.js cryyy <---
Invalid emojio
```

- Without any user input: print random emoji
- With user input of a correct emoji name: print emoji
- With user input of an incorrect emoji name: print error message that emoji doesn't exist
