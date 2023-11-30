import { H3Event } from "h3";
// @ts-ignore
import { verify } from "jsonwebtoken";
const TOKEN_TYPE = "Bearer";
const SECRET = "dummy";

const extractToken = (authHeaderValue: string) => {
  const [, token] = authHeaderValue.split(`${TOKEN_TYPE} `);
  return token;
};

export default eventHandler((event) => {
  const authHeaderValue = getRequestHeader(event, "authorization");
  if (authHeaderValue) {
    const extractedToken = extractToken(authHeaderValue);
    return verify(extractedToken, SECRET);
  }
});
