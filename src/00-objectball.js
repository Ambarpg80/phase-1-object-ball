function gameObject(teams){
    teams = {
        "home":{
            "teamName": "Brooklyn Nets",
            "colors": ["Black","White"],
            "players":{
                "Alan Anderson" : {
                        "number" : 0,
                        "shoe" : 16,
                        "points" : 22,
                        "rebounds" : 12,
                        "assists" : 12,
                        "steals" : 3,
                        "blocks" : 1,
                        "slamDunks" : 1
                },
                "Reggie Evans" : {
                        "number" : 30,
                        "shoe" : 14,
                        "points" : 12,
                        "rebounds" : 12,
                        "assists" : 12,
                        "steals" : 12,
                        "blocks" : 12,
                        "slamDunks" : 7
                },
                "Brook Lopez" : {
                        "number" : 11,
                        "shoe" : 17,
                        "points" : 17,
                        "rebounds" : 19,
                        "assists" : 10,
                        "steals" : 3,
                        "blocks" : 1,
                        "slamDunks" : 15
                },
                "Mason Plumlee":{
                        "number" : 1,
                        "shoe" : 19,
                        "points" : 26,
                        "rebounds" : 12,
                        "assists" : 6,
                        "steals" : 3,
                        "blocks" : 8,
                        "slamDunks" : 5
                },
                "Jason Terry": {
                        "number" : 31,
                        "shoe" : 15,
                        "points" : 19,
                        "rebounds" : 2,
                        "assists" : 2,
                        "steals" : 4,
                        "blocks" : 11,
                        "slamDunks" : 1
                },
            },
         },
        "away":{
            "teamName": "Charlotte Hornets",
            "colors": ["Turqouise", "Purple"],
            "players": {
                "Jeff Adrien" : {
                        "number" : 4,
                        "shoe" : 18,
                        "points" : 10,
                        "rebounds" : 1,
                        "assists" : 1,
                        "steals" : 2,
                        "blocks" : 7,
                        "slamDunks" : 2
                },
                "Bismak Biyombo" : {
                        "number" : 0,
                        "shoe" : 16,
                        "points" : 12,
                        "rebounds" : 4,
                        "assists" : 7,
                        "steals" : 7,
                        "blocks" : 15,
                        "slamDunks" : 10
                },
                "Desanga Diop" : {
                        "number" : 2,
                        "shoe" : 14,
                        "points" : 24,
                        "rebounds" : 12,
                        "assists" : 12,
                        "steals" : 4,
                        "blocks" : 5,
                        "slamDunks" : 5
                },
                "Ben Gordon":{
                        "number" : 8,
                        "shoe" : 15,
                        "points" : 33,
                        "rebounds" : 3,
                        "assists" : 2,
                        "steals" : 1,
                        "blocks" : 1,
                        "slamDunks" : 0
                },
                "Brendan Haywood": {
                    "number" : 33,
                    "shoe" : 15,
                    "points" : 6,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 22,
                    "blocks" : 5,
                    "slamDunks" : 12
                   
                },
         }
    }
   }  
   return teams
}
//console.log(gameObject())

// function homeTeamName(){
//     let team = gameObject()
//     return team['home']['teamName']
// }
// console.log(homeTeamName())

function numPointsScored(name){
    let teams = gameObject()
    for(let items in teams){
    let players = teams[items]['players']
      //console.log(players)
      for(let player of Object.keys(players)){
        if(name === player){
        let stats = players[player]
        //console.log(players[player])
        for(let stat of Object.keys(stats)){
         //console.log(stats['points'])
         return(stats['points'])
        }
        
        }
      }
  }   
}
//console.log(numPointsScored("Alan Anderson"))

function shoeSize(name){
    let teams = gameObject();
    for(let items in teams){
    let players = teams[items]['players']
      //console.log(players)
      for(let player of Object.keys(players)){
        if(name === player){
        let stats = players[player]
        //console.log(players[player])
        for(let stat of Object.keys(stats)){
         //console.log(stats['points'])
         return(stats['shoe'])
        }
        
        }
      }
  }   
}
//console.log(shoeSize("Alan Anderson"))

