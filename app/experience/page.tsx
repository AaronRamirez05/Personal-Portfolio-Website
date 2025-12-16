'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Experience() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div
      className="pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Experience Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-accent/5 to-background">
        <div className="max-w-4xl w-full">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent text-center pb-2"
            {...fadeInUp}
          >
            Experience
          </motion.h2>
          <div className="space-y-8">
            {/* Technician II Position */}
            <motion.div
              className="border border-border bg-card-bg/50 p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all group backdrop-blur-sm"
              {...fadeInUp}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-semibold text-accent-cyan group-hover:text-accent transition-colors">
                  Technician II
                </h3>
                <span className="text-sm text-muted">APR 2025 - PRESENT</span>
              </div>
              <p className="text-accent-purple font-semibold mb-4">Hidalgo County / Edinburg, Texas</p>

              {/* Image */}
              <div className="w-full rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                <Image
                  src="/courthouse.jpg"
                  alt="Hidalgo County Courthouse"
                  width={800}
                  height={600}
                  className="max-w-full h-auto rounded-lg"
                />
              </div>

              <ul className="text-muted mb-4 space-y-3 list-disc list-inside">
                <li>Designed and launched a modern full-stack solution that transformed the county's inmate magistration workflow from a legacy Microsoft Access database into a robust web application. Leveraged React.js for the UI, Node.js to build RESTful APIs, and MSSQL for data persistence—enabling streamlined document processing, clear communication of charges and rights, and digital signature authentication for judicial staff. Successfully rolled out the system across all jail facilities countywide within a two-month timeline, all while maintaining regular IT operations.</li>
                <li>Delivered comprehensive IT infrastructure support for government personnel in both physical and remote work settings. Automated Windows 11 deployments and system refreshes using PowerShell scripting, implemented security hardening through Group Policy configurations, and administered user provisioning via Active Directory and Goverlan. Handled installation and ongoing support for workstations, peripherals, printing equipment, and specialized government applications while adhering to strict data security standards. Kept meticulous records of hardware inventory and software licensing, resolving a wide range of technical issues across the organization.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {['Government IT Security Standards Compliance','Data Integrity & Confidentiality Practices','IT Support','Troubleshooting','React.js', 'Node.js', 'MSSQL', 'RESTful API', 'PowerShell', 'Active Directory', 'Windows 11', 'Group Policy', 'Cybersecurity'].map((skill) => (
                  <span key={skill} className="text-sm px-3 py-1 bg-accent/10 text-accent-purple border border-accent/20 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Lead Computer Vision Annotation Specialist Position */}
            <motion.div
              className="border border-border bg-card-bg/50 p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all group backdrop-blur-sm"
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-semibold text-accent-cyan group-hover:text-accent transition-colors">
                  Lead Computer Vision Annotation Specialist
                </h3>
                <span className="text-sm text-muted">SEP 2024 - JAN 2025</span>
              </div>
              <p className="text-accent-purple font-semibold mb-4">mbue – AI-based Quality Control for AEC Firms / Remote</p>

              {/* Image */}
              <div className="w-full rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                <Image
                  src="/mbue.png"
                  alt="mbue AI Quality Control"
                  width={800}
                  height={600}
                  className="max-w-full h-auto rounded-lg"
                />
              </div>

              <ul className="text-muted mb-4 space-y-3 list-disc list-inside">
                <li>Played a key role in training AI systems for automated architectural document review by establishing comprehensive annotation protocols for construction and design files within CVAT. Processed approximately 100 floor plans and architectural drawings each day, generating high-quality training data to power intelligent quality control systems for the AEC industry.</li>
                <li>Created detailed labeling frameworks for geometric shapes and descriptive elements to maintain dataset uniformity and precision, allowing machine learning models to accurately recognize and classify architectural components.</li>
                <li>Earned promotion to lead annotator position in under a month, taking ownership of standardization processes and mentoring team members to ensure consistent, reliable data output across the annotation pipeline.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {['Computer Vision', 'CVAT', 'Data Annotation', 'AI/ML', 'Quality Control', 'Team Leadership', 'AEC Industry'].map((skill) => (
                  <span key={skill} className="text-sm px-3 py-1 bg-accent/10 text-accent-purple border border-accent/20 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
