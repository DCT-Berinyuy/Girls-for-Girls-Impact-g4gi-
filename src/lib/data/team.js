import ceo_size from '$lib/assets/ceo_size.jpeg'
import Vice_Presi from '$lib/assets/Vice_Presi.jpg'
import brandon from '$lib/assets/brandon.jpg'
import bryan from '$lib/assets/bryan.jpg'

export const teamMembers = [
  {
    id: 'abigail-mbatu',
    name: 'Abigail "The Impact" Mbatu',
    role: 'Founder & Executive Director',
    image: ceo_size, // Using the founder's image for consistency
    social: {
      linkedin: 'https://www.linkedin.com/in/abigailepongsehmbaahmbatu/',
      facebook: 'https://facebook.com/abigail.mbatu',
      twitter: 'https://twitter.com/abigail_mbatu'
    }
  },
    {
    id: 'brandon',
    name: 'Awa Brandon',
    role: 'Vice President',
    image: brandon,
    social: {
      twitter: 'https://twitter.com/johnsmith'
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
    name: 'Awa Bryan Nji',
    role: 'Head 0f Operations',
    image: bryan,
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
