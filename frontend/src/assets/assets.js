import notificationIcon from './notif.png';
import savedIcon from './saved.png';
import searchIcon from './search.png';
import userIcon from './user.png';
import logo from './logo.jpg';
import admin from './admin.jpg';

import news1 from './news1.jpg';
import news2 from './news2.jpg';
import news3 from './news3.jpg';
import news4 from './news4.jpg';
import news5 from './news5.jpg';
import news6 from './news6.jpg';
import news7 from './news7.jpg';
import news8 from './news8.jpg';
import news9 from './news9.jpg';

import sport1 from './sports1.jpg';
import sport2 from './sports2.jpg';
import sport3 from './sports3.jpg';
import sport4 from './sports4.jpg';
import sport5 from './sports5.jpg';
import sport6 from './sports6.jpg';
import sport7 from './sports7.jpg';
import sport8 from './sports8.jpg';
import sport9 from './sports9.jpg';

import author1 from './author1.jpg';
import author2 from './author2.jpg';
import author3 from './author3.jpg';
import author4 from './author4.jpg';

export const assets = {
  notificationIcon,
  savedIcon,
  searchIcon,
  userIcon,
  logo,
  admin,
  news1,
  news2,
  news3, 
  news4,
  news5,
  news6,
  news7,
  news8,
  news9,
  sport1,
  sport2,
  sport3,
  sport4,
  sport5,
  sport6,
  sport7,
  sport8,
  sport9,
  author1,
  author2,
  author3,
  author4,
};

// Sports Sections
export const sportsSections = ['Tennis', 'Football', 'Basketball', 'Formula1'];

// News Sections
export const newsSections = ['Tech', 'Medicine', 'Politics', 'World'];

export const allSections = [...sportsSections, ...newsSections];


export const authors = [
  {
    id: 1,
    section:'Sports',
    name: 'John Doe',
    image: author1,
    },
    {
    id: 2,
    section:'News',
    name: 'Jane Smith',
    image: author2,
    },
    {
    id: 3,
    section:'Sports',
    name: 'Alex Johnson',
    image: author3,
    },
    {
    id: 4,
    section:'News',
    name: 'Chris Lee',
    image: author4,
    },
];



