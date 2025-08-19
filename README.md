```
$ tsgo --pretty --project web/tsconfig.json --rootDir web --noEmit
web/test.ts:5:3 - error TS2322: Type 'import("/Users/john/figma/tsgo-bug/client").default' is not assignable to type 'import("/Users/john/figma/tsgo-bug/livegraph-internal/ts/src/client/client").default'.
  Types have separate declarations of a private property 'field'.

5   return client
    ~~~~~~


Found 1 error in web/test.ts:5
```
