import PageHeader from "@/components/layout/PageHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { getAllProjects } from "@/lib/data";

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <>
      <PageHeader
        title="Our Selected Work"
        subtitle="Explore a collection of digital experiences we've crafted for ambitious brands across the globe."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Tabs (Visual Only for now) */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {["All Work", "Web Design", "Development", "Branding"].map((filter, idx) => (
              <button
                key={filter}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  idx === 0
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty State (Optional, good practice) */}
          {projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">No projects found.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Have a project in mind?
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Let's collaborate to build something impactful. Our team is ready to bring your vision to life.
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-medium transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </>
  );
}