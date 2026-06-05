import { Courses } from '../components/Courses'
import { EnrollmentForm } from '../components/EnrollmentForm'
import { PageIntro } from '../components/PageIntro'

export function CoursesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Academy"
        title="Learn beauty skills with studio practice"
        description="Choose a course, fill the enrollment form, and start learning through guided practical training."
      />
      <Courses />
      <EnrollmentForm />
    </>
  )
}
