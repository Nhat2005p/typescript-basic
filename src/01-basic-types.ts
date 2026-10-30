// 1. Explicit & Inference Types
let traineeName: string = "Minh Nhat";
let trainingDays = 2; // Type Inference: tự suy luận là number
let isCompleted: boolean = true;

// 2. Special Types: any vs unknown
let flexibleData: any = "Hello";
flexibleData = 100;

let safeInput: unknown = "TypeScript in 5 minutes";
if (typeof safeInput === "string") {
  console.log(safeInput.toUpperCase());
}

// 3. Arrays & Tuples
const skills: string[] = ["Git", "TypeScript", "NodeJS"];
const httpResponse: [number, string] = [200, "OK"];

// 4. Enums
enum Role {
  Admin = "ADMIN",
  Trainee = "TRAINEE",
  Trainer = "TRAINER"
}

// 5. Interfaces & Object Types
interface User {
  readonly id: number;
  username: string;
  role: Role;
  email?: string; // Optional property
}

const currentTrainee: User = {
  id: 1,
  username: traineeName,
  role: Role.Trainee
};

console.log("Basic Types loaded:", currentTrainee);

