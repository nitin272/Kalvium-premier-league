// Function to create a manager object
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return {
    name: managerName,
    age: managerAge,
    team: currentTeam,
    trophies: trophiesWon
  };
}

// Function to create a formation object
function createFormation(defender, midfield, forward) {
  return {
    defender,
    midfield,
    forward
  };
}

// Function to filter players by debut year
function filterByDebut(year) {
  return players.filter(player => player.debut === year);
}

// Function to filter players by position
function filterByPosition(position) {
  return players.filter(player => player.position === position);
}

// Function to filter players by award name
function filterByAward(awardName) {
  return players.filter(player =>
    player.awards.some(award => award.name === awardName)
  );
}

// Function to filter players by award name and number of times
function filterByAwardxTimes(awardName, noOfTimes) {
  return players.filter(player =>
    player.awards.filter(award => award.name === awardName).length === noOfTimes
  );
}

// Function to filter players by award name and country
function filterByAwardxCountry(awardName, country) {
  return filterByAward(awardName).filter(player => player.country === country);
}

// Function to filter players by number of awards, team, and age
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  return players.filter(
    player =>
      player.age < age && player.team === team && player.awards.length >= noOfAwards
  );
}

// Function to sort players in descending order of their age
function sortByAge() {
  players.sort((a, b) => b.age - a.age);
}

// Function to sort players belonging to a team in descending order of awards won
function filterByTeamxSortByNoOfAwards(team) {
  const filteredPlayers = players.filter(player => player.team === team);
  return filteredPlayers.sort((a, b) => b.awards.length - a.awards.length);
}

// Function to sort players by name who have won a specific award a certain number of times and belong to a certain country
function sortByNamexAwardxTimes(awardName, noOfTimes, country) {
  const filteredPlayers = filterByAwardxTimes(awardName, noOfTimes);
  const sortedPlayers = filteredPlayers.sort((a, b) => a.name.localeCompare(b.name));
  return sortedPlayers.filter(player => player.country === country);
}

// Function to sort players older than a certain age alphabetically and their awards in reverse chronological order
function sortByNamexOlderThan(age) {
  const filteredPlayers = players.filter(player => player.age > age);
  return filteredPlayers.sort((a, b) => b.awards[0].year - a.awards[0].year);
}
