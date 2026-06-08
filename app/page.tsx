export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-5xl font-bold mb-4">KODURU ESWAR REDDY</h1>

        <h2 className="text-2xl text-gray-400 mb-6">
          AI/ML Student | Aspiring GenAI Engineer
        </h2>

        <p className="max-w-2xl text-gray-300">
          Computer Science (AI/ML) student passionate about Artificial
          Intelligence, Machine Learning, Cloud Computing, and building
          real-world software solutions.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#projects" className="bg-white text-black px-6 py-3 rounded-lg">
            View Projects
          </a>

          <a href="/resume.pdf" className="border border-white px-6 py-3 rounded-lg">
            Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="text-gray-300">
          B.Tech Computer Science & Engineering (AI/ML) student at SR
          University with a CGPA of 9.607. Interested in Generative AI,
          Machine Learning, Software Development, and Cloud Computing.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Python",
            "C",
            "Machine Learning",
            "Cloud Computing",
            "Node.js",
            "MongoDB",
            "OpenCV",
            "AWS",
            "Azure",
            "DBMS",
            "Operating Systems",
            "DSA",
          ].map((skill) => (
            <div
              key={skill}
              className="border border-gray-700 p-4 rounded-lg text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">AI Attendance System</h3>
            <p className="text-gray-300">
              Attendance system using Face Recognition and Voice
              Authentication with OpenCV and Speech Recognition.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">Blogify</h3>
            <p className="text-gray-300">
              Full-stack blogging platform built with HTML, CSS,
              Node.js and MongoDB.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>

        <ul className="space-y-3 text-gray-300">
          <li>AWS Academy Graduate – Cloud Foundations</li>
          <li>AWS Academy Graduate – Cloud Development</li>
          <li>AWS Academy Graduate – Cloud Security Builder</li>
          <li>AWS Academy Graduate – Cloud Web Application Builder</li>
          <li>Microsoft Azure AI Fundamentals</li>
          <li>CCNA: Introduction to Networks</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>

        <div className="space-y-3 text-gray-300">
          <p>Email: eswarreddykoduru@gmail.com</p>
          <p>Location: Nellore, Andhra Pradesh</p>
          <p>LinkedIn: Add your profile link</p>
          <p>GitHub: Add your GitHub link</p>
        </div>
      </section>
    </main>
  );
}