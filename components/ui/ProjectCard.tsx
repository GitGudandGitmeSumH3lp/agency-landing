import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative block overflow-hidden rounded-2xl bg-gray-100 cursor-pointer">
      {/* Image Container with Zoom Effect */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
      </div>

      {/* Content Area */}
      <div className="p-6 bg-white border border-gray-100 border-t-0 rounded-b-2xl relative">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full mb-2">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <ArrowUpRight size={20} />
          </div>
        </div>
        
        <p className="text-gray-600 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}