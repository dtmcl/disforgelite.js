# disforgelite.js

Lightweight wrapper to post Discord bot stats to [disforge.com](https://disforge.com) 



## How to install

```
npm i disforgelite.js
```

## Example Usage

```javascript
var disforge = require("disforgelite.js").client(your.bot.id,"bot-auth-token");

setInterval(function(){ disforge.send(your.server.count); }, 3600000);

```

## Disforge websites

[Discord Bot List](https://disforge.com/bots) [Discord Server List](https://disforge.com/servers)
