// @ts-ignore
import { verify } from "jsonwebtoken";
export const jwt = { verify };
export default defineEventHandler((event) => {
  return verify("test", "secret");
});
