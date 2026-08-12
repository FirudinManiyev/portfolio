export interface ContactFormPayload {
  name: string
  email: string
  subject: string
  message: string
}

export type ContactField = keyof ContactFormPayload

export const CONTACT_LIMITS: Record<ContactField, { min: number; max: number }> = {
  name: { min: 2, max: 80 },
  email: { min: 5, max: 254 },
  subject: { min: 3, max: 120 },
  message: { min: 10, max: 2000 },
}

const emailPattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/iu
const removeUnsafeControlCharacters = (value: string) => Array.from(value)
  .filter((character) => {
    const code = character.charCodeAt(0)
    return code === 9 || code === 10 || code === 13 || (code >= 32 && code !== 127)
  })
  .join('')

const normalizeText = (value: string) => removeUnsafeControlCharacters(value)
  .replace(/\r\n?/gu, '\n')
  .trim()

export type ContactValidationResult =
  | { success: true; data: ContactFormPayload }
  | { success: false; message: string }

export function validateContactForm(payload: ContactFormPayload): ContactValidationResult {
  const data: ContactFormPayload = {
    name: normalizeText(payload.name),
    email: normalizeText(payload.email).toLowerCase(),
    subject: normalizeText(payload.subject),
    message: normalizeText(payload.message),
  }

  for (const field of Object.keys(CONTACT_LIMITS) as ContactField[]) {
    const { min, max } = CONTACT_LIMITS[field]
    if (data[field].length < min || data[field].length > max) {
      return {
        success: false,
        message: `${field === 'message' ? 'Mesaj' : field === 'subject' ? 'Mövzu' : field === 'email' ? 'Email' : 'Ad soyad'} ${min}–${max} simvol arasında olmalıdır.`,
      }
    }
  }

  if (!emailPattern.test(data.email) || /[\r\n]/u.test(data.email)) {
    return { success: false, message: 'Düzgün email ünvanı daxil edin.' }
  }

  if (/[\r\n]/u.test(data.name) || /[\r\n]/u.test(data.subject)) {
    return { success: false, message: 'Ad və mövzu bir sətirdə yazılmalıdır.' }
  }

  return { success: true, data }
}

const escapeHtml = (value: string) => value.replace(/[&<>"']/gu, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
})[character] ?? character)

export const escapeContactPayload = (payload: ContactFormPayload): ContactFormPayload => ({
  name: escapeHtml(payload.name),
  email: escapeHtml(payload.email),
  subject: escapeHtml(payload.subject),
  message: escapeHtml(payload.message),
})
