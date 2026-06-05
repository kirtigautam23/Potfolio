import { useMemo, useState } from 'react'
import { brand } from '../data/siteContent'
import { createWhatsAppUrl } from '../utils/links'

export type EnrollmentPayload = {
  fullName: string
  gender: string
  nationality: string
  guardianName: string
  guardianContact: string
  email: string
  permanentAddress: string
  currentProfession: string
  highestEducationLevel: string
  phone: string
  courseId: string
  dateOfAdmission: string
  classShift: string
  classStartDate: string
  takenClassBefore: string
  feePaymentMethod: string
  advancedAmount: string
  message: string
  acceptedTerms: boolean
}

const initialPayload: EnrollmentPayload = {
  fullName: '',
  gender: '',
  nationality: 'Nepali',
  guardianName: '',
  guardianContact: '',
  email: '',
  permanentAddress: '',
  currentProfession: '',
  highestEducationLevel: '',
  phone: '',
  courseId: 'basic-beautician',
  dateOfAdmission: '',
  classShift: '',
  classStartDate: '',
  takenClassBefore: '',
  feePaymentMethod: '',
  advancedAmount: '',
  message: '',
  acceptedTerms: false,
}

export const useEnrollmentForm = () => {
  const [payload, setPayload] = useState<EnrollmentPayload>(initialPayload)
  const [submitted, setSubmitted] = useState(false)

  const errors = useMemo(() => {
    const nextErrors: Partial<Record<keyof EnrollmentPayload, string>> = {}

    if (!payload.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.'
    }

    if (!/^\+?\d[\d\s-]{6,}$/.test(payload.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.'
    }

    if (!payload.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!payload.permanentAddress.trim()) {
      nextErrors.permanentAddress = 'Please enter your permanent address.'
    }

    if (!payload.highestEducationLevel) {
      nextErrors.highestEducationLevel = 'Please choose your education level.'
    }

    if (payload.highestEducationLevel === 'below-bachelor') {
      if (!payload.guardianName.trim()) {
        nextErrors.guardianName = 'Guardian name is required below Bachelor level.'
      }

      if (!/^\+?\d[\d\s-]{6,}$/.test(payload.guardianContact.trim())) {
        nextErrors.guardianContact = 'Guardian contact is required below Bachelor level.'
      }
    }

    if (!payload.courseId) {
      nextErrors.courseId = 'Please choose a course.'
    }

    if (!payload.classShift) {
      nextErrors.classShift = 'Please choose a class shift.'
    }

    if (!payload.takenClassBefore) {
      nextErrors.takenClassBefore = 'Please choose yes or no.'
    }

    if (!payload.acceptedTerms) {
      nextErrors.acceptedTerms = 'Please accept the enrollment terms.'
    }

    return nextErrors
  }, [payload])

  const isValid = Object.keys(errors).length === 0

  const updateField = <Field extends keyof EnrollmentPayload>(
    field: Field,
    value: EnrollmentPayload[Field],
  ) => {
    setPayload((current) => ({ ...current, [field]: value }))
  }

  const buildMessage = (courseName: string) =>
    [
      'Hello Masterpiece Beauty Make-up Studio & Academy,',
      'I want to submit my enrollment application.',
      '',
      `Full name: ${payload.fullName}`,
      `Phone: ${payload.phone}`,
      `Gender: ${payload.gender || 'Not provided'}`,
      `Nationality: ${payload.nationality || 'Not provided'}`,
      `Guardian name: ${payload.guardianName || 'Not provided'}`,
      `Guardian contact: ${payload.guardianContact || 'Not provided'}`,
      `Email: ${payload.email}`,
      `Permanent address: ${payload.permanentAddress}`,
      `Current profession: ${payload.currentProfession || 'Not provided'}`,
      `Highest education level: ${payload.highestEducationLevel || 'Not provided'}`,
      `Course: ${courseName}`,
      `Date of admission: ${payload.dateOfAdmission || 'Please confirm'}`,
      `Class shift: ${payload.classShift || 'Please suggest available batches'}`,
      `Class start date: ${payload.classStartDate || 'Please confirm'}`,
      `Taken this class before: ${payload.takenClassBefore || 'Not provided'}`,
      `Fee payment method: ${payload.feePaymentMethod || 'Not provided'}`,
      `Advanced amount: ${payload.advancedAmount || 'Not provided'}`,
      `Message: ${payload.message || 'Please send course details.'}`,
      'I accept the academy enrollment terms and conditions.',
    ].join('\n')

  const getSubmitUrl = (courseName: string) =>
    createWhatsAppUrl(brand.phone, buildMessage(courseName))

  return {
    payload,
    errors,
    isValid,
    submitted,
    setSubmitted,
    updateField,
    getSubmitUrl,
  }
}
