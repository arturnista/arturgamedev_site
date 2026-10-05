const CURRENT_YEAR = 2026;

// Skills data with start years
const skills = [
    {
        name: "Unity 3D",
        icon: "/img/unity-logo.png",
        startYear: 2017,
        enabled: true
    },
    {
        name: "C#",
        icon: "/img/csharp-logo.png", 
        startYear: 2017,
        enabled: true
    },
    {
        name: "Javascript",
        icon: "/img/js-logo.png",
        startYear: 2016,
        enabled: false
    },
    {
        name: "HTML / CSS",
        icon: "/img/htmlcss-logo.png",
        startYear: 2016,
        enabled: false
    },
    {
        name: "PHP",
        icon: "/img/php-logo.png",
        startYear: 2016,
        enabled: false
    }
];

// Games organized by categories
const games = {
    sideProjects: [
        {
            title: "Lady of the Colors",
            link: "/games/color",
            shortDescription: "Platform puzzle game inspired by Celeste. Fly through obstacles using a unique fuel system.",
            enabled: true,
            description: [
                "Platform with puzzles. You can fly to avoid obstacles and get close to your objective.",
                "Game developed in Unity 3D, with more focus on game and level design.",
                "This game is heavily inspired by Celeste, as my intentions were to create a platform with a little set of player mechanics, that could be changed and developed using interesting level design.",
                "The development follows a composition strategy, as every components is self-contained, working independent of others.",
                "For example, in the game you can fly. This action consume fly fuel, that can be refilled collecting some special objects, like refill orbs and save points. Every object that refills your fly fuel, has the same component, that the only purpose is to refill your fuel.",
                "This design helps a lot with building new features and mechanics, because you can create fun interactions only plugging together small features."
            ],
            cssClass: "",
            images: [
                "/img/lady/SS_20200703001848.png",
                "/img/lady/SS_20200703001938.png",
                "/img/lady/SS_20200703002049.png",
                "/img/lady/SS_20200703002149.png",
                "/img/lady/SS_20200703002154.png",
                "/img/lady/SS_20200703002214.png",
                "/img/lady/SS_20200703002234.png",
                "/img/lady/SS_20200703002532.png",
                "/img/lady/SS_20200703002552.png",
                "/img/lady/SS_20200703002636.png",
                "/img/lady/SS_20200703002719.png"
            ],
            highlightedIndices: [2, 5], // indices of paragraphs that should have 'text-sep' class (approximate logic, or I can store paragraphs as objects)
            // Actually, let's store description as objects to handle classes like 'text-sep'
        },
        {
            title: "Colorless Ruins",
            link: "http://armor.ag/ColorlessRuins",
            shortDescription: "Top-down arcade game. Navigate a forgotten realm, avoid enemies, and find your way home.",
            enabled: true,
            description: [
                { text: "In Colorless Ruins you move around a forgotten realm, avoiding enemies, collecting keys and trying to find a way back home.", class: "justify" },
                { text: "Game developed in Unity 3D, for Arcade Jam 2.", class: "justify" },
                { text: "The game is short and have a simple ideia of a very popular genre on mobile. The twist of moving freely comes from initial development stage, where I found that changing directions between movement was fun.", class: "justify text-sep" },
                { text: "My objective with developing this game was make something small, but very polished. Being an arcade game, I also added some secrets and challenges.", class: "justify" },
                { text: "A Games Wizard at Armor Games liked my game and invited me to upload the game to Armor Games.", class: "justify text-sep" },
                { text: "Right now, it has more than <strong>20.000 plays</strong> and an <strong>78 score</strong>, which, in my opinion, is pretty good.", class: "justify" }
            ],
            cssClass: "color",
            images: [
                "/img/colorless/SS_20200503124130.png",
                "/img/colorless/SS_20200503124135.png",
                "/img/colorless/SS_20200503124140.png",
                "/img/colorless/SS_20200503124155.png",
                "/img/colorless/SS_20200503124205.png",
                "/img/colorless/SS_20200503124220.png",
                "/img/colorless/SS_20200503124250.png",
                "/img/colorless/SS_20200503124330.png",
                "/img/colorless/SS_20200503124420.png",
                "/img/colorless/SS_20200503124440.png",
                "/img/colorless/SS_20200503124445.png",
                "/img/colorless/SS_20200503124515.png",
                "/img/colorless/SS_20200503124530.png"
            ]
        },
        {
            title: "Mage Arena",
            link: "https://beta-magearena.herokuapp.com/",
            shortDescription: "Online multiplayer battle arena. Cast spells to knock opponents out of the arena.",
            enabled: false,
            description: [
                { text: "Online Battle Arena with a Smash Bros like mechanic, where your objective is to throw your enemies out of the arena using spells.", class: "justify" },
                { text: "The Backend of the game was built using Node.js and socket.io for the client-server communication. The Frontend was built using React and PIXI.js as the rendering engine. The art was also done by me.", class: "justify" },
                { text: "My mainly motivation for creating this game was learn to build a multiplayer game. The server was my focus, as I come from a web background. I wanted to create an engine that could be easy to develop new features and have multiple games running at the same time.", class: "justify text-sep" },
                { text: "I used a Component System, like Unity3D uses. Each entity could have multiple components, like being an Physics entity, having an AI (like a bot), having buffs and debuffs, and any other component.", class: "justify" },
                { text: "In the first version of the server architecture the same Node process handled multiple game servers. This was a problem because os some reasons:", class: "justify" },
                { text: "Node being single thread, multiple games can be a problem for the engine. This could become very heavy on the machine because multiple connections would be open in the same process. And, as an indie game, it has some bugs. Sometimes the server crash and all games go down.", class: "justify" },
                { text: "Then I updated the server to be handled by multiple process. Each game is a different process created by the main server and can handles themself.", class: "justify text-sep" },
                { text: "Today all games run in the same machine, budgets reasons, but, they can run in multiples servers. That way, the problem of multiple connections in the same machine would be solved. And, if a game crashing bug happens, only that game would go down, not messing up with other servers.", class: "justify" },
                { text: "I've also came up with the challenge of developing my own physics engine. Since it's a top-down game, I could use a collision handler to manage most of the events, not needing any fancy implementation.", class: "justify" }
            ],
            cssClass: "nw",
            images: [
                "/img/magearena/Screenshot_0.png",
                "/img/magearena/Screenshot_5.png",
                "/img/magearena/Screenshot_2.png",
                "/img/magearena/Screenshot_3.png",
                "/img/magearena/Screenshot_4.png",
                "/img/magearena/Screenshot_6.png",
                "/img/magearena/Screenshot_1.png",
                "/img/magearena/Screenshot_7.png",
                "/img/magearena/Screenshot_8.png",
                "/img/magearena/Screenshot_9.png",
                "/img/magearena/Screenshot_0.png",
                "/img/magearena/Screenshot_5.png",
                "/img/magearena/Screenshot_2.png",
                "/img/magearena/Screenshot_3.png",
                "/img/magearena/Screenshot_4.png",
                "/img/magearena/Screenshot_6.png",
                "/img/magearena/Screenshot_1.png",
                "/img/magearena/Screenshot_7.png"
            ]
        },
        {
            title: "C Jumper",
            link: "https://play.google.com/store/apps/details?id=com.ttgames.cjumper",
            shortDescription: "Infinite runner mobile game. Jump and dash through obstacles to collect diamonds.",
            enabled: false,
            description: [
                { text: "Casual infinite runner, where you jump and dash to avoid obstacles and collect diamonds, unlocking new scenarios.", class: "justify" },
                { text: "Pretty casual game made in a couple of weeks. Made in my vacation time, as a challenge to develop and release a full game.", class: "justify" },
                { text: "The main loop is pretty fun and entertaining, just have to work on the \"game feel\" and \"juiciness\" of the game.", class: "justify" },
                { text: "In this project I approached an Event Driven System, where every action (Player Jump, Player Dash, Player Gain Point, Player Die) would dispatch an event and other entities or objects would react to that.", class: "justify" },
                { text: "Sounds are played on events, UI elements are shown and hidden based on dispatched events, etc.", class: "justify text-sep" },
                { text: "So, when I need to create new features, I just need to listen to the events and react to them.", class: "justify" },
                { text: "For example, was very easy to develop achievements, because they just react to events.", class: "justify" }
            ],
            cssClass: "cjumper",
            images: [
                "/img/jumper/Screenshot_20200402-182923.png",
                "/img/jumper/Screenshot_20200402-183010.png",
                "/img/jumper/Screenshot_20200402-183017.png",
                "/img/jumper/Screenshot_20200402-183031.png",
                "/img/jumper/Screenshot_20200402-183046.png",
                "/img/jumper/Screenshot_20200402-183111.png",
                "/img/jumper/Screenshot_20200402-183218.png",
                "/img/jumper/Screenshot_20200402-183309.png",
                "/img/jumper/Screenshot_20200402-183346.png",
                "/img/jumper/Screenshot_20200402-183445.png",
                "/img/jumper/Screenshot_20200402-183458.png"
            ]
        },
        {
            title: "Destruction chain",
            link: "https://play.google.com/store/apps/details?id=com.tutugames.chaindestruct",
            shortDescription: "Top-down space shooter. Create explosive chain reactions with every enemy you destroy.",
            enabled: false,
            description: [
                { text: "Casual top-down spaceship shooting game, where every hit causes a chain reaction, creating more projectiles every time you kill an enemy.", class: "justify" },
                { text: "This was my first released game. I was encouraged by some coworkers to publish for mobile after I showed them the PC version.", class: "justify" },
                { text: "I developed the initial idea and starting testing some input schemas. My first thought was that pressing where you want to shoot was too easy", class: "justify" },
                { text: "After showing to some people, the natural reaction from everyone was to click where you want to shoot.", class: "justify text-sep" },
                { text: "After that, I became adding goals, enemy powers and other minnor tweaks.", class: "justify" },
                { text: "The sound is missing, but I'm aiming at adding basic music and SFX soon.", class: "justify" }
            ],
            cssClass: "destruct",
            images: []
        },
        {
            title: "Retro FPS",
            link: "/games/fps",
            shortDescription: "Fast-paced first-person shooter. Battle through futuristic levels with retro-inspired gameplay.",
            enabled: false,
            description: [
                { text: "A futuristic FPS short game, with some expiration on retro FPS games (fast movement and no gun limit).", class: "justify" },
                { text: "One of my first 3D games and my first linear game, with a simple plot.", class: "justify" },
                { text: "All assets are from Asset Store, besides some very simple stuff, like the Flying Demon and the glass walls.", class: "justify" },
                { text: "I learned to create animations in 3D (all guns animations are done by me). Developed some basic AI for the enemies and coded all the player movement and mechanics.", class: "justify text-sep" },
                { text: "The core gameplay is heavy based on retro FPS, like Half-Life and DOOM. The mechanics, like the fast movement, are complemented with the enemies.", class: "justify" },
                { text: "Enemies was designed to keep the player in movement. The cyclop follow you around and the flying demon attack your position with projectiles.", class: "justify text-sep" },
                { text: "I also try to vary the battle strategies changing the level design. Corredors and small rooms are opposed with big and open areas, chaning the player style of fighting the enemies.", class: "justify" }
            ],
            cssClass: "fps",
            images: []
        },
{
            title: "Web Thresh Game",
            link: "/games/webthreshgame",
            shortDescription: "Souls collection game. Gather souls to upgrade Thresh's hook abilities in this weekend jam project.",
            enabled: true,
            description: [
                { text: "Simple game that your objective is to collect souls for Thresh. You can upgrade your hook with this souls.", class: "justify" },
                { text: "Developed in a single weekend, with a small set of modifications done after that.", class: "justify" },
                { text: "This game was done with a team of four, with the aim to improve our code skills, in a kind of self made Gamejam.", class: "justify" },
                { text: "My first game developed in a group of people, which improved my communication, decision making and coding skill overall.", class: "justify" }
            ],
            team: [
                { name: "Gabriel Machado", link: "https://github.com/machadogab" },
                { name: "João Teló", link: "https://github.com/moharu" },
                { name: "Matheus Pereira", link: "https://www.linkedin.com/in/matheus-pereira-232544144" }
            ],
            cssClass: "webthreshgame",
            images: []
        },
        {
            title: "Time Dungeon",
            link: "https://www.newgrounds.com/portal/view/834048",
            shortDescription: "Turn-based dungeon crawler where every action consumes resources. Manage your actions and health to survive.",
            enabled: true,
            description: [
                { text: "Find a way out and save yourself from the mysterious dungeon.", class: "justify" },
                { text: "Every action you perform consumes action points. If you run out of actions, your health reduces.", class: "justify" },
                { text: "If you run out of health, you DIE. Find items, fight enemies, become stronger, and leave the dungeon.", class: "justify text-sep" },
                { text: "A strategic dungeon crawler that tests your resource management and decision-making skills.", class: "justify" }
            ],
            cssClass: "timedungeon",
            images: []
        }
    ],
    commercialProjects: [
        // Empty for now - ready for future commercial projects
    ]
};

module.exports = {
    games,
    skills,
    CURRENT_YEAR
};