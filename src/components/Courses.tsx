import { courses } from '../data/siteContent'
import { SectionHeader } from './SectionHeader'

export function Courses() {
  return (
    <section className="section courses-section">
      <SectionHeader
        eyebrow="Academy"
        title="Courses designed for real salon confidence"
        description="Choose a focused short class or a complete career pathway. Every course is practical, guided, and built around studio-ready skill."
      />

      <div className="course-grid">
        {courses.map((course) => (
          <article className="course-card" key={course.id}>
            <div className="course-content">
              <div className="course-topline">
                <span className="course-meta">{course.duration}</span>
                <span>{course.level}</span>
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="chip-row">
                {course.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
              <a className="course-link" href="#enroll">
                Choose this course
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
