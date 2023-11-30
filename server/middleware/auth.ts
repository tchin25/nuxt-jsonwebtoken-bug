import { JwtPayload, verify } from "jsonwebtoken";

const TOKEN_TYPE = "Bearer";
const SECRET = "dummy";

const extractToken = (authHeaderValue: string) => {
  const [, token] = authHeaderValue.split(`${TOKEN_TYPE} `);
  return token;
};

export default defineEventHandler(async (event) => {
  let name: string = "";
  const authHeaderValue = getRequestHeader(event, "authorization");
  if (authHeaderValue) {
    const extractedToken = extractToken(authHeaderValue);
    const jwtPayload = verify(extractedToken, SECRET);
    name = (jwtPayload as JwtPayload)["name"] || "";
    event.context.auth = { name };
  }
});
