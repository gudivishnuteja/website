import { Code, Database, Brain, Cloud, GitBranch, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Python', 'JavaScript', 'SQL'],
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Frameworks & Tools',
      icon: Database,
      skills: ['ReactJS', 'NodeJS', 'Express', 'MongoDB', 'Docker', 'AWS EC2'],
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'AI/ML',
      icon: Brain,
      skills: ['PyTorch', 'TensorFlow', 'Keras', 'OpenCV'],
      color: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'Simulation',
      icon: Smartphone,
      skills: ['SUMO', 'OpenAI Gym'],
      color: 'bg-orange-50 text-orange-600',
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS EC2', 'Docker', 'Linux'],
      color: 'bg-cyan-50 text-cyan-600',
    },
    {
      title: 'Development Tools',
      icon: GitBranch,
      skills: ['Git', 'Twilio API'],
      color: 'bg-red-50 text-red-600',
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-center">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building AI-powered applications and scalable software solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className="card-elevated p-6 space-y-4 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200"
                      >
                        <span className="font-medium">{skill}</span>
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills */}
          <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-semibold text-center mb-6">Core Competencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold">Machine Learning</h4>
                <p className="text-sm text-muted-foreground">Deep Learning & Computer Vision</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Code className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold">Full-Stack Development</h4>
                <p className="text-sm text-muted-foreground">MERN Stack & Modern Web Tech</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Database className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold">Data Engineering</h4>
                <p className="text-sm text-muted-foreground">Database Design & Management</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Cloud className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold">Cloud Computing</h4>
                <p className="text-sm text-muted-foreground">AWS & Container Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;