import React from 'react';
import { ExternalLink } from 'lucide-react';

const FORM_URL = 'https://docs.google.com/forms/d/1lRyMG9O1UMiV9np24jeh8hyaPQFAZOP57Tv4Lw3H4hE/viewform';

export const WebSubmissionPage: React.FC = () => (
  <section className="min-h-screen bg-bg px-6 pb-24 pt-36 text-cream md:px-12">
    <div className="mx-auto max-w-5xl">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-yellow">
            Web Development
          </p>
          <h1 className="mt-3 font-display text-4xl font-black uppercase sm:text-6xl">
            Project Submission
          </h1>
        </div>
        <a
          className="inline-flex items-center gap-2 border-2 border-ink bg-yellow px-4 py-3 font-display font-black uppercase text-ink shadow-btn"
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open form in new tab
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </header>
      <div className="overflow-hidden border-2 border-ink bg-cream shadow-card">
        <iframe
          className="block h-[80vh] min-h-[700px] w-full"
          src={`${FORM_URL}?embedded=true`}
          title="Web Development project submission form"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);
