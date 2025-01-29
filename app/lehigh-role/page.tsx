import Layout from "../components/layout";
import Hero from "../components/hero";
import ContentSection from "../components/content-section";

export default function LehighRole() {
  const steps = [
    {
      title: "Expand Gender-Inclusive Policies",
      description:
        "Ensure that all campus facilities, programs, and resources are accessible and welcoming to people of all genders.",
    },
    {
      title: "Promote Leadership Opportunities",
      description:
        "Create mentorship programs and scholarships specifically designed to support underrepresented genders in STEM, business, and other fields.",
    },
    {
      title: "Foster Open Dialogue",
      description:
        "Host workshops, panels, and discussions on gender equity to educate the campus community and encourage meaningful conversations.",
    },
    {
      title: "Support Research on Gender Equity",
      description:
        "Invest in research initiatives that explore the challenges and solutions related to gender equity in academia and beyond.",
    },
  ];

  return (
    <Layout>
      <Hero 
        title="Lehigh University's Role" 
        subtitle="Leading the Way in Advancing Gender Equity" 
      />
      
      <ContentSection title="Steps Towards Gender Equity">
        <p className="mb-6">
          Lehigh University has the potential to be a leader in advancing gender equity. Here are a few steps I'd like
          to see Lehigh take:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden"
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

      <ContentSection title="Setting an Example">
        <p>
          By taking these steps, Lehigh can set an example for other institutions and create a more inclusive
          environment for all students.
        </p>
      </ContentSection>
    </Layout>
  );
}