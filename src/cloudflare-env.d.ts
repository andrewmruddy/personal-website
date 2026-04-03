interface Env {
	MAILGUN_API_KEY: string;
	MAILGUN_DOMAIN: string;
	MAILGUN_TO_EMAIL: string;
	MAILGUN_REGION?: "us" | "eu";
}
