import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

// Dummy data for the projects
const projects = [
  {
    title: "The Color Purple",
    url: "https://abadname06.github.io/The_Color_Purple_by_Alice_Walker/",
    description: "Final project exploring Alice Walker's masterpiece.",
    members: [
      "Student Name 1",
      "Student Name 2",
      "Student Name 3",
      "Student Name 4",
    ],
    color: "bg-purple-600",
  },
  {
    title: "GB2 (Don Quixote)",
    url: "https://switch-ka.github.io/GB2/",
    description: "Interactive exploration of Don Quixote.",
    members: [
      "Student Name 1",
      "Student Name 2",
      "Student Name 3",
      "Student Name 4",
    ],
    color: "bg-blue-600",
  },
  {
    title: "Great Books Project",
    url: "https://great-books-project.vercel.app/",
    description: "A comprehensive guide to Great Books.",
    members: [
      "Student Name 1",
      "Student Name 2",
      "Student Name 3",
      "Student Name 4",
    ],
    color: "bg-emerald-600",
  },
  {
    title: "Great Books (Jaor13)",
    url: "https://great-books.jaor13.app/",
    description: "Showcase of literary masterpieces.",
    members: [
      "Student Name 1",
      "Student Name 2",
      "Student Name 3",
      "Student Name 4",
    ],
    color: "bg-indigo-600",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
            BS Information Technology 4C
          </h1>
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            GEC 21 Great Books
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Final Projects Compilation
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden bg-white dark:bg-zinc-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-zinc-700"
            >
              <div
                className={`h-32 ${project.color} flex items-center justify-center`}
              >
                <span className="text-white text-4xl font-bold opacity-50">
                  {project.title.substring(0, 2).toUpperCase()}
                </span>
              </div>

              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Team Members
                    </h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {project.members.map((member, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-700 dark:text-gray-300 flex items-center"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></span>
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full inline-flex justify-center items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-zinc-800 transition-colors"
                >
                  Visit Project
                  <ArrowTopRightOnSquareIcon
                    className="ml-2 -mr-1 h-4 w-4"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-20 border-t border-gray-200 dark:border-zinc-700 pt-8 text-center">
          <p className="text-base text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} BSIT 4C - GEC 21 Great Books. All
            rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
