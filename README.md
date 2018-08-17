# ringojs module demo

## how to work with module

### user filename

* app/app.js

```code
exports.app= {
  name:"dalong",
  age:33,
  type:"app"
}

use:

const {app} =require("./app")
exports.app=app;

```

* use app/package.json

```code

{
  "version": "1.0.0",
  "main": "app.js", // define main location 
  "license": "MIT"
}

```

* user default app/index.js

```code
const {app} =require("./app")
exports.app=app;

```

* outside import module

```code

index.js

const {app}  = require("./app")
const {user} = require("./user")
const boot = require("./boot")
console.dir(user)
console.dir(app)
console.dir(boot.run())

```

## run module with rp && docker

> base image dalongrong/ringojs-docker:1.2.1-local include rp 

```code
docker-compose build

docker-compose up -d
```