import emailjs from '@emailjs/browser';
import {
	escapeContactPayload,
	validateContactForm,
} from '../utils/contactValidation';
import type { ContactFormPayload } from '../utils/contactValidation';

export type { ContactFormPayload } from '../utils/contactValidation';

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
	const validation = validateContactForm(payload);

	if (!validation.success) {
		throw new Error(validation.message);
	}

	const safePayload = escapeContactPayload(validation.data);

	return emailjs.send(
		serviceId,
		templateId,
		{
			name: safePayload.name,
			email: validation.data.email,
			subject: safePayload.subject,
			message: safePayload.message,
			from_name: safePayload.name,
			from_email: validation.data.email,
			reply_to: validation.data.email,
		},
	);
}
