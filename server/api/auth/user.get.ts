import { jwtVerify, generateKeyPair } from "jose";

export default defineEventHandler(async (event) => {
  const key = await generateKeyPair("EdDSA");
  jwtVerify("test", key.privateKey);
});
