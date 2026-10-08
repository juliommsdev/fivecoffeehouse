export const environment = {
  production: true,
  env: 'production',
  emailjs: {
    publicKey: '',
    serviceId: '', // seu Zoho service
    templateIdJoin: '', // template do "Trabalhe Conosco"
  },
  cloudflare: {
    resumeWorkerUrl: '',
  },
  // 🌐 Site principal
  siteName: 'VAC Implementação De Sistemas LDTA',
  siteUrl: 'https://vac.ind.br',
  siteLogo: 'https://vac.ind.br/assets/favicon.ico',
  siteSlogan: 'Tecnologia que move sua produção',

  // 🧠 SEO
  seo: {
    description:
      'A VAC, fundada em 2007, desenvolve soluções nacionais em automação industrial, hardware e software próprios, politrizes automatizadas e sistemas de controle com excelência técnica.',
    keywords:
      'automação industrial, soluções industriais, tecnologia industrial brasileira, politrizes automatizadas, sistemas de controle industrial, hardware industrial nacional, software industrial próprio, engenharia de automação, inovação tecnológica, automação para indústria, VAC Implementação de Sistemas, Valguimar Antonio Costalonga, suporte direto do fabricante, indústria 4.0 Brasil, equipamentos industriais brasileiros, desenvolvimento de hardware para automação, desenvolvimento de software industrial, automação para linha de produção, sistemas automatizados de alto desempenho, empresa de automação no Espírito Santo, soluções industriais customizadas, controle de processos industriais, integração de máquinas automatizadas',
    author: 'Valguimar Antônio Costalonga',
  },

  // 🔗 Links úteis
  links: {
    instagram: 'https://www.instagram.com/fivecoffeehouse/',
    contact: 'https://vac.ind.br/',
  },

  // 🏢 Dados estruturados (JSON-LD)
  organization: {
    addressLocality: 'Cachoeiro de Itapemirim',
    addressRegion: 'ES',
    addressCountry: 'BR',
  },

  // ☎️ Contato
  contact: {
    email: 'atendimento&#64;tecnum.ind.br',
    phone: '+55 (28) 99222-8604',
  },
};
