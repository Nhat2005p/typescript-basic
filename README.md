# TypeScript Handbook: Tổng Hợp Kiến Thức Toàn Tập

> **Tài liệu tổng hợp toàn diện kiến thức TypeScript từ cơ bản đến nâng cao**, được biên soạn chuẩn chỉn chu phục vụ quá trình đào tạo và thực hành dự án tại Sun* / NodeJS Course.
>
> **Tài liệu tham khảo chính:**
> - [TypeScript Official Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
> - [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
> - [W3Schools TypeScript Tutorial](https://www.w3schools.com/typescript/typescript_intro.php)

---

## 📑 Mục Lục
1. [Giới thiệu về TypeScript](#1-giới-thiệu-về-typescript)
2. [Cài đặt & Cấu hình tsconfig.json](#2-cài-đặt--cấu-hình-tsconfigjson)
3. [Hệ thống Kiểu dữ liệu Cơ bản (Basic Types)](#3-hệ-thống-kiểu-dữ-liệu-cơ-bản-basic-types)
4. [Các kiểu dữ liệu đặc biệt (any, unknown, void, never)](#4-các-kiểu-dữ-liệu-đặc-biệt)
5. [Type Aliases vs Interfaces](#5-type-aliases-vs-interfaces)
6. [Functions & Function Signatures](#6-functions--function-signatures)
7. [Advanced Types: Union, Intersection & Literal Types](#7-advanced-types-union-intersection--literal-types)
8. [Type Narrowing & Type Guards](#8-type-narrowing--type-guards)
9. [Type Assertions & Type Casting](#9-type-assertions--type-casting)
10. [Lập trình Hướng đối tượng (OOP) trong TypeScript](#10-lập-trình-hướng-đối-tượng-oop-trong-typescript)
11. [Generics Toàn Diện (Generic Functions, Interfaces, Classes)](#11-generics-toàn-diện)
12. [Utility Types Thông Dụng](#12-utility-types-thông-dụng)
13. [Structural Type System (Duck Typing)](#13-structural-type-system-duck-typing)
14. [Modules & Type Imports](#14-modules--type-imports)
15. [Best Practices & Clean Code Guidelines](#15-best-practices--clean-code-guidelines)
16. [Hướng dẫn Cài đặt & Chạy mã nguồn](#16-hướng-dẫn-cài-đặt--chạy-mã-nguồn)

---

## 1. Giới thiệu về TypeScript

### 1.1. TypeScript là gì?
TypeScript là một ngôn ngữ mã nguồn mở phát triển bởi Microsoft:
- **Typed Superset of JavaScript**: Mọi mã JS hợp lệ đều là mã TS hợp lệ. TS bổ sung hệ thống kiểu tĩnh và OOP nâng cao.
- **Transpiler**: Trình biên dịch TypeScript (`tsc`) kiểm tra kiểu lúc compile-time và chuyển đổi mã nguồn thành JavaScript thuần (`.js`) tương thích mọi runtime Node.js và trình duyệt.

### 1.2. TypeScript vs JavaScript
| Tiêu chí | JavaScript thuần | TypeScript |
| :--- | :--- | :--- |
| **Kiểu dữ liệu** | Dynamic (kiểm tra runtime) | Static (kiểm tra compile-time) |
| **Bắt lỗi** | Chỉ thấy khi app đang chạy | Bắt lỗi ngay khi gõ code trong IDE |
| **Refactor** | Dễ sót lỗi khi đổi tên biến/hàm | IDE tự động refactor an toàn 100% |
| **Autocomplete** | Gợi ý hạn chế | Gợi ý chuẩn xác theo định nghĩa kiểu |

---

## 2. Cài đặt & Cấu hình tsconfig.json

### 2.1. Khởi tạo dự án
```bash
npm init -y
npm install typescript @types/node --save-dev
npx tsc --init
```

### 2.2. Cấu hình chuẩn trong `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",                /* Chuẩn JavaScript đầu ra sau khi build */
    "module": "commonjs",              /* Hệ thống module đầu ra: commonjs hoặc ESNext */
    "rootDir": "./src",                /* Thư mục chứa mã nguồn TS gốc */
    "outDir": "./dist",                /* Thư mục chứa file JS đã biên dịch */
    "strict": true,                    /* Bật toàn bộ chế độ kiểm tra kiểu nghiêm ngặt */
    "noImplicitAny": true,             /* Cảnh báo lỗi nếu biến bị suy thành any */
    "strictNullChecks": true,          /* Không cho phép gán tuỳ tiện null/undefined */
    "esModuleInterop": true,           /* Hỗ trợ import module CommonJS dạng ES Module */
    "skipLibCheck": true,              /* Bỏ qua kiểm tra kiểu các file thư viện .d.ts */
    "forceConsistentCasingInFileNames": true /* Phân biệt chữ hoa/thường tên file */
  },
  "include": ["src/**/*"]
}
```

---

## 3. Hệ thống Kiểu dữ liệu Cơ bản (Basic Types)

### 3.1. Kiểu nguyên thủy (Primitive Types)
```typescript
let username: string = "Minh Nhat";
let age: number = 21;
let isIntern: boolean = true;
let emptyValue: null = null;
let notAssigned: undefined = undefined;
let bigNumber: bigint = 9007199254740991n;
let uniqueKey: symbol = Symbol("id");
```

### 3.2. Explicit Types vs Type Inference
```typescript
// Explicit (Gán kiểu tường minh)
let traineeScore: number = 9.5;

// Type Inference (TS tự suy luận là string)
let companyName = "Sun Asterisk"; 
// companyName = 100; // Lỗi: Type 'number' is not assignable to type 'string'.
```

### 3.3. Mảng (Arrays) & Readonly Arrays
```typescript
const techStack: string[] = ["Node.js", "TypeScript", "React"];
const primeNumbers: Array<number> = [2, 3, 5, 7, 11];

// Readonly Array: Không cho phép thêm/sửa/xóa phần tử
const validStatusCodes: readonly number[] = [200, 201, 400, 404];
// validStatusCodes.push(500); // Lỗi compile
```

### 3.4. Tuples
Tuple cố định số lượng và thứ tự kiểu dữ liệu của các phần tử:
```typescript
let httpResult: [number, string] = [200, "OK"];
let point3D: [number, number, number?] = [10, 20]; // Phần tử thứ 3 là tuỳ chọn

// Named Tuple
type UserCredentials = [username: string, passwordHash: string, roleId: number];
const userAuth: UserCredentials = ["admin", "hash123", 1];
```

### 3.5. Enums
```typescript
// String Enum (Dễ debug log)
enum UserRole {
  Admin = "ADMIN",
  Trainee = "TRAINEE",
  Trainer = "TRAINER"
}
let currentRole: UserRole = UserRole.Trainee;

// Numeric Enum (Tự tăng từ 0 hoặc giá trị chỉ định)
enum HttpStatus {
  Success = 200,
  Created = 201,
  BadRequest = 400
}

// const enum (Inline giá trị lúc compile, tối ưu kích thước file)
const enum Direction { Up = "UP", Down = "DOWN" }
```

---

## 4. Các kiểu dữ liệu đặc biệt

### 4.1. `any` vs `unknown`
- **`any`**: Tắt kiểm tra kiểu. Thao tác gọi hàm/truy cập thuộc tính không bị bắt lỗi compile nhưng dễ crash lúc runtime.
- **`unknown`**: Kiểu an toàn hơn `any`. Bắt buộc phải kiểm tra kiểu (Type Narrowing) trước khi thao tác.

```typescript
// any (Nguy hiểm)
let dangerVal: any = 123;
// dangerVal.toUpperCase(); // Crash lúc runtime!

// unknown (An toàn)
let safeVal: unknown = "TypeScript";
// safeVal.toUpperCase(); // Lỗi compile: Object is of type 'unknown'.
if (typeof safeVal === "string") {
  console.log(safeVal.toUpperCase()); // Hợp lệ & an toàn tuyệt đối
}
```

### 4.2. `void` vs `never`
- **`void`**: Hàm thực thi hoàn tất nhưng không trả về giá trị nào.
- **`never`**: Hàm không bao giờ kết thúc bình thường (luôn ném ngoại lệ hoặc vòng lặp vô tận).

```typescript
function logMessage(msg: string): void {
  console.log(`[LOG]: ${msg}`);
}

function throwCustomError(message: string): never {
  throw new Error(`Critical Error: ${message}`);
}
```

---

## 5. Type Aliases vs Interfaces

| Tiêu chí | `interface` | `type` |
| :--- | :--- | :--- |
| **Khai báo Object** | Hỗ trợ đầy đủ | Hỗ trợ đầy đủ |
| **Kế thừa / Mở rộng** | Dùng từ khóa `extends` | Dùng phép giao Intersection `&` |
| **Declaration Merging** | Có (tự gộp khi khai báo cùng tên) | Không (báo lỗi duplicate) |
| **Union / Tuple / Primitives** | Không hỗ trợ | Hỗ trợ rất mạnh mẽ |

```typescript
// Interface
interface UserInterface {
  readonly id: number;
  name: string;
  email?: string;
}
interface EmployeeInterface extends UserInterface {
  salary: number;
}

// Type Alias
type UserType = {
  readonly id: number;
  name: string;
  email?: string;
};
type EmployeeType = UserType & {
  salary: number;
};

// Declaration Merging (chỉ có ở interface)
interface Product { title: string; }
interface Product { price: number; }
const p: Product = { title: "Laptop", price: 1000 };
```

---

## 6. Functions & Function Signatures

### 6.1. Tham số & Kiểu trả về
```typescript
function calculateTotal(price: number, taxRate: number = 0.1): number {
  return price + price * taxRate;
}

const multiply: (a: number, b: number) => number = (a, b) => a * b;
```

### 6.2. Optional & Rest Parameters
```typescript
function greetUser(name: string, title?: string): string {
  return title ? `Hello, ${title} ${name}` : `Hello, ${name}`;
}

function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
```

### 6.3. Function Overloads (Đa năng hoá hàm)
```typescript
function formatInput(input: string): string;
function formatInput(input: number): string;
function formatInput(input: string | number): string {
  if (typeof input === "string") return input.trim();
  return input.toFixed(2);
}
```

---

## 7. Advanced Types: Union, Intersection & Literal Types

### 7.1. Union Types (`|`)
```typescript
type ID = string | number;
let orderId: ID = "ORD_001";
orderId = 1002;
```

### 7.2. Literal Types
```typescript
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type Status = "PENDING" | "RESOLVED" | "REJECTED";

function sendRequest(url: string, method: HttpMethod): void {
  console.log(`${method} -> ${url}`);
}
```

### 7.3. Intersection Types (`&`)
```typescript
type Timestamp = { createdAt: Date; updatedAt: Date };
type Post = { id: string; title: string; content: string };
type FullPost = Post & Timestamp;
```

---

## 8. Type Narrowing & Type Guards

### 8.1. `typeof` & `instanceof`
```typescript
function printValue(val: string | number | Date): void {
  if (typeof val === "string") {
    console.log("String:", val.toUpperCase());
  } else if (typeof val === "number") {
    console.log("Number:", val.toFixed(2));
  } else if (val instanceof Date) {
    console.log("Date:", val.toISOString());
  }
}
```

### 8.2. `in` Operator & Discriminated Unions
```typescript
interface Circle { kind: "circle"; radius: number; }
interface Square { kind: "square"; size: number; }
type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.size ** 2;
  }
}
```

### 8.3. Custom Type Guard (`val is Type`)
```typescript
interface Fish { swim: () => void; }
interface Bird { fly: () => void; }

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}
```

---

## 9. Type Assertions & Type Casting

### 9.1. Cú pháp `as Type` & Non-null Assertion (`!`)
```typescript
// Type assertion
const inputEl = document.getElementById("search-input") as HTMLInputElement;

// Non-null assertion (!)
function getLength(str: string | null): number {
  return str!.length;
}
```

### 9.2. `as const` (Const Assertions)
Chuyển object hoặc array thành bất biến (`readonly`) với các literal types:
```typescript
const CONFIG = {
  API_URL: "https://api.sun-asterisk.vn",
  TIMEOUT: 5000
} as const;
// CONFIG.TIMEOUT = 3000; // Lỗi: Cannot assign to read-only property
```

---

## 10. Lập trình Hướng đối tượng (OOP) trong TypeScript

### 10.1. Access Modifiers & Parameter Properties
- `public`: Truy cập tự do mọi nơi (mặc định).
- `protected`: Chỉ truy cập trong class và các class con.
- `private`: Chỉ truy cập nội bộ trong class đó.
- `readonly`: Thuộc tính chỉ gán 1 lần duy nhất trong constructor.

```typescript
class Account {
  constructor(
    public readonly id: number,
    public username: string,
    protected balance: number = 0,
    private pinCode: string = "0000"
  ) {}

  public verifyPin(input: string): boolean {
    return this.pinCode === input;
  }
}
```

### 10.2. Abstract Class & Inheritance
```typescript
abstract class BaseEmployee {
  constructor(public id: number, public name: string) {}
  
  public getIntro(): string {
    return `ID: ${this.id} - Name: ${this.name}`;
  }

  abstract calculateSalary(): number;
}

class FullTimeEmployee extends BaseEmployee {
  constructor(id: number, name: string, private baseRate: number) {
    super(id, name);
  }

  public calculateSalary(): number {
    return this.baseRate * 22;
  }
}
```

### 10.3. Implementing Multiple Interfaces
```typescript
interface Printable { print(): void; }
interface Archivable { archive(): void; }

class Report implements Printable, Archivable {
  public print(): void { console.log("Printing report..."); }
  public archive(): void { console.log("Archiving report..."); }
}
```

---

## 11. Generics Toàn Diện

### 11.1. Generic Functions & Constraints
```typescript
function wrapInArray<T>(item: T): T[] {
  return [item];
}

// Ràng buộc Generic bằng extends
interface HasId { id: number; }
function findById<T extends HasId>(list: T[], targetId: number): T | undefined {
  return list.find(item => item.id === targetId);
}
```

### 11.2. `keyof` kết hợp với Generics
```typescript
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const userObj = { name: "Nhat", age: 21 };
const userName = getProp(userObj, "name"); // Type: string
```

### 11.3. Generic Interfaces
```typescript
interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

type UserListResponse = ApiResponse<string[]>;
```

---

## 12. Utility Types Thông Dụng

```typescript
interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
```

- **`Partial<T>`**: Chuyển toàn bộ thuộc tính thành optional (`?`).
  ```typescript
  type UpdateTaskDto = Partial<Task>;
  ```
- **`Required<T>`**: Bắt buộc toàn bộ thuộc tính phải có giá trị.
  ```typescript
  type StrictTask = Required<Task>;
  ```
- **`Readonly<T>`**: Đóng băng đối tượng, không cho sửa thuộc tính.
  ```typescript
  type ReadonlyTask = Readonly<Task>;
  ```
- **`Pick<T, K>`**: Chỉ trích xuất các thuộc tính được chọn.
  ```typescript
  type TaskPreview = Pick<Task, "id" | "title">;
  ```
- **`Omit<T, K>`**: Bỏ các thuộc tính chỉ định, giữ lại phần còn lại.
  ```typescript
  type CreateTaskDto = Omit<Task, "id">;
  ```
- **`Record<K, T>`**: Tạo map key-value với key thuộc tập `K` và value thuộc `T`.
  ```typescript
  type TaskRoles = Record<"admin" | "member", string[]>;
  ```
- **`ReturnType<T>`**: Lấy kiểu giá trị trả về của một hàm.
  ```typescript
  function makeTask() { return { id: 1, name: "Task" }; }
  type TaskItem = ReturnType<typeof makeTask>;
  ```
- **`Exclude<T, U>`**: Loại bỏ khỏi union `T` các kiểu gán được cho `U`.
  ```typescript
  type Status = "pending" | "approved" | "rejected";
  type ActiveStatus = Exclude<Status, "rejected">; // "pending" | "approved"
  ```
- **`Extract<T, U>`**: Trích xuất từ union `T` các kiểu gán được cho `U`.
  ```typescript
  type Common = Extract<"a" | "b" | "c", "a" | "f">; // "a"
  ```
- **`NonNullable<T>`**: Loại bỏ `null` và `undefined` khỏi kiểu dữ liệu `T`.
  ```typescript
  type CleanValue = NonNullable<string | number | undefined | null>; // string | number
  ```
- **`Awaited<T>`**: Giải nén kiểu dữ liệu bên trong một `Promise`.
  ```typescript
  type AsyncResult = Awaited<Promise<string>>; // string
  ```

---

## 13. Structural Type System (Duck Typing)

TypeScript so khớp kiểu dựa trên **cấu trúc dữ liệu** thay vì tên danh xưng (Nominal Typing như Java/C#):
> *"Nếu một đối tượng đi như vịt, kêu như vịt thì đối tượng đó là con vịt."*

```typescript
interface Coordinate {
  x: number;
  y: number;
}

function printCoord(point: Coordinate): void {
  console.log(`x: ${point.x}, y: ${point.y}`);
}

// targetPoint có thêm thuộc tính z và name
const targetPoint = { x: 10, y: 20, z: 30, name: "Target" };

// Hoàn toàn hợp lệ vì targetPoint chứa đầy đủ cấu trúc x, y kiểu number
printCoord(targetPoint);
```

---

## 14. Modules & Type Imports

Khuyến nghị sử dụng `import type` khi chỉ import định nghĩa kiểu để tối ưu bundle và tránh circular dependencies:
```typescript
// Export
export interface UserData { id: number; username: string; }
export const DEFAULT_USER: UserData = { id: 0, username: "Guest" };

// Import
import type { UserData } from "./user.module";
import { DEFAULT_USER } from "./user.module";
```

---

## 15. Best Practices & Clean Code Guidelines

1. **Bật `"strict": true`**: Đảm bảo type safety tối đa cho toàn bộ dự án.
2. **Tránh xa `any`**: Sử dụng `unknown` hoặc Generics thay thế để kiểm soát luồng dữ liệu.
3. **Ưu tiên `interface` cho Object**: Chỉ dùng `type` cho Union, Tuple, Primitives.
4. **Tận dụng Type Narrowing**: Kiểm tra kiểu rõ ràng bằng `typeof`, `in`, `instanceof`.
5. **Quy chuẩn đặt tên (Naming Conventions)**:
   - `PascalCase`: Interface, Type, Enum, Class.
   - `camelCase`: Biến, hàm, phương thức, tham số.
   - `UPPER_CASE`: Hằng số cấu hình.
6. **Tái sử dụng bằng Utility Types**: Sử dụng `Partial`, `Pick`, `Omit` thay vì khai báo lặp lại cấu trúc.

---

## 16. Hướng dẫn Cài đặt & Chạy mã nguồn

### 16.1. Cấu trúc thư mục dự án
```text
typescript-basic/
├── dist/                          # Mã JS đã biên dịch (bỏ qua khi commit)
├── node_modules/                  # Thư viện phụ thuộc
├── src/                           # Mã nguồn TypeScript thực hành
│   ├── 01-basic-types.ts          # Kiểu cơ bản, Array, Tuple, Enum, Interface
│   ├── 02-functions-unions-guards.ts # Functions, Unions, Type Guards, Casting
│   ├── 03-oop-classes.ts          # OOP, Abstract Class, Modifiers, Inheritance
│   └── 04-generics-structural.ts  # Generics, Structural Typing, Utility Types
├── .gitignore                     # Cấu hình bỏ qua file trong Git
├── package.json                   # Quản lý dependencies & scripts
├── README.md                      # Tài liệu tổng hợp kiến thức toàn tập
└── tsconfig.json                  # Cấu hình biên dịch TypeScript
```

### 16.2. Các bước thực thi
```bash
# 1. Cài đặt thư viện
npm install

# 2. Biên dịch mã nguồn TS sang JS
npx tsc

# 3. Chạy từng file minh họa trong dist/
node dist/01-basic-types.js
node dist/02-functions-unions-guards.js
node dist/03-oop-classes.js
node dist/04-generics-structural.js
```

---
*Tài liệu được tổng hợp và duy trì bởi [Nhat2005p](https://github.com/Nhat2005p) - Thực tập sinh NodeJS tại Sun Asterisk.*
