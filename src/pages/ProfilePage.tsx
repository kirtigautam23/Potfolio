import { FounderInfoSection } from '../components/FounderInfoSection'
import { PageIntro } from '../components/PageIntro'
import { ProfileSection } from '../components/ProfileSection'

export function ProfilePage() {
  return (
    <>
      <PageIntro
        eyebrow="Profile"
        title="The lady boss behind Masterpiece"
        description="Meet Ms. Kirti Gautam, the founder, trainer, and beauty mentor shaping the studio's professional standard."
      />
      <ProfileSection />
      <FounderInfoSection />
    </>
  )
}
