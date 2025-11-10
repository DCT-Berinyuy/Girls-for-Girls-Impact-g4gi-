import orphans from '$lib/assets/orphans.jpg';
import digital_literacy from '$lib/assets/digital_literacy.webp';

export const impactData = [
  {
    id: 'girls-empowered',
    title: 'Girls Empowered',
    value: '500+',
    description: 'Over 500 girls have participated in our empowerment programs.',
    type: 'number'
  },
  {
    id: 'workshops-conducted',
    title: 'Workshops Conducted',
    value: '50+',
    description: 'More than 100 workshops on leadership, life skills, and digital literacy.',
    type: 'number'
  },
  {
    id: 'communities-reached',
    title: 'Communities Reached',
    value: '15+',
    description: 'Our outreach programs have positively impacted over 15 communities.',
    type: 'number'
  },
  {
    id: 'project-outreach-2023',
    title: 'Orphanage Outreach 2023',
    description: 'Provided essential supplies and mentorship to girls in local orphanages.',
    image: orphans,
    type: 'highlight'
  },
  {
    id: 'digital-literacy-drive',
    title: 'Digital Literacy Drive',
    description: 'Equipped girls with basic computer skills and internet safety knowledge.',
    image: digital_literacy,
    type: 'highlight'
  }
];
