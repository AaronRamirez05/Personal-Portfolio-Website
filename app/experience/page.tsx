export default function Experience() {
  return (
    <div className="pt-16">
      {/* Experience Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-accent/5 to-background">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-accent-cyan to-accent bg-clip-text text-transparent">Experience</h2>
          <div className="space-y-8">
            {/* Add your experience items here */}
            <div className="border border-border bg-card-bg/50 p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all group backdrop-blur-sm">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-semibold text-accent-cyan group-hover:text-accent transition-colors">
                  Your Position Title
                </h3>
                <span className="text-sm text-muted">Date Range</span>
              </div>
              <p className="text-accent-purple font-semibold mb-3">Company Name</p>
              <p className="text-muted mb-4">
                Description of your role and responsibilities...
              </p>
              <div className="flex flex-wrap gap-2">
                {['Skill 1', 'Skill 2', 'Skill 3'].map((skill) => (
                  <span key={skill} className="text-sm px-3 py-1 bg-accent/10 text-accent-purple border border-accent/20 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
