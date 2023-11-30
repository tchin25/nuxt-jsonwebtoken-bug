// @ts-ignore
import { verify } from "jsonwebtoken";

export default defineEventHandler((event) => {
  return verify("test", "secret");
});
