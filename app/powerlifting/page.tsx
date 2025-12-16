'use client';

import { useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

interface Lift {
  name: string;
  current: number;
  goal: number;
  unit: string;
  videoUrl: string;
}

interface PRHistory {
  date: string;
  squat: number;
  bench: number;
  deadlift: number;
  total: number;
}

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => {
        if (!hasAnimated) {
          setHasAnimated(true);
          const controls = animate(count, value, { duration });
          const unsubscribe = rounded.on('change', (latest) => setDisplayValue(latest));

          controls.then(() => {
            unsubscribe();
          });
        }
      }}
    >
      {displayValue}
    </motion.span>
  );
}

export default function Powerlifting() {
  const [lifts] = useState<Lift[]>([
    { name: 'Squat', current: 405, goal: 455, unit: 'lbs', videoUrl: 'https://www.youtube.com/embed/DvoOTlO6Wzs' },
    { name: 'Bench Press', current: 315, goal: 330, unit: 'lbs', videoUrl: 'https://www.youtube.com/embed/S9n5v1l1YiU' },
    { name: 'Deadlift', current: 545, goal: 550, unit: 'lbs', videoUrl: 'https://www.youtube.com/embed/aIn6AnU50Vk' },
  ]);

  const [prHistory] = useState<PRHistory[]>([
    { date: '2025-12-16', squat: 405, bench: 315, deadlift: 545, total: 1265 },
    { date: '2024-07-16', squat: 380, bench: 308, deadlift: 529, total: 1217 }
  ]);

  const totalCurrent = lifts.reduce((sum, lift) => sum + lift.current, 0);
  const totalGoal = lifts.reduce((sum, lift) => sum + lift.goal, 0);

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
      {/* Powerlifting Section */}
      <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-background via-accent/5 to-background">
        <div className="max-w-6xl w-full mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent py-2 text-center"
            {...fadeInUp}
          >
            Powerlifting Journey
          </motion.h2>

          {/* Header with Competition Photo */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-lg border border-accent/30 shadow-2xl shadow-accent/20">
                <img
                  src="/AaronPowerlift.jpeg"
                  alt="Aaron at powerlifting competition"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="space-y-4">
                <p className="text-xl text-muted leading-relaxed">
                  This is my powerlifting journey in which I started the sport about 3 years ago, after working on my health and fitness for the past 7 years. This page is meant to show my dedication to the sport and health journey.
                </p>
                <div className="border-l-4 border-accent pl-4 py-2">
                  <p className="text-lg text-accent-cyan font-semibold">Current Total: 1,265 lbs</p>
                  <p className="text-sm text-muted">Competing since 2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Stats */}
          <motion.div className="mb-16" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-8 text-accent-purple">Current Numbers</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {lifts.map((lift, index) => {
              const progress = (lift.current / lift.goal) * 100;
              return (
                <motion.div
                  key={lift.name}
                  className="border border-border bg-card-bg/50 p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all backdrop-blur-sm"
                  {...fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-accent-cyan">{lift.name}</h3>

                  {/* Video Embed */}
                  <div className="mb-4 aspect-[9/16] w-full overflow-hidden rounded border border-accent/30">
                    <iframe
                      src={lift.videoUrl}
                      title={`${lift.name} video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted mb-1">Current PR</p>
                      <p className="text-4xl font-bold">
                        <Counter value={lift.current} />
                        <span className="text-xl text-muted ml-2">{lift.unit}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted mb-1">Goal</p>
                      <p className="text-2xl">
                        <Counter value={lift.goal} duration={1.5} />
                        <span className="text-sm text-muted ml-2">{lift.unit}</span>
                      </p>
                    </div>
                    <div className="pt-2">
                      <div className="flex justify-between text-sm text-muted mb-2">
                        <span>Progress to Goal</span>
                        <span>
                          <Counter value={progress} duration={1.5} />%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent to-accent-purple rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min(progress, 100)}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Total */}
          <div className="border border-accent p-8 bg-gradient-to-r from-accent/20 to-accent-purple/20 backdrop-blur-sm">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-accent-cyan">Current Total</h3>
                <p className="text-5xl font-bold text-white">
                  <Counter value={totalCurrent} duration={2.5} /> lbs
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted mb-1">Goal Total</p>
                <p className="text-3xl font-semibold text-accent-purple">
                  <Counter value={totalGoal} duration={2} /> lbs
                </p>
              </div>
            </div>
          </div>
          </motion.div>

          {/* PR History */}
          <motion.div className="mb-16" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-8 text-accent-purple">PR History</h2>
          <div className="border border-border bg-card-bg/50 overflow-hidden backdrop-blur-sm">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr className="text-left">
                  <th className="p-4 font-semibold">Date</th>
                  <th className="p-4 font-semibold">Squat</th>
                  <th className="p-4 font-semibold">Bench</th>
                  <th className="p-4 font-semibold">Deadlift</th>
                  <th className="p-4 font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                {prHistory.map((record, index) => (
                  <tr
                    key={record.date}
                    className={`hover:bg-accent/10 transition-all ${
                      index !== prHistory.length - 1 ? 'border-b border-border' : ''
                    }`}
                  >
                    <td className="p-4">{new Date(record.date).toLocaleDateString()}</td>
                    <td className="p-4 font-mono">{record.squat} lbs</td>
                    <td className="p-4 font-mono">{record.bench} lbs</td>
                    <td className="p-4 font-mono">{record.deadlift} lbs</td>
                    <td className="p-4 font-mono font-bold">{record.total} lbs</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </motion.div>

          {/* Progress Chart Visual */}
          <motion.div {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-8 text-accent-purple">Total Progress Over Time</h2>
          <div className="border border-border bg-card-bg/50 p-8 backdrop-blur-sm">
            <div className="flex items-end justify-between h-64 gap-4">
              {[...prHistory].reverse().map((record, index) => {
                const maxTotal = Math.max(...prHistory.map((r) => r.total));
                const height = (record.total / maxTotal) * 100;
                return (
                  <div key={record.date} className="flex-1 flex flex-col items-center gap-2">
                    <div className="text-sm font-mono text-accent-cyan mb-2">{record.total} lbs</div>
                    <div className="w-full flex items-end justify-center" style={{ height: '200px' }}>
                      <div
                        className="w-full bg-gradient-to-t from-accent to-accent-purple hover:from-accent-purple hover:to-accent-pink transition-all"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                    <div className="text-xs text-muted mt-2">
                      {new Date(record.date).toLocaleDateString('en-US', {
                        month: 'short',
                        year: '2-digit',
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          </motion.div>

          {/* Training Philosophy */}
          <motion.div className="mt-16" {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-8 text-accent-purple">Training Philosophy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-border bg-card-bg/50 p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-accent-cyan">Approach</h3>
                <p className="text-muted leading-relaxed">
                  Following a structured progressive overload program with focus on compound movements.
                  Training 4-5 days per week with adequate recovery and nutrition.
                </p>
              </div>
              <div className="border border-border bg-card-bg/50 p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-accent-cyan">Goals</h3>
                <p className="text-muted leading-relaxed">
                  Aiming for a 1,300 lbs total (425/325/550) by the end of 2025. Focusing on
                  technique refinement and consistent linear progression.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
