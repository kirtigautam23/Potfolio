import type { FormEvent } from 'react'
import { useState } from 'react'
import { courses } from '../data/siteContent'
import type { EnrollmentPayload } from '../hooks/useEnrollmentForm'
import { useEnrollmentForm } from '../hooks/useEnrollmentForm'
import { SectionHeader } from './SectionHeader'

type EnrollmentStep = {
  id: string
  label: string
  title: string
  fields: Array<keyof EnrollmentPayload>
}

const enrollmentSteps: EnrollmentStep[] = [
  {
    id: 'information',
    label: 'Information',
    title: 'Personal information',
    fields: ['fullName', 'phone', 'email', 'permanentAddress'],
  },
  {
    id: 'background',
    label: 'Guardian',
    title: 'Background & guardian',
    fields: [
      'gender',
      'nationality',
      'currentProfession',
      'highestEducationLevel',
      'guardianName',
      'guardianContact',
    ],
  },
  {
    id: 'course',
    label: 'Course',
    title: 'Course & schedule',
    fields: ['courseId', 'dateOfAdmission', 'classShift', 'classStartDate', 'takenClassBefore'],
  },
  {
    id: 'payment',
    label: 'Payment',
    title: 'Payment & confirmation',
    fields: ['feePaymentMethod', 'advancedAmount', 'message', 'acceptedTerms'],
  },
]

