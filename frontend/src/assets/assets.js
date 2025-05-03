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



// Latest Articles (5 articole recente)
export const latestArticles = [
    {
      id: 19,
      section: 'World',
      title: 'Global Markets Rally After Economic Report',
      description: 'Stocks around the world surged following a better-than-expected economic forecast.',
      authorName: 'Sophia Evans',
      authorImage: author2,
      publishDate: '2025-04-26',
      image: news2, // sau poți adăuga imagini noi dacă vrei
    },
    {
      id: 20,
      section: 'Tech',
      title: 'Breakthrough Battery Technology Revealed',
      description: 'A new battery could power devices for days with just minutes of charging.',
      authorName: 'Liam Martinez',
      authorImage: author3,
      publishDate: '2025-04-26',
      image: news3,
    },
    {
      id: 21,
      section: 'Football',
      title: 'Star Player Transfers to Rival Team',
      description: 'Fans react as a major player makes a shocking move across rival clubs.',
      authorName: 'Olivia Davis',
      authorImage: author1,
      publishDate: '2025-04-26',
      image: sport1,
    },
    {
      id: 22,
      section: 'Medicine',
      title: 'New Health Guidelines Announced',
      description: 'Updated health recommendations released for the general public.',
      authorName: 'Noah Johnson',
      authorImage: author4,
      publishDate: '2025-04-26',
      image: news4,
    },
    {
      id: 23,
      section: 'Formula1',
      title: 'Driver Sets Unbeatable Track Record',
      description: 'An unbelievable performance leaves fans and experts speechless.',
      authorName: 'Emma Thompson',
      authorImage: author2,
      publishDate: '2025-04-26',
      image: sport2,
    }
  ];
  


// Homepage Articles (9 per category: SPORTS and NEWS)
export const homepageArticles = {
    sports: [
        {
            id: 1,
            section: 'Football',
            title: 'Epic Comeback in Champions League',
            description: 'An incredible night of football drama as the underdogs triumph.',
            authorName: 'John Doe',
            authorImage: author1,
            publishDate: '2025-04-25',
            image: sport1,
        },
        {
            id: 2,
            section: 'Tennis',
            title: 'Grand Slam Shock: Top Seed Out',
            description: 'A stunning upset at the prestigious tournament.',
            authorName: 'Jane Smith',
            authorImage: author2,
            publishDate: '2025-04-24',
            image: sport2,
        },
        {
            id: 3,
            section: 'Formula1',
            title: 'New World Champion Crowned',
            description: 'A thrilling season finale in Formula 1 history.',
            authorName: 'Alex Johnson',
            authorImage: author3,
            publishDate: '2025-04-23',
            image: sport3,
        },
        {
            id: 4,
            section: 'Basketball',
            title: 'Historic Playoff Game Goes to Overtime',
            description: 'An unforgettable night in the NBA playoffs.',
            authorName: 'Chris Lee',
            authorImage: author4,
            publishDate: '2025-04-22',
            image: sport4,
        },
        {
            id: 5,
            section: 'Football',
            title: 'Rivalry Match Ends in Controversy',
            description: 'A heated match with a controversial ending.',
            authorName: 'John Doe',
            authorImage: author1,
            publishDate: '2025-04-21',
            image: sport5,
        },
        {
            id: 6,
            section: 'Tennis',
            title: 'Young Star Shines at Wimbledon',
            description: 'A new star emerges on the grass courts of Wimbledon.',
            authorName: 'Jane Smith',
            authorImage: author2,
            publishDate: '2025-04-20',
            image: sport6,
        },
        {
            id: 7,
            section: 'Formula1',
            title: 'Record-Breaking Lap Time Set',
            description: 'A new record set during the qualifying rounds.',
            authorName: 'Alex Johnson',
            authorImage: author3,
            publishDate: '2025-04-19',
            image: sport7,
        },
        {
            id: 8,
            section: 'Basketball',
            title: 'All-Star Game Highlights and Analysis',
            description: 'A recap of the best moments from the All-Star game.',
            authorName: 'Chris Lee',
            authorImage: author4,
            publishDate: '2025-04-18',
            image: sport8,
        },
        {
          id: 9,
          section: 'Football',
          title: 'Transfer Rumors Heat Up Ahead of Deadline Day',
          description:"As the transfer window approaches, clubs are scrambling to finalize deals.",
          authorName:'John Doe', 
          authorImage: author1, 
          publishDate:'2025-04-17', 
          image: sport9,
        },
    ],
    news: [
        {
            id: 10,
            section: 'Tech',
            title: 'AI Breakthrough Announced',
            description: 'A leap forward in artificial intelligence technology A leap forward in artificial intelligence technology A leap forward in artificial intelligence technology .',
            authorName: 'Emily Clark',
            authorImage: author1,
            publishDate: '2025-04-25',
            image: news1,
        },
        {
            id: 11,
            section: 'Medicine',
            title: 'New Vaccine Shows Promise',
            description: 'Early trials reveal promising results for new vaccine.',
            authorName: 'Michael Brown',
            authorImage: author2,
            publishDate: '2025-04-24',
            image: news2,
        },
        {
            id: 12,
            section: 'World',
            title: 'Historic Peace Treaty Signed',
            description: 'A historic moment as rival nations come together.',
            authorName: 'Sarah Wilson',
            authorImage: author3,
            publishDate: '2025-04-23',
            image: news3,
        },
        {
            id: 13,
            section: 'Politics',
            title: 'Election Results Announced',
            description: 'The nation braces for change as new leaders are elected.',
            authorName: 'David Taylor',
            authorImage: author4,
            publishDate: '2025-04-22',
            image: news4,
        },
        {
            id: 14,
            section: 'Tech',
            title: 'New Smartphone Model Released',
            description: 'The latest smartphone model hits the market with innovative features.',
            authorName: 'Emily Clark',
            authorImage: author1,
            publishDate: '2025-04-21',
            image: news5,
        },
        {
            id: 15,
            section: 'Medicine',
            title: 'Breakthrough in Cancer Research',
            description: 'A new treatment shows promise in early trials.',
            authorName: 'Michael Brown',
            authorImage: author2,
            publishDate: '2025-04-20',
            image: news6,
        },
        {
            id: 16,
            section: 'World',
            title: 'Natural Disaster Strikes Coastal City',
            description: 'A devastating earthquake hits the coastal city, causing widespread damage.',
            authorName: 'Sarah Wilson',
            authorImage: author3,
            publishDate: '2025-04-19',
            image: news7,
        },
        {
          id: 17,
          section:'Politics', 
          title:'New Policy Changes Announced', 
          description:'The government unveils new policies affecting various sectors.', 
          authorName:'David Taylor', 
          authorImage:author4, 
          publishDate:'2025-04-18', 
          image:news8,
        },
        {
          id: 18,
          section:'Tech', 
          title:'Cybersecurity Threats on the Rise', 
          description:'Experts warn of increasing cybersecurity threats in the digital age.', 
          authorName:'Emily Clark', 
          authorImage:author1, 
          publishDate:'2025-04-17', 
          image:news9,
        },
    ]
};

