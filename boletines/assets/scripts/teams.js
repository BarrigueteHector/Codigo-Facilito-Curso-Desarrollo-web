// Paso 1: Crea un objeto con los nombres de los equipos y las URL de los logotipos
var teams = {
    SF: {
        name: "49ers",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/SF"
    },
    Bears: {
        name: "Bears",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/CHI"
    },
    Bengals: {
        name: "Bengals",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/CIN"
    },
    Bills: {
        name: "Bills",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/BUF"
    },
    Broncos: {
        name: "Broncos",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/DEN"
    },
    Browns: {
        name: "Browns",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/CLE"
    },
    Buccaneers: {
        name: "Buccaneers",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/TB"
    },
    Cardinals: {
        name: "Cardinals",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/ARI"
    },
    Chargers: {
        name: "Chargers",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/LAC"
    },
    Chiefs: {
        name: "Chiefs",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/KC"
    },
    Colts: {
        name: "Colts",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/IND"
    },
    Commanders: {
        name: "Commanders",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/WAS"
    },
    Cowboys: {
        name: "Cowboys",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/DAL"
    },
    Dolphins: {
        name: "Dolphins",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/MIA"
    },
    Eagles: {
        name: "Eagles",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/PHI"
    },
    Falcons: {
        name: "Falcons",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/ATL"
    },
    Giants: {
        name: "Giants",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/NYG"
    },
    Jaguars: {
        name: "Jaguars",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/JAX"
    },
    Jets: {
        name: "Jets",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/NYJ"
    },
    Lions: {
        name: "Lions",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/DET"
    },
    Packers: {
        name: "Packers",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/GB"
    },
    Panthers: {
        name: "Panthers",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/CAR"
    },
    Patriots: {
        name: "Patriots",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/NE"
    },
    Raiders: {
        name: "Raiders",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/LV"
    },
    Rams: {
        name: "Rams",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/LA"
    },
    Ravens: {
        name: "Ravens",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/BAL"
    },
    Saints: {
        name: "Saints",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/NO"
    },
    Seahawks: {
        name: "Seahawks",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/SEA"
    },
    Steelers: {
        name: "Steelers",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/PIT"
    },
    Texans: {
        name: "Texans",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/HOU"
    },
    Titans: {
        name: "Titans",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/TEN"
    },
    Vikings: {
        name: "Vikings",
        logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/MIN"
    }
};


//Recuperar un elemento por clase llamada teams y recuperar las clases que le siguen
var teamOne = document.querySelector(".teams").classList[1];
var teamTwo = document.querySelector(".teams").classList[2];

//Verificar que teamOne exista en el objeto teams
if (teams.hasOwnProperty(teamOne)) {
    teamOneLogo = teams[teamOne].logo;
    teamOneName = teams[teamOne].name;
}

//Verificar que teamTwo exista en el objeto teams
if (teams.hasOwnProperty(teamTwo)) {
    teamTwoLogo = teams[teamTwo].logo;
    teamTwoName = teams[teamTwo].name;
}

// Selecciona el elemento en el que deseas insertar los nombres de los equipos y las imágenes
var matchupElement = document.querySelector(".team-matchup");

// Actualiza el contenido del elemento seleccionado con los nombres de los equipos y las imágenes
matchupElement.innerHTML = `
    ${teamOneName} <img class="logo-team" src="${teamOneLogo}" alt="${teamOneName}">
    @
    <img class="logo-team" src="${teamTwoLogo}" alt="${teamTwoName}"> ${teamTwoName}
`;