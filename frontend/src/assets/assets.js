import notificationIcon from './notif.png';
import savedIcon from './saved.png';
import searchIcon from './search.png';
import userIcon from './user.png';
import logo from './logo.jpg';
import admin from './admin.jpg';
import savedWhite from './savedWhite.png'
import userWhite from './userWhite.png'
import user from './user.jpg'
import newUser from './newUser.jpg'


import latest1 from './latest1.jpg'
import latest2 from './latest2.jpg'
import latest3 from './latest3.jpg'
import latest4 from './latest4.jpg'
import latest5 from './latest5.jpg'

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
    savedWhite,
    searchIcon,
    userIcon,
    userWhite,
    logo,
    admin,
    user,
    newUser,
    latest1,
    latest1,
    latest3,
    latest4,
    latest5,
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
        section: 'Sports',
        name: 'John Doe',
        image: author1,
    },
    {
        id: 2,
        section: 'News',
        name: 'Jane Smith',
        image: author2,
    },
    {
        id: 3,
        section: 'Sports',
        name: 'Alex Johnson',
        image: author3,
    },
    {
        id: 4,
        section: 'News',
        name: 'Chris Lee',
        image: author4,
    },
    {
        id: 5,
        section: 'News',
        name: 'Sophia Evans',
        image: author1, // Sau un alt asset relevant
    },
    {
        id: 6,
        section: 'News',
        name: 'Liam Martinez',
        image: author2,
    },
    {
        id: 7,
        section: 'Sports',
        name: 'Olivia Davis',
        image: author3,
    },
    {
        id: 8,
        section: 'News',
        name: 'Noah Johnson',
        image: author4,
    },
    {
        id: 9,
        section: 'Sports',
        name: 'Emma Thompson',
        image: author1,
    },
    {
        id: 10,
        section: 'News',
        name: 'Emily Clark',
        image: author2,
    },
    {
        id: 11,
        section: 'News',
        name: 'Michael Brown',
        image: author3,
    },
    {
        id: 12,
        section: 'News',
        name: 'Sarah Wilson',
        image: author1,
    },
    {
        id: 13,
        section: 'News',
        name: 'David Taylor',
        image: author4,
    },    
];

const getAuthorIdByName = (name) => {
    const author = authors.find(author => author.name === name);
    return author ? author.id : null;
};

// Latest Articles (5 articole recente)
export const latestArticles = [
    {
        id: 19,
        section: 'World',
        title: 'Global Markets Rally After Economic Report',
        description: 'Stocks around the world surged following a better-than-expected economic forecast.',
        authorId: getAuthorIdByName('Sophia Evans'),
        publishDate: '2025-04-26',
        image: latest1,
    },
    {
        id: 20,
        section: 'Tech',
        title: 'Breakthrough Battery Technology Revealed',
        description: 'A new battery could power devices for days with just minutes of charging.',
        authorId: getAuthorIdByName('Liam Martinez'),
        publishDate: '2025-04-26',
        image: latest2,
    },
    {
        id: 21,
        section: 'Football',
        title: 'Star Player Transfers to Rival Team',
        description: 'Fans react as a major player makes a shocking move across rival clubs.',
        authorId: getAuthorIdByName('Olivia Davis'),
        publishDate: '2025-04-26',
        image: latest3,
    },
    {
        id: 22,
        section: 'Medicine',
        title: 'New Health Guidelines Announced',
        description: 'Updated health recommendations released for the general public.',
        authorId: getAuthorIdByName('Noah Johnson'),
        publishDate: '2025-04-26',
        image: latest4,
    },
    {
        id: 23,
        section: 'Formula1',
        title: 'Driver Sets Unbeatable Track Record',
        description: 'An unbelievable performance leaves fans and experts speechless.',
        authorId: getAuthorIdByName('Emma Thompson'),
        publishDate: '2025-04-26',
        image: latest5,
    }
];



