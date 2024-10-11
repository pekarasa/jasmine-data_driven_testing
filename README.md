# jasmine-data_driven_testing

With this TypeScript plugin for Jasmine 5.x, data-driven testing is very easy.

## Contents

With this package you can run data-driven Jasmine tests for your TypeScript code. The output is displayed in your terminal by default.

## Documentation

[https://github.com/pekarasa/jasmine-data_driven_testing](https://github.com/pekarasa/jasmine-data_driven_testing#readme)

## Quick Start

Installation:

- First install Jasmine as described at [jasmine](https://www.npmjs.com/package/jasmine).

- Then jasmine-data_driven_testing is installed with:

    ```sh
    npm install --save-dev jasmine-data_driven_testing
    ```

Write your first test:

```typescript
import { all } from "jasmine-data_driven_testing";

describe("PatchFunctions", function () {
    all<any>([
        [""],
        [null],
        [undefined]
    ], "blank values are invalid", function (param) {
        expect(value).toBe(true);
    });
}
```

## Support

Documentation: [github.com/pekarasa/jasmine-data_driven_testing](https://github.com/pekarasa/jasmine-data_driven_testing#readme)<br>
Please file issues here at GitHub.

Copyright (c) 2024Peter Portmann
This software is licensed under the MIT License.
