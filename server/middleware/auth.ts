// @ts-ignore
import { jwt } from "../api/auth/user.get";

export default defineEventHandler((event) => {
  jwt.verify("test", "secret");
});
