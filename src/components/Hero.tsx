import { useState } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-muted/30 to-background"
    >
      <div className="container-center">
        <div className="text-center space-y-8 animate-fade-up">
          {/* Profile Picture */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/172b4ebf-45b7-4856-99ce-fd35a5a2afbe.png`}
                alt="GUDI VISHNU TEJA - AI/ML Engineer"
                className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-gradient">GUDI VISHNU TEJA</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
              AI/ML Engineer & Full-Stack Developer
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-subtle leading-relaxed">
            Computer Science Engineer specializing in{' '}
            <span className="text-primary font-semibold">Artificial Intelligence</span>,{' '}
            <span className="text-primary font-semibold">Deep Learning</span>, and{' '}
            <span className="text-primary font-semibold">Computer Vision</span>{' '}
            with a passion for building scalable solutions
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-hero"
            >
              View My Work
            </button>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="flex items-center gap-2 px-6 py-3 border border-border hover:border-primary rounded-lg font-medium transition-all duration-300 hover:shadow-md"
            >
              <Download size={20} />
              View Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-4">
            <a
              href="https://linkedin.com/in/gudi-vishnu-teja"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-muted rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-md"
            >
              <Linkedin size={24} className="text-subtle hover:text-primary" />
            </a>
            <a
              href="https://github.com/gudivishnuteja"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-muted rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-md"
            >
              <Github size={24} className="text-subtle hover:text-primary" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gudivishnuteja@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-muted rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-md"
            >
              <Mail size={24} className="text-subtle hover:text-primary" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce"
            >
              <ArrowDown
                size={24}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-11/12 md:w-3/4 h-3/4 shadow-lg p-4 relative">
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
            >
              ✕
            </button>
            <iframe
              title="Resume"
              src={`${import.meta.env.BASE_URL}resume.pdf`}
              className="w-full h-full rounded"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