// latest view articles (ultimele articole publicate)
export const latestArticles = [
    {
      id: 19,
      section: 'World',
      title: 'Global Markets Rally After Economic Report',
      description: 'Stocks around the world surged following a better-than-expected economic forecast.',
      content: 'Stocks around the world surged following a better-than-expected economic forecast. Investors reacted positively to a new economic report indicating stronger-than-expected growth in key global regions. Analysts say this could signal a period of renewed confidence and investment opportunities. Sector performances, major stock indices, and economic indicators are all trending upward.',
      authorId: 2,
      publishDate: '2025-04-26',
      image: news2,
    },
    {
      id: 20,
      section: 'Tech',
      title: 'Breakthrough Battery Technology Revealed',
      description: 'A new battery could power devices for days with just minutes of charging.',
      content: 'Scientists have unveiled a new battery technology that drastically reduces charging times while increasing battery life. The innovation, which uses advanced materials and nano-layered architecture, could revolutionize mobile devices, electric vehicles, and renewable energy storage. Experts predict this could be a major leap toward sustainable and efficient energy consumption.',
      authorId: 3,
      publishDate: '2025-04-26',
      image: news3,
    },
    {
      id: 21,
      section: 'Sports',
      title: 'Star Player Transfers to Rival Team',
      description: 'Shocking transfer shakes fanbase.',
      content: 'A blockbuster transfer in the world of football as one of the league’s top stars signs with a historic rival. The deal, which took fans by surprise, has already begun to stir controversy and excitement among supporters. What does this mean for the upcoming season, and how will the player fit into the new lineup?',
      authorId: 1,
      publishDate: '2025-04-26',
      image: sport1,
    },
    {
      id: 22,
      section: 'Health',
      title: 'New Health Guidelines Announced',
      description: 'Health officials issue updated advice.',
      content: 'Public health authorities have released a new set of health guidelines aimed at promoting long-term wellness. The recommendations focus on diet, exercise, mental health, and preventative care. Officials urge the public to adopt these measures to reduce chronic illnesses and healthcare costs in the long term.',
      authorId: 4,
      publishDate: '2025-04-26',
      image: news4,
    },
    {
      id: 23,
      section: 'Motorsport',
      title: 'Driver Sets Unbeatable Track Record',
      description: 'Performance defies expectations.',
      content: 'A professional driver has shattered the previous lap record in a stunning performance that has left the motorsport community in awe. The track conditions, vehicle specs, and strategy all aligned perfectly for a moment of racing history. Experts are already calling it one of the greatest laps ever recorded.',
      authorId: 2,
      publishDate: '2025-04-26',
      image: sport2,
    },
  ];
  


  export const homepageArticles = {
    sports: [
      {
        id: 1,
        section: 'Football',
        title: 'Epic Comeback in Champions League',
        description: 'An incredible night of football drama as the underdogs triumph.',
        content: 'An incredible night of football drama as the underdogs triumph.',
        authorId: 1,
        publishDate: '2025-04-25',
        image: sport1,
      },
      {
        id: 2,
        section: 'Tennis',
        title: 'Grand Slam Shock: Top Seed Out',
        description: 'A stunning upset at the prestigious tournament.',
        content: 'A stunning upset at the prestigious tournament.',
        authorId: 2,
        publishDate: '2025-04-24',
        image: sport2,
      },
      {
        id: 3,
        section: 'Formula1',
        title: 'New World Champion Crowned',
        description: 'A thrilling season finale in Formula 1 history.',
        content: 'A thrilling season finale in Formula 1 history.',
        authorId: 3,
        publishDate: '2025-04-23',
        image: sport3,
      },
      {
        id: 4,
        section: 'Basketball',
        title: 'Historic Playoff Game Goes to Overtime',
        description: 'An unforgettable night in the NBA playoffs.',
        content: 'An unforgettable night in the NBA playoffs.',
        authorId: 4,
        publishDate: '2025-04-22',
        image: sport4,
      },
      {
        id: 5,
        section: 'Football',
        title: 'Rivalry Match Ends in Controversy',
        description: 'A heated match with a controversial ending.',
        content: 'A heated match with a controversial ending.',
        authorId: 1,
        publishDate: '2025-04-21',
        image: sport5,
      },
      {
        id: 6,
        section: 'Tennis',
        title: 'Young Star Shines at Wimbledon',
        description: 'A new star emerges on the grass courts of Wimbledon.',
        content: 'A new star emerges on the grass courts of Wimbledon.',
        authorId: 2,
        publishDate: '2025-04-20',
        image: sport6,
      },
      {
        id: 7,
        section: 'Formula1',
        title: 'Record-Breaking Lap Time Set',
        description: 'A new record set during the qualifying rounds.',
        content: 'A new record set during the qualifying rounds.',
        authorId: 3,
        publishDate: '2025-04-19',
        image: sport7,
      },
      {
        id: 8,
        section: 'Basketball',
        title: 'All-Star Game Highlights and Analysis',
        description: 'A recap of the best moments from the All-Star game.',
        content: 'A recap of the best moments from the All-Star game.',
        authorId: 4,
        publishDate: '2025-04-18',
        image: sport8,
      },
      {
        id: 9,
        section: 'Football',
        title: 'Transfer Rumors Heat Up Ahead of Deadline Day',
        description: 'As the transfer window approaches, clubs are scrambling to finalize deals.',
        content: 'As the transfer window approaches, clubs are scrambling to finalize deals.',
        authorId: 1,
        publishDate: '2025-04-17',
        image: sport9,
      }
    ],
    news: [
      {
        id: 10,
        section: 'Tech',
        title: 'AI Breakthrough Announced',
        description: 'A leap forward in artificial intelligence technology A leap forward in artificial intelligence technology A leap forward in artificial intelligence technology .',
        content: 'A leap forward in artificial intelligence technology A leap forward in artificial intelligence technology A leap forward in artificial intelligence technology .',
        authorId: 5,
        publishDate: '2025-04-25',
        image: news1,
      },
      {
        id: 11,
        section: 'Medicine',
        title: 'New Vaccine Shows Promise',
        description: 'Early trials reveal promising results for new vaccine.',
        content: 'Early trials reveal promising results for new vaccine.',
        authorId: 6,
        publishDate: '2025-04-24',
        image: news2,
      },
      {
        id: 12,
        section: 'World',
        title: 'Historic Peace Treaty Signed',
        description: 'A historic moment as rival nations come together.',
        content: 'A historic moment as rival nations come together.',
        authorId: 7,
        publishDate: '2025-04-23',
        image: news3,
      },
      {
        id: 13,
        section: 'Politics',
        title: 'Election Results Announced',
        description: 'The nation braces for change as new leaders are elected.',
        content: 'The nation braces for change as new leaders are elected.',
        authorId: 8,
        publishDate: '2025-04-22',
        image: news4,
      },
      {
        id: 14,
        section: 'Tech',
        title: 'New Smartphone Model Released',
        description: 'The latest smartphone model hits the market with innovative features.',
        content: 'The latest smartphone model hits the market with innovative features.',
        authorId: 5,
        publishDate: '2025-04-21',
        image: news5,
      },
      {
        id: 15,
        section: 'Medicine',
        title: 'Breakthrough in Cancer Research',
        description: 'A new treatment shows promise in early trials.',
        content: 'A new treatment shows promise in early trials.',
        authorId: 6,
        publishDate: '2025-04-20',
        image: news6,
      },
      {
        id: 16,
        section: 'World',
        title: 'Natural Disaster Strikes Coastal City',
        description: 'A devastating earthquake hits the coastal city, causing widespread damage.',
        content: 'A devastating earthquake hits the coastal city, causing widespread damage.',
        authorId: 7,
        publishDate: '2025-04-19',
        image: news7,
      },
      {
        id: 17,
        section: 'Politics',
        title: 'New Policy Changes Announced',
        description: 'The government unveils new policies affecting various sectors.',
        content: 'The government unveils new policies affecting various sectors.',
        authorId: 8,
        publishDate: '2025-04-18',
        image: news8,
      },
      {
        id: 18,
        section: 'Tech',
        title: 'Cybersecurity Threats on the Rise',
        description: 'Experts warn of increasing cybersecurity threats in the digital age.',
        content: 'Experts warn of increasing cybersecurity threats in the digital age.',
        authorId: 5,
        publishDate: '2025-04-17',
        image: news9,
      }
    ]
  };
  

