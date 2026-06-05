export const normalizePhoneForWhatsApp = (phone: string) =>
  phone.replace(/[^\d]/g, '')

export const createWhatsAppUrl = (phone: string, message: string) => {
  const normalizedPhone = normalizePhoneForWhatsApp(phone)
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`
}

export const createProductInquiryMessage = (productName: string) =>
  [
    'Hello Masterpiece Beauty Make-up Studio & Academy,',
    `I want to inquire about ${productName}.`,
    'Please send me availability and details.',
  ].join('\n')

