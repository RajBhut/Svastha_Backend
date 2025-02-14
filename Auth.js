import { AuthenticationClient } from "auth0";

const auth0 = new AuthenticationClient({
  domain: process.env.AUTH_DOMAIN,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRATE,
});
export default auth0;