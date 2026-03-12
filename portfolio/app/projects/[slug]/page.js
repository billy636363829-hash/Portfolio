import Header from '@/app/components/Header';
import ProjectDetailsClient from './ProjectDetailsClient';

export default function ProjectDetails({ params }) {

  const projectData = {
    'recruitment-web-app': {
      title: 'Recruitment Web App',
      description: 'A full-stack recruitment web application designed to streamline the hiring process. Built with modern technologies, this platform enables recruiters to manage candidates, schedule interviews, and collaborate with team members efficiently.',
      longDescription: 'This comprehensive recruitment platform features real-time collaboration, automated candidate screening, and advanced analytics. The application integrates with popular job boards and provides a seamless experience for both recruiters and candidates.',
      technologies: [
        { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: 'bg-gray-900 dark:bg-white' },
        { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'bg-green-600' },
        { name: 'Clerk', image: 'https://ph-files.imgix.net/297bc3d4-bd2e-4eaa-8fb6-a289cf61ea91.png?auto=format', color: 'bg-blue-600' },
        { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'bg-green-500' },
      ],
      gallery: [
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      github: 'https://github.com/yourusername/recruitment-web-app',
      live: 'https://yourusername.github.io/recruitment-web-app/',
    },
    'project-2': {
      title: 'Mobile Weather App',
      description: 'A beautiful and intuitive mobile weather application that provides real-time weather updates, forecasts, and severe weather alerts.',
      longDescription: 'This cross-platform mobile app delivers accurate weather information with a focus on user experience. Features include location-based forecasts, interactive weather maps, customizable alerts, and detailed meteorological data.',
      technologies: [
        { name: 'React Native', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'bg-blue-500' },
        { name: 'Firebase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: 'bg-yellow-500' },
        { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'bg-blue-600' },
      ],
      gallery: [
        'https://images.pexels.com/photos/1002739/pexels-photo-1002739.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      github: 'https://github.com/yourusername/project-2',
      live: 'https://yourusername.github.io/project-2/',
    },
    'project-3': {
      title: 'AI Analytics Dashboard',
      description: 'An advanced analytics platform powered by machine learning that provides predictive insights and data visualization for business intelligence.',
      longDescription: 'This sophisticated dashboard leverages machine learning algorithms to analyze complex datasets and generate actionable insights. Features include real-time data processing, customizable visualizations, automated reporting, and AI-powered recommendations.',
      technologies: [
        { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'bg-blue-500' },
        { name: 'TensorFlow', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: 'bg-orange-500' },
        { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'bg-blue-400' },
        { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: 'bg-blue-700' },
      ],
      gallery: [
        'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      github: 'https://github.com/yourusername/project-3',
      live: 'https://yourusername.github.io/project-3/',
    },
  };

  const project = projectData[params.slug] || {
    title: 'Project Not Found',
    description: 'No description available.',
    technologies: [],
    gallery: [],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <ProjectDetailsClient project={project} />
    </div>
  );
}

// For Next.js app directory routing
export async function generateStaticParams() {
  return [
    { slug: 'recruitment-web-app' },
    { slug: 'project-2' },
    { slug: 'project-3' },
  ];
}
