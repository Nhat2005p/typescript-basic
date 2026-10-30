// 1. Structural Type System (Duck Typing)
interface Point2D {
  x: number;
  y: number;
}

function logPoint(p: Point2D): void {
  console.log(`Coordinates: ${p.x}, ${p.y}`);
}

const point3D = { x: 12, y: 26, z: 89 };
logPoint(point3D); // Hợp lệ vì point3D có đủ cấu trúc x, y của Point2D

// 2. Generics (<T>)
function wrapInArray<T>(input: T): T[] {
  return [input];
}

const stringArray = wrapInArray<string>("TypeScript");
const numberArray = wrapInArray<number>(2026);

// 3. Utility Types (Partial, Pick, Omit)
interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

type TaskUpdateInput = Partial<Task>;
type TaskPreview = Pick<Task, "id" | "title">;
type TaskWithoutDesc = Omit<Task, "description">;

const preview: TaskPreview = { id: 1, title: "Complete TS Repo" };
console.log("Generics & Utility:", stringArray, numberArray, preview);

