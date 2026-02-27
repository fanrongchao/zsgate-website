import React from 'react';

export function SectionTitle(props: { kicker: string; title: string; description: string }) {
  return (
    <header>
      <p>{props.kicker}</p>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </header>
  );
}