// full view articles (detaliile complete ale articolelor)
export const fullArticles = [
    {
      id: 1,
      section: 'Sports',
      title: 'Epic Comeback in Champions League',
      description: 'An incredible night of football drama as the underdogs triumph.',
      content: 'An incredible night of football drama as the underdogs triumph and secure a spot in the final. Details of the game and the celebrations that followed.',
      authorId: 1,
      publishDate: '2025-04-25',
      image: sport1,
    },
    {
      id: 2,
      section: 'News',
      title: 'Grand Slam Shock: Top Seed Out',
      description: 'A major upset at the prestigious Grand Slam tournament.',
      content: 'A major upset at the prestigious Grand Slam tournament as the top seed falls early. Analysis of the match and the implications for the rest of the tournament.',
      authorId: 2,
      publishDate: '2025-04-24',
      image: sport2,
    },
    {
      id: 3,
      section: 'Sports',
      title: 'New World Champion Crowned',
      description: 'Stunning finish at the Formula 1 season finale.',
      content: 'The season finale of Formula 1 saw a stunning finish as the new world champion was crowned. Recap of the final race and what this means for the sport.',
      authorId: 3,
      publishDate: '2025-04-23',
      image: sport3,
    },
    {
      id: 4,
      section: 'News',
      title: 'Historic Playoff Game Goes to Overtime',
      description: 'An NBA playoff game for the ages.',
      content: 'An NBA playoff game for the ages, with the game going into overtime after a dramatic final quarter. Highlights and key moments from the match.',
      authorId: 4,
      publishDate: '2025-04-22',
      image: sport4,
    },
    {
      id: 5,
      section: 'Sports',
      title: 'Rivalry Match Ends in Controversy',
      description: 'Controversial decision sparks fan debates.',
      content: 'A heated rivalry match ends with a controversial decision that has fans debating. A closer look at the controversial moments and fan reactions.',
      authorId: 1,
      publishDate: '2025-04-21',
      image: sport5,
    },
    {
      id: 6,
      section: 'News',
      title: 'Young Star Shines at Wimbledon',
      description: 'A young tennis player stuns top seeds.',
      content: 'A young tennis star takes the spotlight at Wimbledon, defeating some of the sport’s top players. A deep dive into the star’s performance and future prospects.',
      authorId: 2,
      publishDate: '2025-04-20',
      image: sport6,
    },
    {
      id: 7,
      section: 'Sports',
      title: 'Record-Breaking Lap Time Set',
      description: 'F1 lap record shocks the paddock.',
      content: 'Formula 1 fans are left stunned after a new lap record is set during the qualifying rounds. What made the lap so special, and how did it shape the race weekend?',
      authorId: 3,
      publishDate: '2025-04-19',
      image: sport7,
    },
    {
      id: 8,
      section: 'News',
      title: 'All-Star Game Highlights and Analysis',
      description: 'NBA All-Star Game delivers excitement.',
      content: 'The NBA All-Star Game lived up to the hype, with stunning plays and unforgettable moments. A breakdown of the key highlights and standout performances.',
      authorId: 4,
      publishDate: '2025-04-18',
      image: sport8,
    },
    {
      id: 9,
      section: 'Sports',
      title: 'Transfer Rumors Heat Up Ahead of Deadline Day',
      description: 'Major transfers could happen last minute.',
      content: 'The transfer window is nearing its deadline, and rumors are swirling about last-minute moves. A look at the biggest potential transfers and the teams involved.',
      authorId: 1,
      publishDate: '2025-04-17',
      image: sport9,
    },
    {
      id: 10,
      section: 'News',
      title: 'AI Breakthrough Announced',
      description: 'New AI capabilities redefine possibilities.',
      content: 'A groundbreaking development in AI has been announced, with new capabilities that could change the landscape of technology. Experts weigh in on what this means for the future.',
      authorId: 1,
      publishDate: '2025-04-25',
      image: news1,
    },
    {
      id: 11,
      section: 'News',
      title: 'Promising New Vaccine: A Significant Breakthrough in the Fight Against Infectious Diseases',
      description: 'New vaccine shows high efficacy in trials.',
      content: 'A newly developed vaccine has shown promising results in the early stages of clinical trials, offering hope in the battle against a wide range of diseases, from viral infections to bacterial diseases. Researchers worldwide have highlighted the importance of this vaccine, which utilizes innovative technology to stimulate the immune system. This vaccine is expected to play a key role in preventing epidemics and reducing the burden of chronic illnesses. Early tests have demonstrated higher efficacy compared to many existing vaccines, and health authorities are in discussions about approving it for widespread use. While further studies are needed, the future of this vaccine looks promising, with the potential to make a significant impact on global public health. A newly developed vaccine has shown promising results in the early stages of clinical trials, offering hope in the battle against a wide range of diseases, from viral infections to bacterial diseases. Researchers worldwide have highlighted the importance of this vaccine, which utilizes innovative technology to stimulate the immune system. This vaccine is expected to play a key role in preventing epidemics and reducing the burden of chronic illnesses. Early tests have demonstrated higher efficacy compared to many existing vaccines, and health authorities are in discussions about approving it for widespread use. While further studies are needed, the future of this vaccine looks promising, with the potential to make a significant impact on global public health.',
      authorId: 2,
      publishDate: '2025-04-24',
      image: news2,
    },
    {
      id: 12,
      section: 'News',
      title: 'Historic Peace Treaty Signed',
      description: 'Nations unite in historic agreement.',
      content: 'In a historic moment, rival nations have signed a peace treaty that will reshape the geopolitical landscape. Analysis of the treaty’s significance and potential impact.',
      authorId: 3,
      publishDate: '2025-04-23',
      image: news3,
    },
    {
      id: 13,
      section: 'News',
      title: 'Election Results Announced',
      description: 'New leadership takes the spotlight.',
      content: 'The nation braces for change as the results of the election are announced. A closer look at the winning candidates and the policies they will implement.',
      authorId: 4,
      publishDate: '2025-04-22',
      image: news4,
    },
    {
      id: 14,
      section: 'News',
      title: 'New Smartphone Model Released',
      description: 'Innovative features set this phone apart.',
      content: 'A new smartphone model has been released, boasting impressive features and innovations. A review of the new device and how it compares to its competitors.',
      authorId: 1,
      publishDate: '2025-04-21',
      image: news5,
    },
    {
      id: 15,
      section: 'News',
      title: 'Breakthrough in Cancer Research',
      description: 'New discovery offers treatment hope.',
      content: 'A significant breakthrough in cancer research promises new hope for treatment. Details on the research and how it could change the way we approach cancer care.',
      authorId: 2,
      publishDate: '2025-04-20',
      image: news6,
    },
    {
      id: 16,
      section: 'News',
      title: 'Natural Disaster Strikes Coastal City',
      description: 'Devastation and resilience on display.',
      content: 'A devastating natural disaster has struck a coastal city, leaving widespread destruction in its wake. Relief efforts and the community’s resilience are at the forefront.',
      authorId: 3,
      publishDate: '2025-04-19',
      image: news7,
    },
    {
      id: 17,
      section: 'News',
      title: 'New Policy Changes Announced',
      description: 'Major reforms to be implemented.',
      content: 'The government has announced new policy changes that will impact various sectors. A breakdown of the most significant changes and what they mean for citizens.',
      authorId: 4,
      publishDate: '2025-04-18',
      image: news8,
    },
    {
      id: 18,
      section: 'News',
      title: 'Cybersecurity Threats on the Rise',
      description: 'Experts warn of growing risks.',
      content: 'Experts are warning of an increase in cybersecurity threats as more data breaches are reported. A closer look at the most concerning trends in the world of digital security.',
      authorId: 1,
      publishDate: '2025-04-17',
      image: news9,
    },
    {
      id: 19,
      section: 'News',
      title: 'Global Markets Rally After Economic Report',
      description: 'Markets surge after positive news.',
      content: 'Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast.',
      authorId: 2,
      publishDate: '2025-04-26',
      image: news2,
    },
    {
      id: 20,
      section: 'News',
      title: 'Breakthrough Battery Technology Revealed',
      description: 'Minutes to charge, days to use.',
      content: 'A new battery could power devices for days with just minutes of charging.',
      authorId: 3,
      publishDate: '2025-04-26',
      image: news3,
    },
    {
      id: 21,
      section: 'Sports',
      title: 'Star Player Transfers to Rival Team',
      description: 'Shocking transfer shakes fanbase.',
      content: 'Fans react as a major player makes a shocking move across rival clubs.',
      authorId: 1,
      publishDate: '2025-04-26',
      image: sport1,
    },
    {
      id: 22,
      section: 'News',
      title: 'New Health Guidelines Announced',
      description: 'Health officials issue updated advice.',
      content: 'Updated health recommendations released for the general public.',
      authorId: 4,
      publishDate: '2025-04-26',
      image: news4,
    },
    {
      id: 23,
      section: 'News',
      title: 'Driver Sets Unbeatable Track Record',
      description: 'Performance defies expectations.',
      content: 'An unbelievable performance leaves fans and experts speechless.',
      authorId: 2,
      publishDate: '2025-04-26',
      image: sport2,
    }
  ];
  