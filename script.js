
// JavaScript Document

var currentQuestion = 0;
var isflipped = 0;
var currentHowTo = 4;

var playerList = [];

var currentPlayer = -1;


function progressPlayer() {
	
	if (playerList == 0) {
		/*do nothing, no players*/
	} else {
	
	if (currentPlayer == playerList.length - 1) {
		currentPlayer = 0;
	} else {
		currentPlayer++;
	}
	var pawnList = document.getElementsByClassName("pawn-container");
	
	for (i=0; i<pawnList.length; i++) {
		pawnList[i].classList.remove("active");
		pawnList[i].classList.add("inactive");
	}
	
	pawnList[currentPlayer].classList.remove("inactive");
	pawnList[currentPlayer].classList.add("active");
}
}

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  /*console.log(m)*/
  timer5 = setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

function stopTimer() {
	 clearTimeout(timer5);
	document.getElementById('timer').innerHTML = "5:00";
}

function hide(a) {
	a.classList.remove("unhidden");
	a.classList.add("hidden");
}

function unhide(a) {
	a.classList.add("unhidden");
	a.classList.remove("hidden");
}


function populatePawns() {
	
	if (playerList.length > 8) {
		/*do nothing, too many players; max 9*/
	} else {
	
	try{ var playerName = document.getElementById("player-name").value;} catch(error) {};
	
	if (playerName == "") {
		playerName = "Player " + playerNumber;
	} else {
	var playerNumber = playerList.push(playerName);
	
	var pawnContainer = document.getElementById("pawns-all").innerHTML;
	
	document.getElementById("pawns-all").innerHTML = pawnContainer + "<div class='pawn-container'>\n      <div class='player-pawn'>\n        <div class='player-" + playerNumber + "'></div>\n      </div>\n      <div class='pawn-shadow'></div>\n\t\t\t<div class='player-name'>" + playerName + "</div>\n\t\t</div>\n\t\t\n\t\t";
	
	document.getElementById("player-name").value = "";
		}
		}
}

/*triggers onclick on enter*/

function addEnter() {
// Get the input field
var input = document.getElementById("player-name");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("add-player").click();
  }
});
	}
  
function unopenIt(a) {
	a.classList.remove("open");
	a.classList.add("unopen");
}

function openIt(a) {
	a.classList.add("open");
	a.classList.remove("unopen");
}

//FROM OTHER DOC
//FROM OTHER DOC
//FROM OTHER DOC
//FROM OTHER DOC
//FROM OTHER DOC
//FROM OTHER DOC
//FROM OTHER DOC
//FROM OTHER DOC
//FROM OTHER DOC
//FROM OTHER DOC
//FROM OTHER DOC
//FROM OTHER DOC
//FROM OTHER DOC
//FROM OTHER DOC
//FROM OTHER DOC
//FROM OTHER DOC
//FROM OTHER DOC
//FROM OTHER DOC

// JavaScript Document
/*
var x; var y="bGl2ZWxlYXJubGVhcA=="; x=prompt(atob("RW50ZXIgUGFzc3dvcmQ="),' '); if (x==atob(y)) alert(atob("Q29ycmVjdCBQYXNzd29yZCEgQ2xpY2sgT0sgdG8gRW50ZXIh")); else { window.location=atob("aHR0cDovL3ZsZXJpY2suY29tLw=="); } 
*/
var currentQuestion = 0;
var isflipped = 0;

/*complete question bank, no categories*/
var subjects = ["Fire Safety","Electrical Safety","Listening Skills","Stress Management","Diversity, Equity and Inclusion","How to use Exotracker","How to use Prometheus","How to build Skypod II","How to build a picking station","Time management","Team collaboration","The fundamentals of robotics","The basics of logistics","Customer service excellence","Maintenance of Skypath","Data Analytics and Reporting","Climate fresk"]

var learners = ["A child","A busy worker","A disengaged worker","Learner with previous learning experience","Technophobe","New Exoperson","Partially sighted person","Deaf person","A person in a different country/timezone","A small audience (less than 10 people)","All Exopeople","A person not fluent in the language","A complete beginner","External worker","Intern (stagiaire)","A learner resistant to e-learning","A c-level"]

var videos = ["A live stream Q and A","A live webinar","A live lecture","Short-form video","Long-form video","An emotional video","A documentary style video","A 'choose your adventure' video","An interactive video with immediate feedback","A video that explains a case study","A video to show something too dangerous to do in real life","A video to show something too impractical to do in real life","A video with actors roleplaying","A video with diagrams/infographics","A whiteboard animation video","A video to have open while completing the corresponding task","A video that shows a process step-by-step","A video lecture","An interview","360 degree video","POV video","VR/AR video","A video with subtitles","A video with audio-description","A video with no audio","A tik-tok","A funny video","No video","Other kind of video"]

var questionsLive = [];