// full view articles (detaliile complete ale articolelor)
export const fullArticles = {
    1: {
        title: 'Epic Comeback in Champions League',
        image: sport1,
        content: 'An incredible night of football drama as the underdogs triumph and secure a spot in the final. Details of the game and the celebrations that followed.',
        authorName: 'John Doe',
        authorImage: author1,
        publishDate: '2025-04-25'
    },
    2: {
        title: 'Grand Slam Shock: Top Seed Out',
        image: sport2,
        content: 'A major upset at the prestigious Grand Slam tournament as the top seed falls early. Analysis of the match and the implications for the rest of the tournament.',
        authorName: 'Jane Smith',
        authorImage: author2,
        publishDate: '2025-04-24'
    },
    3: {
        title: 'New World Champion Crowned',
        image: sport3,
        content: 'The season finale of Formula 1 saw a stunning finish as the new world champion was crowned. Recap of the final race and what this means for the sport.',
        authorName: 'Alex Johnson',
        authorImage: author3,
        publishDate: '2025-04-23'
    },
    4: {
        title: 'Historic Playoff Game Goes to Overtime',
        image: sport4,
        content: 'An NBA playoff game for the ages, with the game going into overtime after a dramatic final quarter. Highlights and key moments from the match.',
        authorName: 'Chris Lee',
        authorImage: author4,
        publishDate: '2025-04-22'
    },
    5: {
        title: 'Rivalry Match Ends in Controversy',
        image: sport5,
        content: 'A heated rivalry match ends with a controversial decision that has fans debating. A closer look at the controversial moments and fan reactions.',
        authorName: 'John Doe',
        authorImage: author1,
        publishDate: '2025-04-21'
    },
    6: {
        title: 'Young Star Shines at Wimbledon',
        image: sport6,
        content: 'A young tennis star takes the spotlight at Wimbledon, defeating some of the sport’s top players. A deep dive into the star’s performance and future prospects.',
        authorName: 'Jane Smith',
        authorImage: author2,
        publishDate: '2025-04-20'
    },
    7: {
        title: 'Record-Breaking Lap Time Set',
        image: sport7,
        content: 'Formula 1 fans are left stunned after a new lap record is set during the qualifying rounds. What made the lap so special, and how did it shape the race weekend?',
        authorName: 'Alex Johnson',
        authorImage: author3,
        publishDate: '2025-04-19'
    },
    8: {
        title: 'All-Star Game Highlights and Analysis',
        image: sport8,
        content: 'The NBA All-Star Game lived up to the hype, with stunning plays and unforgettable moments. A breakdown of the key highlights and standout performances.',
        authorName: 'Chris Lee',
        authorImage: author4,
        publishDate: '2025-04-18'
    },
    9: {
        title: 'Transfer Rumors Heat Up Ahead of Deadline Day',
        image: sport9,
        content: 'The transfer window is nearing its deadline, and rumors are swirling about last-minute moves. A look at the biggest potential transfers and the teams involved.',
        authorName: 'John Doe',
        authorImage: author1,
        publishDate: '2025-04-17'
    },
    10: {
        title: 'AI Breakthrough Announced',
        image: news1,
        content: 'A groundbreaking development in AI has been announced, with new capabilities that could change the landscape of technology. Experts weigh in on what this means for the future.',
        authorName: 'Emily Clark',
        authorImage: author1,
        publishDate: '2025-04-25'
    },
    11: {
        title: 'Promising New Vaccine: A Significant Breakthrough in the Fight Against Infectious Diseases',
        image: news2,
        content: 'A newly developed vaccine has shown promising results in the early stages of clinical trials, offering hope in the battle against a wide range of diseases, from viral infections to bacterial diseases. Researchers worldwide have highlighted the importance of this vaccine, which utilizes innovative technology to stimulate the immune system. This vaccine is expected to play a key role in preventing epidemics and reducing the burden of chronic illnesses. Early tests have demonstrated higher efficacy compared to many existing vaccines, and health authorities are in discussions about approving it for widespread use. While further studies are needed, the future of this vaccine looks promising, with the potential to make a significant impact on global public health. A newly developed vaccine has shown promising results in the early stages of clinical trials, offering hope in the battle against a wide range of diseases, from viral infections to bacterial diseases. Researchers worldwide have highlighted the importance of this vaccine, which utilizes innovative technology to stimulate the immune system. This vaccine is expected to play a key role in preventing epidemics and reducing the burden of chronic illnesses. Early tests have demonstrated higher efficacy compared to many existing vaccines, and health authorities are in discussions about approving it for widespread use. While further studies are needed, the future of this vaccine looks promising, with the potential to make a significant impact on global public health.',
        authorName: 'Michael Brown',
        authorImage: author2,
        publishDate: '2025-04-24'
    },
    12: {
        title: 'Historic Peace Treaty Signed',
        image: news3,
        content: 'In a historic moment, rival nations have signed a peace treaty that will reshape the geopolitical landscape. Analysis of the treaty’s significance and potential impact.',
        authorName: 'Sarah Wilson',
        authorImage: author3,
        publishDate: '2025-04-23'
    },
    13: {
        title: 'Election Results Announced',
        image: news4,
        content: 'The nation braces for change as the results of the election are announced. A closer look at the winning candidates and the policies they will implement.',
        authorName: 'David Taylor',
        authorImage: author4,
        publishDate: '2025-04-22'
    },
    14: {
        title: 'New Smartphone Model Released',
        image: news5,
        content: 'A new smartphone model has been released, boasting impressive features and innovations. A review of the new device and how it compares to its competitors.',
        authorName: 'Emily Clark',
        authorImage: author1,
        publishDate: '2025-04-21'
    },
    15: {
        title: 'Breakthrough in Cancer Research',
        image: news6,
        content: 'A significant breakthrough in cancer research promises new hope for treatment. Details on the research and how it could change the way we approach cancer care.',
        authorName: 'Michael Brown',
        authorImage: author2,
        publishDate: '2025-04-20'
    },
    16: {
        title: 'Natural Disaster Strikes Coastal City',
        image: news7,
        content: 'A devastating natural disaster has struck a coastal city, leaving widespread destruction in its wake. Relief efforts and the community’s resilience are at the forefront.',
        authorName: 'Sarah Wilson',
        authorImage: author3,
        publishDate: '2025-04-19'
    },
    17: {
        title: 'New Policy Changes Announced',
        image: news8,
        content: 'The government has announced new policy changes that will impact various sectors. A breakdown of the most significant changes and what they mean for citizens.',
        authorName: 'David Taylor',
        authorImage: author4,
        publishDate: '2025-04-18'
    },
    18: {
        title: 'Cybersecurity Threats on the Rise',
        image: news9,
        content: 'Experts are warning of an increase in cybersecurity threats as more data breaches are reported. A closer look at the most concerning trends in the world of digital security.',
        authorName: 'Emily Clark',
        authorImage: author1,
        publishDate: '2025-04-17'
    },
    19: {
        title: 'Global Markets Rally After Economic Report',
        image: news2,
        content: 'Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast.',
        authorName: 'Sophia Evans',
        authorImage: author2,
        publishDate: '2025-04-26'
    },
    20: {
        title: 'Breakthrough Battery Technology Revealed',
        image: news3,
        content: 'A new battery could power devices for days with just minutes of charging.',
        authorName: 'Liam Martinez',
        authorImage: author3,
        publishDate: '2025-04-26'
    },
    21: {
        title: 'Star Player Transfers to Rival Team',
        image: sport1,
        content: 'Fans react as a major player makes a shocking move across rival clubs.',
        authorName: 'Olivia Davis',
        authorImage: author1,
        publishDate: '2025-04-26'
    },
    22: {
        title: 'New Health Guidelines Announced',
        image: news4,
        content: 'Updated health recommendations released for the general public.',
        authorName: 'Noah Johnson',
        authorImage: author4,
        publishDate: '2025-04-26'
    },
    23: {
        title: 'Driver Sets Unbeatable Track Record',
        image: sport2,
        content: 'An unbelievable performance leaves fans and experts speechless.',
        authorName: 'Emma Thompson',
        authorImage: author2,
        publishDate: '2025-04-26'
    }
};
