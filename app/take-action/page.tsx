import Layout from "../components/layout"
import Hero from "../components/hero"
import ContentSection from "../components/content-section"

export default function TakeAction() {
  const actionSteps = [
    {
      title: "Educate Yourself",
      description: "Learn about the challenges faced by different genders and the history of gender equity movements.",
    },
    {
      title: "Speak Up",
      description: "Challenge stereotypes and discriminatory behavior when you see it.",
    },
    {
      title: "Support Inclusive Initiatives",
      description: "Volunteer with or donate to organizations that promote gender equity.",
    },
    {
      title: "Advocate for Change",
      description:
        "Encourage your school, workplace, or community to adopt policies that promote fairness and inclusion.",
    },
  ]

  return (
    <Layout>
      <Hero title="Take Action" subtitle="How You Can Contribute to Gender Equity" />
      <ContentSection title="Ways to Make a Difference">
        <p className="mb-6">
          Advancing gender equity is a collective effort. Here are a few ways you can make a difference:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {actionSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`absolute top-0 left-0 w-1 h-full ${
                  index % 2 === 0 ? "bg-purple-500" : "bg-pink-500"
                }`}
              />
              <h3 className="text-xl font-bold mb-2 text-purple-700">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>
      <ContentSection title="Join the Movement">
        <p className="mb-4">Together, we can create a world where everyone has the opportunity to thrive.</p>
        <p className="mb-6">
          Gender equity is not just a goal—it's a journey. By working together, we can create a future where everyone is
          treated with dignity and respect. Let's start the conversation today and take meaningful steps toward a more
          equitable world.
        </p>
        <button
          className="bg-purple-700 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg 
                     transition-all duration-300 hover:bg-purple-600 hover:scale-105 active:scale-95"
        >
          Get Involved Now
        </button>
      </ContentSection>
    </Layout>
  )
}