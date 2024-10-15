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

describe("blank values are invalid", function () {
    all<any>([
        [""],
        [null],
        [undefined]
    ], "blank values are invalid", function (param: string) {
        // act
        let isBlank: boolean = true;
        if (param) {
            isBlank = false;
        }
        // assert
        expect(isBlank).toBe(true);
    });
}
```

## Getting Started

Simply `import { * } from "jasmine-data_driven_testing";`. Now you have three functions available to you:

Data Drive Tests:

```typescript
all(description, dataset, callback);
```

Data Driven Tests, marked as pending:

```typescript
xall(description, dataset, callback);
```

Data Driven Tests, marked as focused:

```typescript
fall(description, dataset, callback);
```

### Data Driven Tests

Data Driven Tests have three basic components:

1. The description
1. The dataset, which is an array of arguments passed to the spec function
1. The spec function

A quick example:

```typescript
import { all } from "jasmine-data_driven_testing";

describe("blank values are invalid", function() {
    all<any>([
        [""],
        [null],
        [undefined]
    ], "blank values are invalid", function(value) {
            expect(isEmpty(value)).toBe(true);
    });
}
```

The call to `all` above is equivalent to these native Jasmine method calls:

```typescript
describe("blank values are invalid", function() {
 
    it('blank values are invalid Nr. 1 ("")', function() {
        expect(isEmpty("")).toBe(true);
    });
 
    it('blank values are invalid Nr. 2 (null)', function() {
        expect(isEmpty(null)).toBe(true);
    });
 
    it('blank values are invalid Nr. 3 (undefined)', function() {
        expect(isEmpty(undefined)).toBe(true);
    });
 
});
```

While the `all` method is extended to the Jasmine `it` method, the `xall` method is extended to the `xit` method and the `fall` method is extended to the `fit` method.

## Support

Documentation: [github.com/pekarasa/jasmine-data_driven_testing](https://github.com/pekarasa/jasmine-data_driven_testing#readme)<br>
Please file issues here at GitHub.

Copyright (c) 2024 Peter Portmann
This software is licensed under the MIT License.
