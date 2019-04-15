var requestURL = "Games.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var games = request.response;
  populateHeader();
  showGames(games);
}



function showGames(jsonObj) {
  var names = jsonObj['name'];

  for (var i = 0; i < names.length; i++) {
    var myA = document.createElement('a class="list-group-item"');
    var myImg = document.createElement('img');
    var mySubHeading = document.createElement('h4 class="list-group-item-heading"');
    var myPara = document.createElement('p');

    myA.link = 'SuperMarioBros.html';
    myImg.link = 'SMB.jpg';
    mySubHeading.textContent = ' ' + games[i].name;
    myPara.textContent = 'Description: ' + games[i].description;



    myArticle.appendChild(myA);
    myArticle.appendChild(myImg);
    myArticle.appendChild(mySubHeading);
    myArticle.appendChild(myPara);

  }
}

function populateHeader() {
  var myH1 = document.createElement('h1');
  myH1.textContent = 'GameSource';
  header.appendChild(myH1);

  var myPara = document.createElement('small');
  myPara.textContent = 'by Oakmont Industries';
  header.appendChild(myPara);

  var secondH1 = document.createElement('h1');
  secondH1.textContent = 'Games';
  header.appendChild(secondH1);
}
