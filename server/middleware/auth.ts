// @ts-ignore
import { verify } from "jsonwebtoken";

export default eventHandler((event) => {
  verify("test", "secret");
});