export const homepageArticles = {
    sports: [
        {
            id: 1,
            section: 'Football',
            title: 'Epic Comeback in Champions League',
            description: 'An incredible night of football drama as the underdogs triumph.',
            authorId: getAuthorIdByName('John Doe'),
            publishDate: '2025-04-25',
            image: sport1,
        },
        {
            id: 2,
            section: 'Tennis',
            title: 'Grand Slam Shock: Top Seed Out',
            description: 'A stunning upset at the prestigious tournament.',
            authorId: getAuthorIdByName('Jane Smith'),
            publishDate: '2025-04-24',
            image: sport2,
        },
        {
            id: 3,
            section: 'Formula1',
            title: 'New World Champion Crowned',
            description: 'A thrilling season finale in Formula 1 history.',
            authorId: getAuthorIdByName('Alex Johnson'),
            publishDate: '2025-04-23',
            image: sport3,
        },
        {
            id: 4,
            section: 'Basketball',
            title: 'Historic Playoff Game Goes to Overtime',
            description: 'An unforgettable night in the NBA playoffs.',
            authorId: getAuthorIdByName('Chris Lee'),
            publishDate: '2025-04-22',
            image: sport4,
        },
        {
            id: 5,
            section: 'Football',
            title: 'Rivalry Match Ends in Controversy',
            description: 'A heated match with a controversial ending.',
            authorId: getAuthorIdByName('John Doe'),
            publishDate: '2025-04-21',
            image: sport5,
        },
        {
            id: 6,
            section: 'Tennis',
            title: 'Young Star Shines at Wimbledon',
            description: 'A new star emerges on the grass courts of Wimbledon.',
            authorId: getAuthorIdByName('Jane Smith'),
            publishDate: '2025-04-20',
            image: sport6,
        },
        {
            id: 7,
            section: 'Formula1',
            title: 'Record-Breaking Lap Time Set',
            description: 'A new record set during the qualifying rounds.',
            authorId: getAuthorIdByName('Alex Johnson'),
            publishDate: '2025-04-19',
            image: sport7,
        },
        {
            id: 8,
            section: 'Basketball',
            title: 'All-Star Game Highlights and Analysis',
            description: 'A recap of the best moments from the All-Star game.',
            authorId: getAuthorIdByName('Chris Lee'),
            publishDate: '2025-04-18',
            image: sport8,
        },
        {
            id: 9,
            section: 'Football',
            title: 'Transfer Rumors Heat Up Ahead of Deadline Day',
            description: "As the transfer window approaches, clubs are scrambling to finalize deals.",
            authorId: getAuthorIdByName('John Doe'),
            publishDate: '2025-04-17',
            image: sport9,
        },
    ],
    news: [
        {
            id: 10,
            section: 'Tech',
            title: 'AI Breakthrough Announced',
            description: 'A leap forward in artificial intelligence technology A leap forward in artificial intelligence technology A leap forward in artificial intelligence technology.',
            authorId: getAuthorIdByName('Emily Clark'),
            publishDate: '2025-04-25',
            image: news1,
        },
        {
            id: 11,
            section: 'Medicine',
            title: 'New Vaccine Shows Promise',
            description: 'Early trials reveal promising results for new vaccine.',
            authorId: getAuthorIdByName('Michael Brown'),
            publishDate: '2025-04-24',
            image: news2,
        },
        {
            id: 12,
            section: 'World',
            title: 'Historic Peace Treaty Signed',
            description: 'A historic moment as rival nations come together.',
            authorId: getAuthorIdByName('Sarah Wilson'),
            publishDate: '2025-04-23',
            image: news3,
        },
        {
            id: 13,
            section: 'Politics',
            title: 'Election Results Announced',
            description: 'The nation braces for change as new leaders are elected.',
            authorId: getAuthorIdByName('David Taylor'),
            publishDate: '2025-04-22',
            image: news4,
        },
        {
            id: 14,
            section: 'Tech',
            title: 'New Smartphone Model Released',
            description: 'The latest smartphone model hits the market with innovative features.',
            authorId: getAuthorIdByName('Emily Clark'),
            publishDate: '2025-04-21',
            image: news5,
        },
        {
            id: 15,
            section: 'Medicine',
            title: 'Breakthrough in Cancer Research',
            description: 'A new treatment shows promise in early trials.',
            authorId: getAuthorIdByName('Michael Brown'),
            publishDate: '2025-04-20',
            image: news6,
        },
        {
            id: 16,
            section: 'World',
            title: 'Natural Disaster Strikes Coastal City',
            description: 'A devastating earthquake hits the coastal city, causing widespread damage.',
            authorId: getAuthorIdByName('Sarah Wilson'),
            publishDate: '2025-04-19',
            image: news7,
        },
        {
            id: 17,
            section: 'Politics',
            title: 'New Policy Changes Announced',
            description: 'The government unveils new policies affecting various sectors.',
            authorId: getAuthorIdByName('David Taylor'),
            publishDate: '2025-04-18',
            image: news8,
        },
        {
            id: 18,
            section: 'Tech',
            title: 'Cybersecurity Threats on the Rise',
            description: 'Experts warn of increasing cybersecurity threats in the digital age.',
            authorId: getAuthorIdByName('Emily Clark'),
            publishDate: '2025-04-17',
            image: news9,
        },
    ]
};


