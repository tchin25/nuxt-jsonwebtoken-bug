// @ts-ignore
import { verify } from "jsonwebtoken";

export default eventHandler((event) => {
  return verify("test", "secret");
});
