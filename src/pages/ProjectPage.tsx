import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const API = (import.meta.env.VITE_API_URL || 'https://fallingsun-api.onrender.com').replace(/\/$/, '');

type Team = {
  id: string;
  name: string;
  category: string;
  project_title: string;
  description: string;
  link: string | null;
  members: { name: string; role: string }[];
  tracks: { kind: string; track: string }[];
};

type ApiConfig = {
  SKILL_TRACKS: Record<string, string>;
  TOOLS: Record<string, string>;
};

const categoryLabels: Record<string, string> = {
  game: 'Game Development',
  web: 'Web Development',
  robotics: 'Robotics',
};

function trackLabel(track: Team['tracks'][number], config: ApiConfig | null) {
  const labels = track.kind === 'tool' ? config?.TOOLS : config?.SKILL_TRACKS;
  return labels?.[track.track] || track.track.replace(/_/g, ' ');
}

export const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [team, setTeam] = useState<Team | null>(null);
  const [config, setConfig] = useState<ApiConfig | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setError('This project link is invalid.');
      setLoading(false);
      return undefined;
    }

    let active = true;
    setLoading(true);
    setError('');

    Promise.all([
      fetch(`${API}/api/teams/${encodeURIComponent(id)}`),
      fetch(`${API}/api/config`).catch(() => null),
    ])
      .then(async ([teamResponse, configResponse]) => {
        const teamData = await teamResponse.json();
        if (!teamResponse.ok) {
          throw new Error(teamData.error || `Could not load project (${teamResponse.status}).`);
        }

        const configData = configResponse?.ok ? await configResponse.json().catch(() => null) : null;
        if (active) {
          setTeam(teamData);
          setConfig(configData);
        }
      })
      .catch((err: unknown) => {
        if (!active) return;
        setError(err instanceof Error ? err.message : 'Could not load this project. Please try again.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return (
      <section className="min-h-[60vh] px-6 pt-36 pb-24 text-center text-cream">
        <p className="font-mono text-sm uppercase tracking-widest">Loading project…</p>
      </section>
    );
  }

  if (error || !team) {
    return (
      <section className="min-h-[60vh] px-6 pt-36 pb-24 text-center text-cream">
        <div className="mx-auto max-w-2xl border-2 border-ink bg-cream p-8 text-ink shadow-card">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-reddark">Project unavailable</p>
          <h1 className="mt-3 font-display text-4xl font-black">We couldn’t load this project</h1>
          <p className="mt-4">{error || 'This team could not be found.'}</p>
          <Link className="mt-6 inline-block font-bold underline" to="/">Back to Falling Sun</Link>
        </div>
      </section>
    );
  }

  return (
    <article className="min-h-screen bg-bg px-6 pb-24 pt-36 text-cream md:px-12">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="font-mono text-xs font-bold uppercase tracking-widest text-cream/80 hover:text-yellow">
          ← Falling Sun 2026
        </Link>

        <header className="mt-8 border-2 border-ink bg-cream p-7 text-ink shadow-card sm:p-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-reddark">
            {categoryLabels[team.category] || team.category} project
          </p>
          <h1 className="mt-4 break-words font-display text-5xl font-black leading-none sm:text-7xl">
            {team.project_title}
          </h1>
          <p className="mt-5 font-mono text-sm font-bold uppercase tracking-wider text-ink-muted">
            Built by {team.name}
          </p>
        </header>

        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(240px,1fr)]">
          <section className="border-2 border-ink bg-cream p-6 text-ink shadow-card sm:p-8">
            <h2 className="font-display text-3xl font-black uppercase">About the project</h2>
            <p className="mt-5 whitespace-pre-wrap text-base leading-relaxed">{team.description}</p>
            {team.link && (
              <a
                className="mt-7 inline-flex border-2 border-ink bg-yellow px-5 py-3 font-display text-lg font-black uppercase shadow-[4px_4px_0_#1d1210] transition-transform hover:-translate-y-0.5"
                href={team.link}
                target="_blank"
                rel="noreferrer"
              >
                Visit project ↗
              </a>
            )}
          </section>

          <aside className="space-y-6">
            <section className="border-2 border-ink bg-yellow p-6 text-ink shadow-card">
              <h2 className="font-display text-2xl font-black uppercase">The team</h2>
              <ul className="mt-4 space-y-3">
                {team.members.map((member, index) => (
                  <li className="border-t border-ink/25 pt-3" key={`${member.role}-${member.name}-${index}`}>
                    <p className="font-bold">{member.name}</p>
                    <p className="font-mono text-xs uppercase tracking-wider">{member.role}</p>
                  </li>
                ))}
              </ul>
            </section>

            {team.tracks.length > 0 && (
              <section className="border-2 border-ink bg-cream p-6 text-ink shadow-card">
                <h2 className="font-display text-2xl font-black uppercase">Tracks & tools</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {team.tracks.map((track, index) => (
                    <li
                      className="border border-ink bg-white px-3 py-2 font-mono text-xs font-bold"
                      key={`${track.kind}-${track.track}-${index}`}
                    >
                      {trackLabel(track, config)}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </aside>
        </div>
      </div>
    </article>
  );
};
