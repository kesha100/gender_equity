import Layout from "../components/layout"
import Hero from "../components/hero"
import ContentSection from "../components/content-section"

export default function Meaning() {
  return (
    <Layout>
      <Hero title="What Gender Equity Means to Me" subtitle="Personal Reflections on Fairness and Equality" />
      <ContentSection title="Breaking Down Barriers">
        <div className="relative">
          <p className="mb-4">
            To me, gender equity is about dismantling barriers and creating systems that empower everyone to succeed.
            It's about recognizing that gender-based discrimination and stereotypes still exist and actively working to
            challenge them.
          </p>
          <p>
            Gender equity means ensuring that women, men, and non-binary individuals have equal access to education,
            leadership roles, and opportunities to express themselves fully. It's about creating a culture where
            everyone feels valued and heard, regardless of their gender identity.
          </p>
        </div>
      </ContentSection>
      <ContentSection title="My Personal Connection">
        <div className="relative">
          <p className="mb-4">
            Gender equity is deeply personal to me because I've witnessed how gender-based stereotypes can limit
            opportunities and self-expression. Growing up, I saw how girls were often discouraged from pursuing STEM
            fields, while boys were pressured to hide their emotions.
          </p>
          <p>
            These experiences motivated me to challenge gender norms and advocate for a more inclusive world. I believe
            that education and awareness are key to breaking down these barriers, and I'm excited to contribute to this
            effort at Lehigh University.
          </p>
        </div>
      </ContentSection>
    </Layout>
  )
}

