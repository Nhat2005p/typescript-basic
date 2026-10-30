# TypeScript Fundamental Practice

Repository tổng hợp kiến thức và bài tập thực hành TypeScript cơ bản dựa trên tài liệu:
- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [W3Schools TypeScript Tutorial](https://www.w3schools.com/typescript/typescript_intro.php)

## Nội dung đã tìm hiểu & thực hành
1. **Basic Types (`src/01-basic-types.ts`)**: Explicit & Inference Types, `any` vs `unknown`, Arrays, Tuples, Enums, Interfaces.
2. **Functions, Unions & Type Guards (`src/02-functions-unions-guards.ts`)**: Union Types, Literal Types, Type Casting, Type Narrowing (`typeof`, `in`).
3. **OOP in TypeScript (`src/03-oop-classes.ts`)**: Classes, Access Modifiers (`public`, `private`, `protected`, `readonly`), Inheritance, Abstract Classes.
4. **Generics & Structural Type System (`src/04-generics-structural.ts`)**: Duck Typing / Structural Typing, Generics `<T>`, Utility Types (`Partial`, `Pick`, `Omit`).

## Hướng dẫn cài đặt & chạy thử
```bash
# 1. Cài đặt dependencies
npm install

# 2. Biên dịch mã nguồn TypeScript sang JavaScript
npx tsc

# 3. Chạy các file đã biên dịch trong thư mục dist/
node dist/01-basic-types.js
node dist/02-functions-unions-guards.js
node dist/03-oop-classes.js
node dist/04-generics-structural.js
```
