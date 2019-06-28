import auth0 from "auth0-js";

export default class Auth {
	constructor(history) {
		this.history = history;
		this.auth0 = new auth0.WebAuth({
			domain: REACT_APP_AUTH0_DOMAIN,
			clientID: REACT_APP_AUTH0_CLIENTID,
			redirectUri: REACT_APP_AUTH0_CALLBACK_URL,
			responseType: "token id_token",
			scope: "openid profile email",
		});
	}
}
