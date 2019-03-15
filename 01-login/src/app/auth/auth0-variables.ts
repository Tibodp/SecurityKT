interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: String;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'KJwgp9nijauTpsdYx67wVM0UcNqzKR9b',
  domain: 'karentibo.eu.auth0.com',
  callbackURL: 'http://localhost:3000/callback',
  // **Student code change starts**
  apiUrl: 'https://securitykt.azurewebsites.net/api'
  // **Student code change ends**

};
