import { GraduationCap, Brain, Code, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-center">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about leveraging AI and technology to solve real-world problems
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  I am a <strong>B.Tech Computer Science and Engineering</strong> graduate from{' '}
                  <span className="text-primary font-semibold">Amrita School of Engineering, Chennai</span>.
                  My academic journey has been driven by a deep fascination with artificial intelligence
                  and its potential to transform how we approach complex challenges.
                </p>
                <p className="text-foreground leading-relaxed">
                  I have a strong interest in applying <strong>AI and deep learning</strong> to real-world
                  problems, particularly in areas like <strong>accident detection</strong> and{' '}
                  <strong>traffic management systems</strong>. My approach combines cutting-edge research
                  with practical implementation, ensuring that solutions are both innovative and scalable.
                </p>
                <p className="text-foreground leading-relaxed">
                  Beyond AI/ML, I'm passionate about <strong>research-driven solutions</strong> and{' '}
                  <strong>scalable software development</strong>, constantly exploring new technologies
                  and methodologies to create impactful applications.
                </p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-6">
              <div className="card-elevated p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <p className="text-muted-foreground">
                  B.Tech in Computer Science and Engineering from Amrita School of Engineering, Chennai
                </p>
              </div>

              <div className="card-elevated p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Brain className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">AI/ML Expertise</h3>
                </div>
                <p className="text-muted-foreground">
                  Specializing in Deep Learning, Computer Vision, and Reinforcement Learning applications
                </p>
              </div>

              <div className="card-elevated p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Full-Stack Development</h3>
                </div>
                <p className="text-muted-foreground">
                  Building scalable web applications with modern technologies and best practices
                </p>
              </div>

              <div className="card-elevated p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Research Focus</h3>
                </div>
                <p className="text-muted-foreground">
                  Passionate about research-driven solutions for traffic management and safety systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;