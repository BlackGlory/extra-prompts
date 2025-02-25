# extra-prompts
## Install
```sh
npm install --save extra-prompts
# or
yarn add extra-prompts
```

## API
```ts
interface IOption<T> {
  label: string
  value: T
}
```

### text
```ts
function text(message: string): Promise<string>
```

### password
```ts
function password(message: string): Promise<string>
```

### invisible
```ts
function invisible(message: string): Promise<string>
```

### confirm
```ts
function confirm(message: string, defaultValue: boolean): Promise<boolean>
```

### select
```ts
function select<T>(message: string, options: IOption<T>[]): Promise<T>
```

### selectMultiple
```ts
function selectMultiple<T>(message: string, options: IOption<T>[]): Promise<T[]>
```

### waitForInput
```ts
function waitForInput(
  message: string
, predicate?: (key: string) => boolean
): Promise<string>
```
