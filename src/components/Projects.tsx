import { Calendar, ExternalLink, Github, Award, TrendingUp, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Based Smart Accident Detection System',
      date: 'Nov 2024',
      tech: ['YOLOv8', 'Computer Vision', 'Twilio API'],
      description: 'Real-time accident detection system to improve emergency responsiveness by analyzing CCTV traffic footage using deep learning.',
      achievements: [
        'Trained YOLOv5/YOLOv8 models on over 2,000 annotated video frames for high-precision crash detection',
        'Reduced false positives by 35% by applying temporal filtering and object motion tracking',
        'Integrated Twilio API to automate emergency alerts and reduce average dispatch time',
        'Achieved 89% precision in accident identification and reduced emergency response time by 40%'
      ],
      highlights: {
        precision: '89%',
        improvement: '40%',
        reduction: '35%'
      }
    },
    {
      title: 'Job Now – Web Platform for Job Search and Recruitment',
      date: 'Jun 2024',
      tech: ['MERN Stack', 'AWS EC2', 'MongoDB Atlas', 'JWT'],
      description: 'A web application that connects job seekers with recruiters to simplify job searching and hiring processes.',
      achievements: [
        'Built using the MERN stack (MongoDB, Express, React, Node.js) for both frontend and backend development',
        'Designed separate dashboards for job seekers to apply for jobs and for recruiters to post and manage applications',
        'Implemented secure user authentication using JWT and stored data in MongoDB Atlas',
        'Deployed the application on AWS EC2 using Docker for reliable cloud hosting'
      ],
      highlights: {
        stack: 'MERN',
        deployment: 'AWS',
        auth: 'JWT'
      }
    },
    {
      title: 'Traffic Signal Control System',
      date: 'Dec 2023',
      tech: ['Deep Q-Network (DQN)', 'SUMO', 'OpenAI Gym'],
      description: 'Adaptive traffic light control system using Deep Q-Network (DQN) to optimize vehicle flow at intersections in urban scenarios.',
      achievements: [
        'Simulated 4-way intersection traffic in SUMO with real-time feedback using TraCI and OpenAI Gym',
        'Implemented custom reward functions, experience replay, and epsilon decay to improve agent training over 10,000 episodes',
        'Compared results with fixed-timing and rule-based controllers to measure traffic efficiency',
        'Reduced average vehicle waiting time by 28% and queue length by 22% compared to traditional signal plans'
      ],
      highlights: {
        waitTime: '28%',
        queueLength: '22%',
        episodes: '10K+'
      }
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-center">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions combining AI, machine learning, and full-stack development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="card-project animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        <span>{project.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Project Highlights */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-xl p-6 border border-primary/10">
                      <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <Award className="text-primary" size={20} />
                        Project Highlights
                      </h4>
                      <div className="space-y-4">
                        {Object.entries(project.highlights).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <span className="font-bold text-primary text-lg">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center pt-8">
            <p className="text-lg text-muted-foreground mb-6">
              Interested in collaborating or learning more about my work?
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-hero"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;