run `$(npm bin)/tsc bug.ts` to repro

Output:
```
bug.ts(4,12): error TS2345: Argument of type 'string' is not assignable to parameter of type '{ [key: string]: any; }'.
```
