import React from 'react';
import CtfCard from './CtfCard'; // Assuming CtfCard.js is in the same directory

const ctfData = [
  {
    eventName: 'HackTheBox University CTF 2023',
    description: 'Participated in the qualifiers, focusing on Web Exploitation and Forensics challenges. Solved multiple challenges and learned a lot about teamwork under pressure.',
    platformUrl: 'https://www.hackthebox.com/',
    date: 'October 2023',
    position: 'Team Captain - Top 15%'
  },
  {
    eventName: 'Local University CTF 2023',
    description: 'Won 1st place in the jeopardy-style CTF covering categories like Reverse Engineering, PWN, Crypto, and Web.',
    platformUrl: '#', // Replace with actual link if available
    date: 'April 2023',
    position: '1st Place Individual'
  },
  {
    eventName: 'TryHackMe King of the Hill',
    description: 'Regularly participate in King of the Hill rooms, focusing on real-world attack and defense scenarios.',
    platformUrl: 'https://tryhackme.com/',
    date: 'Ongoing',
    // position: 'Top 100 Player' // Optional
  },
  // Add more CTF achievements here
];

const Ctf = () => {
  return (
    <section id="ctf" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          CTF Achievements
        </h2>
        {ctfData.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ctfData.map((ctf, index) => (
              <CtfCard
                key={index}
                eventName={ctf.eventName}
                description={ctf.description}
                platformUrl={ctf.platformUrl}
                date={ctf.date}
                position={ctf.position}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">No CTF achievements to display yet. Check back soon!</p>
        )}
      </div>
    </section>
  );
};

export default Ctf;