export function EnrollmentForm() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const { payload, errors, isValid, submitted, setSubmitted, updateField, getSubmitUrl } =
    useEnrollmentForm()

  const selectedCourse = courses.find((course) => course.id === payload.courseId) ?? courses[0]
  const activeStep = enrollmentSteps[activeStepIndex]
  const isFirstStep = activeStepIndex === 0
  const isFinalStep = activeStepIndex === enrollmentSteps.length - 1

  const currentStepHasErrors = () =>
    activeStep.fields.some((field) => {
      if (
        (field === 'guardianName' || field === 'guardianContact') &&
        payload.highestEducationLevel !== 'below-bachelor'
      ) {
        return false
      }

      return Boolean(errors[field])
    })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)

    if (!isFinalStep) {
      if (!currentStepHasErrors()) {
        setActiveStepIndex((current) => Math.min(current + 1, enrollmentSteps.length - 1))
      }

      return
    }

    if (!isValid || currentStepHasErrors()) {
      return
    }

    window.location.href = getSubmitUrl(selectedCourse.title)
  }

  const goToStep = (index: number) => {
    if (index <= activeStepIndex) {
      setActiveStepIndex(index)
      return
    }

    setSubmitted(true)
    if (!currentStepHasErrors()) {
      setActiveStepIndex(index)
    }
  }

  const renderStepFields = () => {
    if (activeStep.id === 'information') {
      return (
        <>
          <label>
            Full name
            <input
              value={payload.fullName}
              onChange={(event) => updateField('fullName', event.target.value)}
              placeholder="Full name"
            />
            {submitted && errors.fullName ? (
              <span className="field-error">{errors.fullName}</span>
            ) : null}
          </label>

          <label>
            Phone number
            <input
              value={payload.phone}
              onChange={(event) => updateField('phone', event.target.value)}
              placeholder="+977..."
            />
            {submitted && errors.phone ? <span className="field-error">{errors.phone}</span> : null}
          </label>

          <label>
            Email address
            <input
              type="email"
              value={payload.email}
              onChange={(event) => updateField('email', event.target.value)}
              placeholder="name@example.com"
            />
            {submitted && errors.email ? <span className="field-error">{errors.email}</span> : null}
          </label>

          <label>
            Permanent address
            <input
              value={payload.permanentAddress}
              onChange={(event) => updateField('permanentAddress', event.target.value)}
              placeholder="Permanent address"
            />
            {submitted && errors.permanentAddress ? (
              <span className="field-error">{errors.permanentAddress}</span>
            ) : null}
          </label>
        </>
      )
    }

    if (activeStep.id === 'background') {
      const needsGuardian = payload.highestEducationLevel === 'below-bachelor'

      return (
        <>
          <label>
            Gender
            <select value={payload.gender} onChange={(event) => updateField('gender', event.target.value)}>
              <option value="">Select gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </label>

          <label>
            Nationality
            <input
              value={payload.nationality}
              onChange={(event) => updateField('nationality', event.target.value)}
              placeholder="Nationality"
            />
          </label>

          <label>
            Current profession
            <input
              value={payload.currentProfession}
              onChange={(event) => updateField('currentProfession', event.target.value)}
              placeholder="Student, job, business..."
            />
          </label>

          <label>
            Highest education level
            <select
              value={payload.highestEducationLevel}
              onChange={(event) => updateField('highestEducationLevel', event.target.value)}
            >
              <option value="">Select education level</option>
              <option value="below-bachelor">Below Bachelor</option>
              <option value="bachelor">Bachelor</option>
              <option value="above-bachelor">Above Bachelor</option>
            </select>
            {submitted && errors.highestEducationLevel ? (
              <span className="field-error">{errors.highestEducationLevel}</span>
            ) : null}
          </label>

          <div className="guardian-rule wide-field">
            Guardian information is mandatory only when the education level is below Bachelor.
          </div>

          {needsGuardian ? (
            <>
              <label>
                Guardian name
                <input
                  value={payload.guardianName}
                  onChange={(event) => updateField('guardianName', event.target.value)}
                  placeholder="Guardian name"
                />
                {submitted && errors.guardianName ? (
                  <span className="field-error">{errors.guardianName}</span>
                ) : null}
              </label>

              <label>
                Guardian contact number
                <input
                  value={payload.guardianContact}
                  onChange={(event) => updateField('guardianContact', event.target.value)}
                  placeholder="+977..."
                />
                {submitted && errors.guardianContact ? (
                  <span className="field-error">{errors.guardianContact}</span>
                ) : null}
              </label>
            </>
          ) : null}
        </>
      )
    }

    if (activeStep.id === 'course') {
      return (
        <>
          <label>
            Course title
            <select
              value={payload.courseId}
              onChange={(event) => updateField('courseId', event.target.value)}
            >
              {courses.map((course) => (
                <option value={course.id} key={course.id}>
                  {course.title}
                </option>
              ))}
              <option value="general-inquiry">General Course Inquiry</option>
            </select>
            {submitted && errors.courseId ? (
              <span className="field-error">{errors.courseId}</span>
            ) : null}
          </label>

          <label>
            Date of admission
            <input
              type="date"
              value={payload.dateOfAdmission}
              onChange={(event) => updateField('dateOfAdmission', event.target.value)}
            />
          </label>

          <label>
            Class shift preference
            <select
              value={payload.classShift}
              onChange={(event) => updateField('classShift', event.target.value)}
            >
              <option value="">Select shift</option>
              <option value="Morning">Morning</option>
              <option value="Day">Day</option>
              <option value="Evening">Evening</option>
            </select>
            {submitted && errors.classShift ? (
              <span className="field-error">{errors.classShift}</span>
            ) : null}
          </label>

          <label>
            Class start date
            <input
              type="date"
              value={payload.classStartDate}
              onChange={(event) => updateField('classStartDate', event.target.value)}
            />
          </label>

          <label>
            Taken this class before?
            <select
              value={payload.takenClassBefore}
              onChange={(event) => updateField('takenClassBefore', event.target.value)}
            >
              <option value="">Select answer</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {submitted && errors.takenClassBefore ? (
              <span className="field-error">{errors.takenClassBefore}</span>
            ) : null}
          </label>
        </>
      )
    }

    return (
      <>
        <label>
          Fee payment method
          <input
            value={payload.feePaymentMethod}
            onChange={(event) => updateField('feePaymentMethod', event.target.value)}
            placeholder="Cash, QR, bank transfer..."
          />
        </label>

        <label>
          Advanced amount
          <input
            value={payload.advancedAmount}
            onChange={(event) => updateField('advancedAmount', event.target.value)}
            placeholder="NPR"
          />
        </label>

        <label className="wide-field">
          Message
          <textarea
            value={payload.message}
            onChange={(event) => updateField('message', event.target.value)}
            placeholder="Tell us what you want to learn or ask."
            rows={3}
          />
        </label>

        <label className="terms-field wide-field">
          <input
            type="checkbox"
            checked={payload.acceptedTerms}
            onChange={(event) => updateField('acceptedTerms', event.target.checked)}
          />
          <span>
            I confirm the information is true, understand academy conduct and privacy rules, and
            accept that course materials are for educational use only.
          </span>
          {submitted && errors.acceptedTerms ? (
            <span className="field-error">{errors.acceptedTerms}</span>
          ) : null}
        </label>
      </>
    )
  }

  return (
    <section className="section enrollment-section" id="enroll">
      <div className="enrollment-copy">
        <SectionHeader
          eyebrow="Enroll"
          title="Academy enrollment application"
          description="Structured like the studio form: personal details, academic background, course schedule, payment note, and terms. It sends to WhatsApp now and can connect to email/backend later."
        />
        <div className="enrollment-note">
          <strong>{selectedCourse.title}</strong>
          <span>{selectedCourse.duration}</span>
          <p>{selectedCourse.description}</p>
        </div>
      </div>

      <form className="enrollment-form" onSubmit={handleSubmit} noValidate>
        <div className="form-stepper wide-field" aria-label="Enrollment steps">
          {enrollmentSteps.map((step, index) => (
            <button
              className={index === activeStepIndex ? 'active' : undefined}
              key={step.id}
              type="button"
              onClick={() => goToStep(index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {step.label}
            </button>
          ))}
        </div>

        <div className="form-band wide-field">
          <span>{String(activeStepIndex + 1).padStart(2, '0')}</span>
          <strong>{activeStep.title}</strong>
        </div>

        {renderStepFields()}

        <div className="form-actions wide-field">
          <button
            className="button button-ghost"
            disabled={isFirstStep}
            type="button"
            onClick={() => setActiveStepIndex((current) => Math.max(current - 1, 0))}
          >
            Back
          </button>
          <button className="button button-primary" type="submit">
            {isFinalStep ? 'Send Application Details' : 'Next Step'}
          </button>
        </div>
      </form>
    </section>
  )
}