function prepareDeck() {
	shuffle(subjects);
	shuffle(learners);		
	currentQuestion = 0;
	flipOff();
}

    function shuffle(array) {
        let currentIndex = array.length,
            randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }

        return array;
    }




    function flip() {
		progressPlayer();
		
        document.getElementById("card-a").classList.add("flipped");
        setTimeout(function () {
            document.getElementById("card-b").classList.add("flipped")
        }, 100);
        isflipped = 1;
    }

    function unflip() {
        /*remove back of card*/
        document.getElementById("card-a").classList.remove("dealt");
        document.getElementById("card-b").classList.remove("dealt");
        document.getElementById("card-a").classList.add("drawn");
        document.getElementById("card-b").classList.add("drawn");

        setTimeout(function () {
            document.getElementById("card-a").classList.remove("flipped");
            document.getElementById("card-b").classList.remove("flipped");
            document.getElementById("card-a").classList.add("predeal");
            document.getElementById("card-b").classList.add("predeal");
            document.getElementById("card-a").classList.remove("drawn");
            document.getElementById("card-b").classList.remove("drawn");


        }, 600)
        setTimeout(function () {
            document.getElementById("card-a").classList.remove("predeal");
            document.getElementById("card-b").classList.remove("predeal");
            document.getElementById("card-a").classList.add("dealt");
            document.getElementById("card-b").classList.add("dealt");

        }, 650)

        isflipped = 0;
    }

    function generateRandom(min, max, except) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        return (num === except) ? generateRandom(min, max) : num;
    }

    function populate() {
        document.getElementById("question-a-container").innerText = subjects[currentQuestion];
        document.getElementById("question-b-container").innerText = learners[currentQuestion];
    }

    function depopulate() {
        document.getElementById("question-a-container").innerText = "";
        document.getElementById("question-a-container").innerText = "";
    }

    function progress() {
        currentQuestion++
        if (currentQuestion >= (subjects.length)) {
            currentQuestion = 0;
            shuffle(questions);
        }
    }

    function flipOnOff() {
		
		
        if (isflipped == 0) {
            flip();
            populate();
            /*startTimer();*/
            /*progressPlayer();*/
            unhide(document.getElementById("question-a-container"));
            unhide(document.getElementById("question-b-container"));
        } else {
            unflip();
            /*depopulate()*/
            progress();
			wipeBoard();
            /*stopTimer();*/
            hide(document.getElementById("question-a-container"));
            hide(document.getElementById("question-b-container"));
        }
			}

    function flipOff() {
        if (isflipped == 0) {
			/*do nothing*/
        } else {
            unflip();
            /*depopulate()*/
            progress();
            /*stopTimer();*/
            hide(document.getElementById("question-a-container"));
            hide(document.getElementById("question-b-container"));
        }
    }

function timerCheck() {
	
	const userKeyRegExp = /^([0-9]:[0-5][0-9])$/;
	
	const valid = userKeyRegExp.test(document.getElementById("timer").innerText);
	
	/*console.log(valid);*/
	
	if (valid == false ) {
		document.getElementById("timer").classList.add("invalid");
	} else {
		document.getElementById("timer").classList.remove("invalid");
	}
	
	return valid;
	
}

    var timer = 0;
var startTime = "1:00";

    function startTimer() {
        var presentTime = document.getElementById('timer').innerHTML;
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if (s == 59) {
            m = m - 1
        }
        if (m < 0) {
            return
        }

        document.getElementById('timer').innerHTML =
            m + ":" + s;
        /*console.log(m)*/
        timer5 = setTimeout(startTimer, 1000);

    }

    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) {
            sec = "0" + sec
        }; // add zero in front of numbers < 10
        if (sec < 0) {
            sec = "59"
        };
        return sec;
    }

    function stopTimer() {
        clearTimeout(timer5);
        document.getElementById('timer').innerHTML = startTime;
    }

    function startStopTimer() {
		
		if (timerCheck() == false) {
			/*do nothing*/
		} else {
		
        if (timer == 0) {
			startTime = document.getElementById("timer").innerText;
            startTimer();
            timer = 1;
            document.getElementById('play-pause').innerText = "pause";
        } else {
            stopTimer();
            timer = 0;
            document.getElementById('play-pause').innerText = "play_arrow";
        }
			}
    }

    function hide(a) {
        a.classList.remove("unhidden");
        a.classList.add("hidden");
    }

    function unhide(a) {
        a.classList.add("unhidden");
        a.classList.remove("hidden");
    }

    /*added for instructions*/

    function unopenIt(a) {
        a.classList.remove("open");
        a.classList.add("unopen");
    }

    function openIt(a) {
        a.classList.add("open");
        a.classList.remove("unopen");
    }

/*added for copyright check*/

function hideCopyright() {
	document.getElementById("copyright-container").classList.add("hidden");
}

function preVerify() {
	if (document.cookie == "1") {
	hideCopyright();
	} else {
		/*do nothing*/
	}
}

function verify() {
	if (document.getElementById("copyright-check").checked == true) {
		if (document.getElementById("cookie-check").checked == true) {
		document.cookie = "1";
		}
		hideCopyright();
	} else {
		document.getElementById("copyright-warning").innerText = "Please click to confirm that you have read an undertood this message."
	}
}

function populateVideoCards(array,location) {
	for (i=0;i<array.length;i++) {
	var a = document.createElement("DIV");
	a.classList.add("video-card");
	var b = document.createElement("DIV");
	b.classList.add("video-card-content");
	
	b.innerText = array[i];
	a.appendChild(b);
		
	document.getElementById(location).appendChild(a);
		console.log("Appended " + a);
	}
}

function selectDeselect(a) {
	if (a.classList.contains("selected")) {
		a.classList.remove("selected")
	} else {
		a.classList.add("selected")
	}
}

function wipeBoard() {
	var allSquares = document.getElementsByClassName("game-board-square");
	for (i=0;i<allSquares.length;i++) {
		if (allSquares[i].classList.contains("selected")) {allSquares[i].classList.remove("selected")};
	}
}