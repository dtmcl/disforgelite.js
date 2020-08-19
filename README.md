# disforgelite.js

Lightweight wrapper to post Discord bot stats to disforge.com 

[Discord Bot List](https://disforge.com/bots)

[Discord Server List](https://disforge.com/servers)

## How to install

```
npm i disforgelite.js
```

## Example Usage

```
var disforge = require("disforgelite.js").client(your.bot.id,"bot-auth-token");

setInterval(function(){ disforge.send(your.server.count); }, 3600000);

```
