import Layout from "./components/layout"
import Hero from "./components/hero"
import ContentSection from "./components/content-section"

export default function Home() {
  return (
    <Layout>
      <Hero title="Exploring Gender Equity" subtitle="A Vision for a Fairer Future" />
      <ContentSection title="Welcome to the Conversation on Gender Equity">
        <p className="mb-4">
          Gender equity is more than a buzzword—it's a commitment to fairness, opportunity, and respect for all,
          regardless of gender. At its core, gender equity means creating a world where everyone has access to the same
          resources, opportunities, and support to thrive.
        </p>
        <p>
          This website is a space to explore what gender equity means to me, my vision for a gender-equitable world, and
          how institutions like Lehigh University can lead the way in advancing this critical cause.
        </p>
      </ContentSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {["Educate", "Advocate", "Empower"].map((item, index) => (
          <div key={item} className="bg-white p-6 rounded-lg shadow-lg text-center relative overflow-hidden">
            <div
              className={`absolute top-0 left-0 w-full h-1 ${index === 0 ? "bg-purple-500" : index === 1 ? "bg-pink-500" : "bg-indigo-500"}`}
            />
            <h3 className="text-2xl font-bold mb-4 text-purple-700">{item}</h3>
            <p>Join us in our mission to {item.toLowerCase()} for gender equity.</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

