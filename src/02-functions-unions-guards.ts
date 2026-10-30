// 1. Union & Literal Types
type WindowStates = "open" | "closed" | "minimized";
type StringOrArray = string | string[];

function getLength(obj: StringOrArray): number {
  return obj.length;
}

// 2. Functions & Optional/Default Parameters
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

// 3. Type Guards (typeof, in)
type AdminUser = { name: string; privileges: string[] };
type NormalUser = { name: string; startDate: Date };
type UnknownUser = AdminUser | NormalUser;

function printUserInfo(user: UnknownUser): void {
  console.log("Name:", user.name);
  if ("privileges" in user) {
    console.log("Privileges:", user.privileges.join(", "));
  }
  if ("startDate" in user) {
    console.log("Start Date:", user.startDate.toISOString());
  }
}

// 4. Type Casting
const someValue: unknown = "This is a string";
const strLength: number = (someValue as string).length;

console.log(greet("Sun*"), "Length:", getLength(["TS", "JS"]), strLength);
