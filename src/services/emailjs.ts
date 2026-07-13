import emailjs from '@emailjs/browser';

export interface ContactFormPayload {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const getEmailJsConfig = () => {
	const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
	const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
	const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

	if (!serviceId || !templateId || !publicKey) {
		throw new Error('EmailJS environment variables are missing.');
	}

	return {
		serviceId,
		templateId,
		publicKey,
	};
};

let isInitialized = false;

const ensureEmailJsInitialized = () => {
	if (isInitialized) {
		return;
	}

	const { publicKey } = getEmailJsConfig();
	emailjs.init({ publicKey });
	isInitialized = true;
};

export async function sendContactEmail(payload: ContactFormPayload) {
	const { serviceId, templateId } = getEmailJsConfig();
	ensureEmailJsInitialized();

	return emailjs.send(
		serviceId,
		templateId,
		{
			name: payload.name,
			email: payload.email,
			subject: payload.subject,
			message: payload.message,
			from_name: payload.name,
			from_email: payload.email,
			reply_to: payload.email,
		},
	);
}
