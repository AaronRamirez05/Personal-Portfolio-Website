export default function Projects() {
  return (
    <div className="pt-16">
      {/* Projects Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-accent/5 to-background">
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
                description: `Built a full-stack application that modernized Hidalgo County's entire inmate magistration process, replacing an outdated system used across all county jail facilities. Streamlines judicial intake by supporting document generation, charge explanations, rights notifications, and secure e-signatures for magistrates. <br/><br/>  Delivered in just two months while managing full-time IT duties, the system significantly improved workflow efficiency, accessibility, and resource management for county staff and judicial personnel.`,
                tech: ['React.js', 'Node.js', 'MSSQL'],
                color: 'accent',
              },
              {
                title: 'Powerlifting Mobile App',
                description: 'A comprehensive strength-training app designed to help lifters track workouts, monitor long-term progress, and build personalized training plans. The platform allows users to log their lifts, review performance trends, and create customized routines tailored to their goals. It also includes an integrated computer-vision feature that uses the device\'s camera to detect movement, estimate joint angles, and automatically count repetitions—providing real-time feedback and more accurate workout analysis.',
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
    </div>
  );
}
