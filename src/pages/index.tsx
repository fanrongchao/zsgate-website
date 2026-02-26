import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout title="ZSGate" description="Enterprise LLM Gateway">
      <main className="hero-wrap">
        <section className="hero-panel">
          <p className="hero-kicker">ZS AI Infrastructure</p>
          <h1>Control Enterprise AI Traffic With One Gate</h1>
          <p>
            ZSGate gives your teams one audited, policy-driven gateway across OpenAI, Claude,
            Gemini, and self-hosted models.
          </p>
          <div className="hero-actions">
            <Link className="button button--primary button--lg" to="/docs/quickstart">
              Quickstart
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/enterprise/overview">
              Enterprise
            </Link>
          </div>
        </section>
        <section className="cards">
          <article>
            <h3>Unified Vendor Control</h3>
            <p>One console for model aliases, weighted routing, failover, and health checks.</p>
          </article>
          <article>
            <h3>Audit & Cost Visibility</h3>
            <p>Track usage by user, department, project, and scenario with exportable reports.</p>
          </article>
          <article>
            <h3>Private Deployment First</h3>
            <p>Built for enterprise private clusters with control plane and data plane separation.</p>
          </article>
        </section>
      </main>
    </Layout>
  );
}
