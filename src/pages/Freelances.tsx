import * as React from 'react';
import Card from 'components/Card';

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: 'https://picsum.photos/200/300',
    id: 1,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: 'https://picsum.photos/200/300',
    id: 2,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: 'https://picsum.photos/200/300',
    id: 3,
  },
];

export default function Freelances() {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      {freelanceProfiles.map((profile) => (
        <Card
          key={`${profile.name}-${profile.id}`}
          label={profile.jobTitle}
          picture={profile.picture}
          title={profile.name}
        />
      ))}
    </div>
  );
}
