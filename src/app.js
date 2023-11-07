//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(players, year) {
  return players.filter(player => player.debutYear === year);
}


//Progression 4 - Filter players that play at the position _______
function filterByPosition(players, position) {
  return players.filter(player => player.position === position);
}


//Progression 5 - Filter players that have won ______ award
function filterByAward(players, awardName) {
  return players.filter(player => player.awards.includes(awardName));
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardXTimes(players, awardName, noOfTimes) {
  return players.filter(player => player.awards.filter(award => award === awardName).length === noOfTimes);
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardAndCountry(players, awardName, country) {
  return players.filter(player => player.awards.includes(awardName) && player.country === country);
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsXTeamXAge(players, noOfAwards, team, age) {
  return players.filter(player => player.awards.length >= noOfAwards && player.team === team && player.age < age);
}

//Progression 9 - Sort players in descending order of their age
function sortByAgeDescending(players) {
  return players.slice().sort((a, b) => b.age - a.age);
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function filterByTeamXSortByNoOfAwards(players, team) {
  const teamPlayers = players.filter(player => player.team === team);
  return teamPlayers.slice().sort((a, b) => b.awards.length - a.awards.length);
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function sortByNamexAwardXTimes(players, awardName, noOfTimes, country) {
  const filteredPlayers = players.filter(player => player.awards.filter(award => award === awardName).length === noOfTimes && player.country === country);
  return filteredPlayers.slice().sort((a, b) => a.name.localeCompare(b.name));
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function sortByNamexOlderThan(players, age) {
  const filteredPlayers = players.filter(player => player.age > age);
  return filteredPlayers.slice().sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return b.awards[0].year - a.awards[0].year;
  });
}
