 //Fetch your Firebase Config values from the CDN on your Firebase control panel. 
 var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  firebase.initializeApp(firebaseConfig);

  //Declare Names

  var mei;
  var dva;
  var mercy;
  var genji;
  var phoneNumber;

//Speaker 1
  var meiRef = firebase.database().ref("speakers/mei");//Speaker 1
  meiRef.once("value")
    .then(function(snapshot) {
      var meiName = snapshot.child("name").val(); 
      var meiPhoto = snapshot.child("photo").val(); 
      var meiBio = snapshot.child("bio").val(); 
      var meiEmail = snapshot.child("email").val(); 
      var meiPhone = snapshot.child("phone").val();
      phoneNumber=meiPhone;
      document.getElementById('speaker1').innerHTML=meiName;
      document.getElementById('speakerA').innerHTML=meiName;
     document.getElementById('photo1').style.backgroundImage="url("+meiPhoto+")";
     document.getElementById('photoA').style.backgroundImage="url("+meiPhoto+")";
     document.getElementById('bio1').innerHTML=meiBio;
     document.getElementById('bioA').innerHTML=meiBio;
     document.getElementById('email1').innerHTML=meiEmail;
     document.getElementById('emailA').innerHTML=meiEmail;
     mei = meiName;
    });
//Speaker2
  var dvaRef = firebase.database().ref("speakers/dva"); 
  dvaRef.once("value")
    .then(function(snapshot) {
      var dvaName = snapshot.child("name").val(); 
      var dvaPhoto = snapshot.child("photo").val(); 
      var dvaBio = snapshot.child("bio").val(); 
      var dvaEmail = snapshot.child("email").val(); 
      document.getElementById('speaker2').innerHTML=dvaName;
     document.getElementById('photo2').style.backgroundImage="url("+dvaPhoto+")";
     document.getElementById('bio2').innerHTML=dvaBio;
     document.getElementById('email2').innerHTML=dvaEmail;
     dva=dvaName;
    });
//speaker3
  var mercyRef = firebase.database().ref("speakers/mercy"); 
  mercyRef.once("value")
    .then(function(snapshot) {
      var mercyName = snapshot.child("name").val(); 
      var mercyPhoto = snapshot.child("photo").val(); 
      var mercyBio = snapshot.child("bio").val(); 
      var mercyEmail = snapshot.child("email").val(); 
      document.getElementById('speaker3').innerHTML=mercyName;
      document.getElementById('speakerC').innerHTML=mercyName;
     document.getElementById('photo3').style.backgroundImage="url("+mercyPhoto+")";
     document.getElementById('photoC').style.backgroundImage="url("+mercyPhoto+")";
     document.getElementById('bio3').innerHTML=mercyBio;
     document.getElementById('bioC').innerHTML=mercyBio;
     document.getElementById('email3').innerHTML=mercyEmail;
     document.getElementById('emailC').innerHTML=mercyEmail;
    });
    //speaker4
    var genjiRef = firebase.database().ref("speakers/genji"); 
    genjiRef.once("value")
      .then(function(snapshot) {
        var genjiName = snapshot.child("name").val(); 
        var genjiPhoto = snapshot.child("photo").val(); 
        var genjiBio = snapshot.child("bio").val(); 
        var genjiEmail = snapshot.child("email").val(); 
        document.getElementById('speaker4').innerHTML=genjiName;
       document.getElementById('photo4').style.backgroundImage="url("+genjiPhoto+")";
       document.getElementById('bio4').innerHTML=genjiBio;
       document.getElementById('email4').innerHTML=genjiEmail;
      });

      //DECLARE EVENTS HERE
      //Session1
      var ptfoRef = firebase.database().ref("sessions/ptfo"); 
      ptfoRef.once("value")
      .then(function(snapshot) {
        var ptfoName = snapshot.child("title").val(); 
        var ptfoDesc = snapshot.child("description").val(); 
       document.getElementById('eventname1').innerHTML=ptfoName;
       document.getElementById('description1').innerHTML=ptfoDesc;
      });
      //Session 2
      var dynhRef = firebase.database().ref("sessions/dynh"); 
      dynhRef.once("value")
      .then(function(snapshot) {
        var dynhName = snapshot.child("title").val(); 
        var dynhDesc = snapshot.child("description").val(); 
        document.getElementById('eventname2').innerHTML=dynhName;
        document.getElementById('description2').innerHTML=dynhDesc;
      });
      //Session 3
      var potgRef = firebase.database().ref("sessions/potg"); 
      potgRef.once("value")
      .then(function(snapshot) {
        var potgName = snapshot.child("title").val(); 
        var potgDesc = snapshot.child("description").val(); 
        document.getElementById('eventname3').innerHTML=potgName;
        document.getElementById('description3').innerHTML=potgDesc;
      });
//Create Listener for star rating system
document.addEventListener('DOMContentLoaded', function(){
  addListeners();
  setRating(); //based on value inside the div
});

function addListeners(){
  var stars1 = document.querySelectorAll('.star1');
  [].forEach.call(stars1, function(star1, index){
    star1.addEventListener('click', (function rate1(idx){
      document.querySelector('.stars1').setAttribute('data-rating1',  idx + 1);  
      console.log('Rating is now', idx+1);
      //Set Review of event on Firebase
      ptfoRef.child("review").set(idx+1);
      alert('Thank you for your feedback!');
      setRating();
    }).bind(window,index) );
  });

  var stars2 = document.querySelectorAll('.star2');
  [].forEach.call(stars2, function(star2, index){
    star2.addEventListener('click', (function rate2(idx){
      document.querySelector('.stars2').setAttribute('data-rating2',  idx + 1);  
      console.log('Rating is now', idx+1);
      //Set Review of event on Firebase
      dynhRef.child("review").set(idx+1);
      alert('Thank you for your feedback!');
      setRating();
    }).bind(window,index) );
    });

    var stars3 = document.querySelectorAll('.star3');
  [].forEach.call(stars3, function(star3, index){
    star3.addEventListener('click', (function rate3(idx){
      document.querySelector('.stars3').setAttribute('data-rating3',  idx + 1);  
      console.log('Rating is now', idx+1);
      //Set Review of event on Firebase
      potgRef.child("review").set(idx+1);
      alert('Thank you for your feedback!');
      setRating();
    }).bind(window,index) );
});
  
}

function setRating(){
  var stars1 = document.querySelectorAll('.star1');
  var rating1 = parseInt( document.querySelector('.stars1').getAttribute('data-rating1') );
  [].forEach.call(stars1, function(star1, index){
    if(rating1 > index){
      star1.classList.add('rated');
    }else{
      star1.classList.remove('rated');
    }
  });

  var stars2 = document.querySelectorAll('.star2');
  var rating2 = parseInt( document.querySelector('.stars2').getAttribute('data-rating2') );
  [].forEach.call(stars2, function(star2, index){
    if(rating2 > index){
      star2.classList.add('rated');
    }else{
      star2.classList.remove('rated');
    }
  });

  var stars3 = document.querySelectorAll('.star3');
  var rating3 = parseInt( document.querySelector('.stars3').getAttribute('data-rating3') );
  [].forEach.call(stars3, function(star3, index){
    if(rating3 > index){
      star3.classList.add('rated');
    }else{
      star3.classList.remove('rated');
    }
  });
}