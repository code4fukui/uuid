import { uuid } from "./uuid.js";

console.log("crypto.randomUUID:", uuid());
console.log("Math.random      :", uuid(false));
