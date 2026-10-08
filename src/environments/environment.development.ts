export const environment = {
  production: false,
  env: 'development',
  emailjs: {
    publicKey: '',
    serviceId: '', // seu Zoho service
    templateIdJoin: '', // template do "Trabalhe Conosco"
  },
  cloudflare: {
    resumeWorkerUrl: '',
  },
  siteName: 'Five Coffee House (Dev)',
  siteUrl: 'http://localhost:4200',
  siteLogo: '/assets/favicon.ico',
  siteSlogan: 'Café, sabor e momentos especiais',

  // 🧠 SEO
  seo: {
    description:
      'Five Coffee House — uma cafeteria criada para proporcionar experiências especiais através do café, bebidas e produtos selecionados.',
    keywords:
      'Five Coffee House, cafeteria, café, coffee house, cafés especiais, bebidas, cafeteria brasileira',
    author: 'Five Coffee House',
  },

  links: {
    instagram: 'https://www.instagram.com/fivecoffeehouse/',
    contact: 'http://localhost:4200/',
  },

  organization: {
    addressLocality: 'Cachoeiro de Itapemirim',
    addressRegion: 'ES',
    addressCountry: 'BR',
  },

  contact: {
    email: 'atendimento&#64;tecnum.ind.br',
    phone: '+55 (28) 99222-8604',
  },
};
