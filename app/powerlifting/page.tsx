'use client';

import { useState } from 'react';

interface Lift {
  name: string;
  current: number;
  goal: number;
  unit: string;
}

interface PRHistory {
  date: string;
  squat: number;
  bench: number;
  deadlift: number;
  total: number;
}

export default function Powerlifting() {
  const [lifts] = useState<Lift[]>([
    { name: 'Squat', current: 315, goal: 405, unit: 'lbs' },
    { name: 'Bench Press', current: 225, goal: 315, unit: 'lbs' },
    { name: 'Deadlift', current: 405, goal: 500, unit: 'lbs' },
  ]);

  const [prHistory] = useState<PRHistory[]>([
    { date: '2025-01-15', squat: 315, bench: 225, deadlift: 405, total: 945 },
    { date: '2024-10-20', squat: 295, bench: 215, deadlift: 385, total: 895 },
    { date: '2024-07-10', squat: 275, bench: 205, deadlift: 365, total: 845 },
    { date: '2024-04-05', squat: 255, bench: 195, deadlift: 345, total: 795 },
  ]);

  const totalCurrent = lifts.reduce((sum, lift) => sum + lift.current, 0);
  const totalGoal = lifts.reduce((sum, lift) => sum + lift.goal, 0);

  return (
    <div className="pt-20 min-h-screen px-6 py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent-cyan to-accent bg-clip-text text-transparent py-2">Powerlifting Journey</h1>
          <p className="text-xl text-muted">
            This is my powerlifting journey in which I started the sport about 3 years ago, after working on my health and fitness for the past 7 years. This page is meant to show my dedication to the sport and health journey.
          </p>
        </div>

        {/* Current Stats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-accent-purple">Current Numbers</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {lifts.map((lift) => {
              const progress = (lift.current / lift.goal) * 100;
              return (
                <div key={lift.name} className="border border-border bg-card-bg/50 p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold mb-4 text-accent-cyan">{lift.name}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted mb-1">Current PR</p>
                      <p className="text-4xl font-bold">
                        {lift.current}
                        <span className="text-xl text-muted ml-2">{lift.unit}</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted mb-1">Goal</p>
                      <p className="text-2xl">
                        {lift.goal}
                        <span className="text-sm text-muted ml-2">{lift.unit}</span>
                      </p>
                    </div>
                    <div className="pt-2">
                      <div className="flex justify-between text-sm text-muted mb-2">
                        <span>Progress to Goal</span>
                        <span>{progress.toFixed(0)}%</span>
                      </div>
                      <div className="w-full h-2 bg-border rounded-full">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-accent-purple transition-all rounded-full"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total */}
          <div className="border border-accent p-8 bg-gradient-to-r from-accent/20 to-accent-purple/20 backdrop-blur-sm">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-accent-cyan">Current Total</h3>
                <p className="text-5xl font-bold text-white">{totalCurrent} lbs</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted mb-1">Goal Total</p>
                <p className="text-3xl font-semibold text-accent-purple">{totalGoal} lbs</p>
              </div>
            </div>
          </div>
        </section>

        {/* PR History */}
        <section className="mb-16">
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
        </section>

        {/* Progress Chart Visual */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-accent-purple">Total Progress Over Time</h2>
          <div className="border border-border bg-card-bg/50 p-8 backdrop-blur-sm">
            <div className="flex items-end justify-between h-64 gap-4">
              {prHistory.reverse().map((record, index) => {
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
        </section>

        {/* Training Philosophy */}
        <section className="mt-16">
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
                Aiming for a 1,220 lbs total (405/315/500) by the end of 2025. Focusing on
                technique refinement and consistent linear progression.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