export const fullArticles = {
    // Sports articles (1-9)
    1: {
        id: 1,
        section: 'Football',
        title: 'Epic Comeback in Champions League',
        image: sport1,
        content: 'An incredible night of football drama as the underdogs triumph and secure a spot in the final. Details of the game and the celebrations that followed.',
        authorId: getAuthorIdByName('John Doe'),
        publishDate: '2025-04-25'
    },
    2: {
        id: 2,
        section: 'Tennis',
        title: 'Grand Slam Shock: Top Seed Out',
        image: sport2,
        content: 'A major upset at the prestigious Grand Slam tournament as the top seed falls early. Analysis of the match and the implications for the rest of the tournament.',
        authorId: getAuthorIdByName('Jane Smith'),
        publishDate: '2025-04-24'
    },
    3: {
        id: 3,
        section: 'Formula1',
        title: 'New World Champion Crowned',
        image: sport3,
        content: 'The season finale of Formula 1 saw a stunning finish as the new world champion was crowned. Recap of the final race and what this means for the sport.',
        authorId: getAuthorIdByName('Alex Johnson'),
        publishDate: '2025-04-23'
    },
    4: {
        id: 4,
        section: 'Basketball',
        title: 'Historic Playoff Game Goes to Overtime',
        image: sport4,
        content: 'An NBA playoff game for the ages, with the game going into overtime after a dramatic final quarter. Highlights and key moments from the match.',
        authorId: getAuthorIdByName('Chris Lee'),
        publishDate: '2025-04-22'
    },
    5: {
        id: 5,
        section: 'Football',
        title: 'Rivalry Match Ends in Controversy',
        image: sport5,
        content: 'A heated rivalry match ends with a controversial decision that has fans debating. A closer look at the controversial moments and fan reactions.',
        authorId: getAuthorIdByName('John Doe'),
        publishDate: '2025-04-21'
    },
    6: {
        id: 6,
        section: 'Tennis',
        title: 'Young Star Shines at Wimbledon',
        image: sport6,
        content: 'A young tennis star takes the spotlight at Wimbledon, defeating some of the sports top players.A deep dive into the stars performance and future prospects.',
        authorId: getAuthorIdByName('Jane Smith'),
        publishDate: '2025-04-20'
    },
    7: {
        id: 7,
        section: 'Formula1',
        title: 'Record-Breaking Lap Time Set',
        image: sport7,
        content: 'Formula 1 fans are left stunned after a new lap record is set during the qualifying rounds. What made the lap so special, and how did it shape the race weekend?',
        authorId: getAuthorIdByName('Alex Johnson'),
        publishDate: '2025-04-19'
    },
    8: {
        id: 8,
        section: 'Basketball',
        title: 'All-Star Game Highlights and Analysis',
        image: sport8,
        content: 'The NBA All-Star Game lived up to the hype, with stunning plays and unforgettable moments. A breakdown of the key highlights and standout performances.',
        authorId: getAuthorIdByName('Chris Lee'),
        publishDate: '2025-04-18'
    },
    9: {
        id: 9,
        section: 'Football',
        title: 'Transfer Rumors Heat Up Ahead of Deadline Day',
        image: sport9,
        content: 'The transfer window is nearing its deadline, and rumors are swirling about last-minute moves. A look at the biggest potential transfers and the teams involved.',
        authorId: getAuthorIdByName('John Doe'),
        publishDate: '2025-04-17'
    },

    // News articles (10-18)
    10: {
        id: 10,
        section: 'Tech',
        title: 'AI Breakthrough Announced',
        image: news1,
        content: 'A groundbreaking development in AI has been announced, with new capabilities that could change the landscape of technology. Experts weigh in on what this means for the future.',
        authorId: getAuthorIdByName('Emily Clark'),
        publishDate: '2025-04-25'
    },
    11: {
        id: 11,
        section: 'Medicine',
        title: 'Promising New Vaccine: A Significant Breakthrough in the Fight Against Infectious Diseases',
        image: news2,
        content: 'A newly developed vaccine has shown promising results in the early stages of clinical trials, offering hope in the battle against a wide range of diseases, from viral infections to bacterial diseases. Researchers worldwide have highlighted the importance of this vaccine, which utilizes innovative technology to stimulate the immune system. This vaccine is expected to play a key role in preventing epidemics and reducing the burden of chronic illnesses. Early tests have demonstrated higher efficacy compared to many existing vaccines, and health authorities are in discussions about approving it for widespread use. While further studies are needed, the future of this vaccine looks promising, with the potential to make a significant impact on global public health.',
        authorId: getAuthorIdByName('Michael Brown'),
        publishDate: '2025-04-24'
    },
    12: {
        id: 12,
        section: 'World',
        title: 'Historic Peace Treaty Signed',
        image: news3,
        content: 'In a historic moment, rival nations have signed a peace treaty that will reshape the geopolitical landscape. Analysis of the treatys significance and potential impact.',
      authorId: getAuthorIdByName('Sarah Wilson'),
        publishDate: '2025-04-23'
    },
    13: {
        id: 13,
        section: 'Politics',
        title: 'Election Results Announced',
        image: news4,
        content: 'The nation braces for change as the results of the election are announced. A closer look at the winning candidates and the policies they will implement.',
        authorId: getAuthorIdByName('David Taylor'),
        publishDate: '2025-04-22'
    },
    14: {
        id: 14,
        section: 'Tech',
        title: 'New Smartphone Model Released',
        image: news5,
        content: 'A new smartphone model has been released, boasting impressive features and innovations. A review of the new device and how it compares to its competitors.',
        authorId: getAuthorIdByName('Emily Clark'),
        publishDate: '2025-04-21'
    },
    15: {
        id: 15,
        section: 'Medicine',
        title: 'Breakthrough in Cancer Research',
        image: news6,
        content: 'A significant breakthrough in cancer research promises new hope for treatment. Details on the research and how it could change the way we approach cancer care.',
        authorId: getAuthorIdByName('Michael Brown'),
        publishDate: '2025-04-20'
    },
    16: {
        id: 16,
        section: 'World',
        title: 'Natural Disaster Strikes Coastal City',
        image: news7,
        content: 'A devastating natural disaster has struck a coastal city, leaving widespread destruction in its wake. Relief efforts and the communitys resilience are at the forefront.',
        authorId: getAuthorIdByName('Sarah Wilson'),
        publishDate: '2025-04-19'
    },
    17: {
        id: 17,
        section: 'Politics',
        title: 'New Policy Changes Announced',
        image: news8,
        content: 'The government has announced new policy changes that will impact various sectors. A breakdown of the most significant changes and what they mean for citizens.',
        authorId: getAuthorIdByName('David Taylor'),
        publishDate: '2025-04-18'
    },
    18: {
        id: 18,
        section: 'Tech',
        title: 'Cybersecurity Threats on the Rise',
        image: news9,
        content: 'Experts are warning of an increase in cybersecurity threats as more data breaches are reported. A closer look at the most concerning trends in the world of digital security.',
        authorId: getAuthorIdByName('Emily Clark'),
        publishDate: '2025-04-17'
    },

    // Latest articles (19-23)
    19: {
        id: 19,
        section: 'World',
        title: 'Global Markets Rally After Economic Report',
        image: latest1,
        content: 'Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast. Stocks around the world surged following a better-than-expected economic forecast.',
        authorId: getAuthorIdByName('Sophia Evans'),
        publishDate: '2025-04-26'
    },
    20: {
        id: 20,
        section: 'Tech',
        title: 'Breakthrough Battery Technology Revealed',
        image: latest2,
        content: 'A new battery could power devices for days with just minutes of charging. This revolutionary technology promises to transform how we use portable electronics and electric vehicles.',
        authorId: getAuthorIdByName('Liam Martinez'),
        publishDate: '2025-04-26'
    },
    21: {
        id: 21,
        section: 'Football',
        title: 'Star Player Transfers to Rival Team',
        image: latest3,
        content: 'Fans react as a major player makes a shocking move across rival clubs. The transfer has sent shockwaves through the sporting world and changed the landscape of the upcoming season.',
        authorId: getAuthorIdByName('Olivia Davis'),
        publishDate: '2025-04-26'
    },
    22: {
        id: 22,
        section: 'Medicine',
        title: 'New Health Guidelines Announced',
        image: latest4,
        content: 'Updated health recommendations released for the general public. These new guidelines reflect the latest research and aim to improve public health outcomes across all demographics.',
        authorId: getAuthorIdByName('Noah Johnson'),
        publishDate: '2025-04-26'
    },
    23: {
        id: 23,
        section: 'Formula1',
        title: 'Driver Sets Unbeatable Track Record',
        image: latest5,
        content: 'An unbelievable performance leaves fans and experts speechless. The record-breaking lap has set a new standard in motorsport that many believe will stand for years to come.',
        authorId: getAuthorIdByName('Emma Thompson'),
        publishDate: '2025-04-26'
    }
};