function teamColors(nameOfTeam){
let colorsforTeam = []; 
    let gameObj = gameObject()
    for(let obj in gameObj){
    let teamsNames = gameObj[obj]['teamName'] ;
    let teams = gameObj[obj];
    //console.log(gameObject()[obj])
    //console.log(teamsNames)
      for(let team in teams){
        if(nameOfTeam === teamsNames){//['colors']
         //console.log(teams['colors'])
        return teams['colors']
        }
      }  
    }
}
//console.log(teamColors("Charlotte Hornets"))

function teamNames(){
   let arrayofTeams = []; 
   let gameObj = gameObject();
    for(let obj in gameObj){
    let teams = gameObject()[obj]['teamName']
    //console.log(teams)
    arrayofTeams.push(teams)
    }
    return arrayofTeams
}
//console.log(teamNames())


function playerNumbers(nameOfTeam){
  let jerseyNumbers = []; 
  let gameObj = gameObject();
  for(let obj in gameObj){
    let mainObj = gameObj[obj]
    //console.log(mainObj.teamName)
    if(nameOfTeam === mainObj.teamName){
        let players = mainObj.players
        //console.log(players)
      for(let stats in players){
        //console.log(players[stats])
        let data = players[stats];
        //console.log(data['number']) 
        jerseyNumbers.push(data['number'])
     } 
      return jerseyNumbers
    }
   }
}
//console.log(playerNumbers('Charlotte Hornets'))


function playerStats(name){
    let teams = gameObject()
    for(let items in teams){
    let players = teams[items]['players']
      //console.log(players)
      for(let player of Object.keys(players)){
        if(name === player){
        let stats = players[player]
        //console.log(players[player])
        for(let stat of Object.keys(stats)){
         //console.log(stats['points'])
         return(stats)
        }
        
        }
      }
  }   
}
//console.log(playerStats("Alan Anderson"))

function bigShoeRebounds(){
  let shoesNRebounds = []
  let gameObj = gameObject();
  for (let obj in gameObj){
    let players = gameObj[obj]['players']
    for(let stats in players){
     let allStats = players[stats]
     let allShoes = players[stats]['shoe']
     //console.log(allStats)
     shoesNRebounds.push(allShoes)
     
     //console.log(shoesNRebounds)
     for(let items in shoesNRebounds){
      //console.log(Math.max.apply(null, shoesNRebounds))
     if (Math.max.apply(null, shoesNRebounds) === allStats['shoe']){
      return allStats['rebounds']
     }
      } 
     }
     }
      }
//console.log(bigShoeRebounds())

function mostPointsScored(){
  let mostPoints =[]
  let gameObj = gameObject();
  for (let obj in gameObj){
    let players = gameObj[obj]['players']
    for(let stats in players){
     let allStats = players[stats]
     mostPoints.push(allStats['points'])
    } 
  }
  //console.log(mostPoints)
  return Math.max.apply(null, mostPoints) 
}
//console.log(mostPointsScored())


function winningTeam(){
  let gameObj = gameObject();
  for (let obj in gameObj){
    let players = gameObj[obj]['players']
    let teams = gameObj[obj]
    console.log(teams) 
    for(let stats in players){
     let allStats = players[stats]
      if(teams['teamName']){
        function totalScore(){
        let total;
        total =+ allStats['points']
        console.log(total)
        console.log(teams['teamName'], totalScore())
      } 
     }
    }
  }
}
//console.log(winningTeam())


function playerWithLongestName(){
  let namesArray = []
  let nameLengths = []
  let gameObj = gameObject();
  for (let obj in gameObj){
    let players = gameObj[obj]['players']
    //let teams = gameObj[obj]
    for(let stats in players){
      namesArray.push(stats)
    }  
    for (let name of namesArray){
      let lengths = name.length -1
      nameLengths.push(lengths)
      }
      console.log(Math.max.apply(null, nameLengths))
        
  } 
  }

console.log(playerWithLongestName())
/*
*
**function doesLongNameStealATon(){}
*/





