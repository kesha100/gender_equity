import Layout from "../components/layout"
import Hero from "../components/hero"
import ContentSection from "../components/content-section"

export default function Vision() {
  const visionPoints = [
    {
      title: "Equal Opportunities",
      description: "A world where every person has equal access to education, career advancement, and leadership positions regardless of their gender.",
      color: "bg-purple-500"
    },
    {
      title: "Fair Compensation",
      description: "Elimination of gender pay gaps and ensuring equal compensation for equal work across all industries and roles.",
      color: "bg-pink-500"
    },
    {
      title: "Inclusive Culture",
      description: "Creating environments where all gender identities are respected, valued, and empowered to contribute fully.",
      color: "bg-indigo-500"
    }
  ]

  return (
    <Layout>
      <Hero 
        title="My Vision for Gender Equity" 
        subtitle="Building a More Equitable Tomorrow" 
      />
      
      <ContentSection title="A World of Equal Opportunity">
        <p className="mb-4">
          My vision for gender equity extends beyond simple equality—it's about creating a world where everyone has the 
          opportunity to reach their full potential, unrestricted by gender-based barriers or biases.
        </p>
        <p>
          This vision encompasses not just workplace equality, but transformation across all aspects of society: from 
          education and healthcare to leadership and personal safety.
        </p>
      </ContentSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {visionPoints.map((point, index) => (
          <div 
            key={point.title} 
            className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-full h-1 ${point.color}`} />
            <h3 className="text-xl font-bold mb-3 text-purple-700">{point.title}</h3>
            <p className="text-gray-700">{point.description}</p>
          </div>
        ))}
      </div>

      <ContentSection title="Taking Action">
        <div className="mt-12">
          <p className="mb-4">
            Achieving this vision requires commitment and action from individuals, institutions, and communities. 
            It means challenging existing norms, advocating for policy changes, and creating inclusive spaces 
            where everyone can thrive.
          </p>
          <p>
            Through education, advocacy, and empowerment, we can work together to create lasting change and 
            build a more equitable future for all genders.
          </p>
        </div>
      </ContentSection>
    </Layout>
  )
}