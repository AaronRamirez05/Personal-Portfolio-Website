export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-background via-background to-accent/10">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-accent via-accent-purple to-accent-pink bg-clip-text text-transparent">
                Aaron Ramirez
              </h1>
              <p className="text-xl md:text-2xl text-accent-cyan max-w-2xl font-semibold">
                Software Developer & Engineer
              </p>
              <p className="text-lg text-muted max-w-2xl leading-relaxed">
                Passionate about both code and iron.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-accent to-accent-purple text-white font-semibold hover:from-accent-purple hover:to-accent-pink transition-all shadow-lg shadow-accent/30 hover:shadow-accent-purple/50"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all"
                >
                  View Projects
                </a>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-accent via-accent-purple to-accent-pink p-1 shadow-2xl shadow-accent/50">
                <div className="w-full h-full rounded-full bg-card-bg flex items-center justify-center overflow-hidden">
                  <img src="/profile.jpeg" alt="Aaron Ramirez" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-accent-cyan to-accent bg-clip-text text-transparent">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-muted">
              <p className="text-lg leading-relaxed">
                I'm a full-stack developer with experience building mobile and web applications using Dart/Flutter, JavaScript, SQL, and C#. I combine my technical background with passions like powerlifting, fitness, gaming, and anime—bringing the same discipline and curiosity from the gym into every project I build.
              </p>

            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4 text-accent-purple">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'Agile', 'React', 'Next.js', 'Node.js', 'Python', 'Git', 'SQL','MSSQL','C#','ASP.NET Core Web API Fundamentals','C++','HTML','Visual Studio','Postman','VS Code','GitHub'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-card-bg border border-accent/30 text-accent-cyan text-sm hover:bg-accent hover:text-white hover:border-accent transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-accent/5 to-background">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">Projects</h2>
          <div className="space-y-8">
            {[
              {
                title: 'AIM Strength - Professional Powerlifting Team Website',
                description: `A modern, full-stack web application for a competitive powerlifting team featuring real-time leaderboard
                tracking, team management, and member applications.
                <br/>
                <br/>
                AIM Strength is a professional-grade website built to showcase a powerlifting team's achievements, manage team
                rosters, and streamline the application process for prospective members. The platform integrates with Google
                Sheets for live competition leaderboard tracking and includes a comprehensive team member database with MSSQL
                backend.
                <br/>
                <br/>
                <a href="https://aimpowerlifting.com/" target="_blank" rel="noopener noreferrer" class="text-accent-cyan hover:text-accent-purple transition-colors font-semibold">Visit Website →</a>`,
                tech: ['Next.js', 'React', 'Node.js with Express.js', 'MSSQL','Docker & Docker Compose'],
                color: 'accent-purple',
              },
              {
                title: 'Hidalgo County Magistration Platform (HCMP)',
                description: `Built a full-stack application that modernized Hidalgo County’s entire inmate magistration process, replacing an outdated system used across all county jail facilities. Streamlines judicial intake by supporting document generation, charge explanations, rights notifications, and secure e-signatures for magistrates. <br/><br/>  Delivered in just two months while managing full-time IT duties, the system significantly improved workflow efficiency, accessibility, and resource management for county staff and judicial personnel.`,
                tech: ['React.js', 'Node.js', 'MSSQL'],
                color: 'accent',
              },
              {
                title: 'Powerlifting Mobile App',
                description: 'A comprehensive strength-training app designed to help lifters track workouts, monitor long-term progress, and build personalized training plans. The platform allows users to log their lifts, review performance trends, and create customized routines tailored to their goals. It also includes an integrated computer-vision feature that uses the device’s camera to detect movement, estimate joint angles, and automatically count repetitions—providing real-time feedback and more accurate workout analysis.',
                tech: ['Dart', 'Flutter', 'C#','Python','MSSQL',],
                color: 'accent-cyan',
              },
            ].map((project, index) => (
              <div
                key={index}
                className="border border-border bg-card-bg/50 p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all group backdrop-blur-sm"
              >
                <h3 className="text-2xl font-semibold mb-3 text-accent-cyan group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted mb-4" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-sm px-3 py-1 bg-accent/10 text-accent-purple border border-accent/20 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-tr from-background via-accent-purple/5 to-background">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-accent to-accent-cyan bg-clip-text text-transparent">Get in Touch</h2>
          <div className="space-y-6 text-muted">
            <p className="text-xl">
              Whether it's a new opportunity or a project that needs a dedicated engineer, I’m always happy to connect and explore what we can create.
            </p>
            <div className="space-y-3 text-lg">
              <p>
                Email:{' '}
                <a href="mailto:aaronramirez879@gmail.com" className="text-accent-cyan hover:text-accent-purple transition-colors font-semibold">
                  aaronramirez879@gmail.com
                </a>
              </p>
              <p>
                GitHub:{' '}
                <a
                  href="https://github.com/AaronRamirez05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan hover:text-accent-purple transition-colors font-semibold"
                >
                  github.com/AaronRamirez05
                </a>
              </p>
              <p>
                LinkedIn:{' '}
                <a
                  href="https://linkedin.com/in/aaron-ramirez-a42a7813a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan hover:text-accent-purple transition-colors font-semibold"
                >
                  linkedin.com/in/aaron-ramirez-a42a7813a/
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
