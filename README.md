# MSW with Angular

1. yarn or npm to install msw for dev.

2. Use `npx msw init src` to add mockServiceWorker.js in ther **src** folder

3. Create `handler.js` to implement response code.

```javascript
import { rest } from "msw";

export const handlers = [
  rest.post("/login", null),
  rest.get("/user", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ name: "clover" }));
  }),
];
```

4. Create `browser.js` to use **setupWorker** to desconstructure handler functions.

```javascript
import { handlers } from "./handler";
import { setupWorker } from "msw";

export const worker = setupWorker(...handlers);
```

5. Add `src/mockServiceWorker.js` in the **architect ➡ build ➡ options ➡ assets** to create worker by angular.

6. import worker and start the work in the `environments/environment.ts`.

```javascript
import { worker } from "../app/browser";
worker.start();
```

Now we can write the http call service to use mws.
