import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-center">
        <div className="section-padding">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">GUDI VISHNU TEJA</h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                AI/ML Engineer passionate about building innovative solutions 
                that bridge the gap between cutting-edge research and real-world applications.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/gudi-vishnu-teja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-secondary-light rounded-lg transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/gudivishnuteja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-secondary-light rounded-lg transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=gudivishnuteja@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-secondary-light rounded-lg transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
              <p className="text-sm text-secondary-foreground/60">
                Open to opportunities and collaborations
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-secondary-foreground/60">
                © {currentYear} GUDI VISHNU TEJA. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;