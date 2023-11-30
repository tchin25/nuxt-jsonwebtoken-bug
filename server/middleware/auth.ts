// @ts-ignore
import jwt from "jsonwebtoken";

const TOKEN_TYPE = "Bearer";
const SECRET = "dummy";

const extractToken = (authHeaderValue: string) => {
  const [, token] = authHeaderValue.split(`${TOKEN_TYPE} `);
  return token;
};

export default defineEventHandler(async (event) => {
  const authHeaderValue = getRequestHeader(event, "authorization");
  if (authHeaderValue) {
    const extractedToken = extractToken(authHeaderValue);
    jwt.verify(extractedToken, SECRET);
  }
});
