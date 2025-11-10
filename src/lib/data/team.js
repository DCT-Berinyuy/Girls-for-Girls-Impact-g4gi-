import ceo_size from '$lib/assets/ceo_size.jpeg'
import Vice_Presi from '$lib/assets/Vice_Presi.jpg'

export const teamMembers = [
  {
    id: 'abigail-mbatu',
    name: 'Abigail "The Impact" Mbatu',
    role: 'Founder & Executive Director',
    image: ceo_size, // Using the founder's image for consistency
    social: {
      facebook: 'https://facebook.com/abigail.mbatu',
      twitter: 'https://twitter.com/abigail_mbatu',
      linkedin: 'https://linkedin.com/in/abigail-mbatu'
    }
  },
  {
    id: 'gaille-dinga',
    name: 'Gaille Dinga',
    role: 'Vice Precident',
    image: Vice_Presi,
    social: {
      linkedin: 'https://linkedin.com/in/janedoe'
    }
  },
  {
    id: 'awa-bryan',
    name: 'Awa Bryan',
    role: 'Head 0f Operations',
    image: 'https://via.placeholder.com/150/9370DB/FFFFFF?text=John',
    social: {
      twitter: 'https://twitter.com/johnsmith'
    }
  },
  {
    id: 'marie-noel-mbatu',
    name: 'Marie Noel Mbatu',
    role: 'Volunteer Coordinator',
    image: 'https://via.placeholder.com/150/00BFA5/FFFFFF?text=Emily',
    social: {
      linkedin: 'https://linkedin.com/in/emilywhite'
    }
  }
];
