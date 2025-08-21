import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gudivishnuteja@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=gudivishnuteja@gmail.com',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'gudi-vishnu-teja',
      href: 'https://linkedin.com/in/gudi-vishnu-teja',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'gudivishnuteja',
      href: 'https://github.com/gudivishnuteja',
      color: 'bg-gray-50 text-gray-600'
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-center">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss opportunities, collaborations, or innovative projects in AI and software development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, and 
                  collaborations in the field of AI, machine learning, and software development. 
                  Whether you have a project in mind or just want to connect, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid md:grid-cols-3 gap-6">
                {contactMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex flex-col items-center gap-4 p-6 card-elevated hover:scale-105 transition-all duration-300 text-center"
                    >
                      <div className={`p-4 rounded-lg ${method.color}`}>
                        <IconComponent size={28} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{method.label}</h4>
                        <p className="text-muted-foreground">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
