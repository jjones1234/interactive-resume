var bio={
    "name":"Jared Jones",
    "role":"Web Developer",
    "contacts":{
    "mobile":"404-719-5555",
    "email":"jaredjones1234@gmail.com",
    "github":"jjones1234",
    "location":"Atlanta, GA"
    },
    "WelcomeMessage": "Loving web development",
    "skills":["Javascript", "Linux","CSS", "SQL","XHTML","JAVA"],

    "bioPic":"jay.jpg"


    };
bio.display=function(){
var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole= HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedMobile);


var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email); 
$("#topContacts").append(formattedEmail);

var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github); 
$("#topContacts").append(formattedGithub);

var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location); 
$("#topContacts").append(formattedLocation);


var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

var formattedMessage= HTMLwelcomeMsg .replace("%data%" , bio.WelcomeMessage);
$("#header").append(formattedPic);
$("#header").append(formattedMessage);


if(bio.skills.length>0){
$("#header").append(HTMLskillsStart);

var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedSkill);

var formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
$("#skills").append(formattedSkill);

var formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedSkill);

var formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
$("#skills").append(formattedSkill);

var formattedSkill=HTMLskills.replace("%data%",bio.skills[4]);
$("#skills").append(formattedSkill);

var formattedSkill=HTMLskills.replace("%data%",bio.skills[5]);
$("#skills").append(formattedSkill);


} 

}

var work = {
  "jobs": [
    {
      "employer": "AT&T",
      "title": "Technical Consulting Engineer",
      "location": "Atlanta, GA",
      "dates": "Jan 2014 - Current",
      "description": "Subject Matter Expert for validating and fixing all Ethernet to the Cell Site projects for Midwest, Southeast and West regions to make sure all customer clients obtain the correct service. Recently promoted to escalation manager where I track the reasons for why customers aren’t getting service in a timely fashion to help improve cycle time. The position requires disseminating reports and information to AT&T VP’s, directors and project managers to keep them informed on where everyone stands with each project. "
    },
    {
      "employer": "AT&T",
      "title": "Global Engineering Support Engineer",
      "location": "Atlanta, GA",
      "dates": "March 2013 - Jan 2014",
      "description": "Subject Matter Expert for setting the processes and standards for in-house database functionality. This position required working with all 22 states to maintain efficient workflow in the database for preparing Ethernet to the cell site. The job required serving as a Liaison Technical consultant between clients and programmers, working to build new additions to the database and translate client business processes to the database for internal client’s needs."
    },
    {
      "employer": "Santee Cooper",
      "title": "IT Support Analyst",
      "location": "Monchs Corner, SC",
      "dates": "Aug 2009 - Jan 2010",
      "description": "Worked with IT support department to monitor company servers and coordinate to meet IBM credentials, worked with desktop Services to repair company computers, make sure that the old computers were up date and maintained up to date images on all company computers"
    },
    {
      "employer": "Sylvania Memorial Works",
      "title": "Manager",
      "location": "Sylvania,GA",
      "dates": "Aug 2004 - Aug 2011",
      "description": "Create a database and maintain inventory, Maintain company webpage, Sales representative, Machine operator, Categorize work schedules, Answer phone to help customers, Delivery of products"
    }
  ]
};



 work.display=function(){
for (job in work.jobs){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
  var formattedTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);
  var formattedLocation= HTMLworkLocation.replace("%data%",work.jobs[job].location);

  var formattedEmployerTitle= formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

 $(".work-entry:last").append(formattedLocation);

  var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription= HTMLworkDescription.replace("%data%",work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);

}
}

var workprojects={
    "projects":[
    {
      "title": "Interative Resume",
       "url":"https://github.com/jjones1234",
      "date": "April 2015",
      "description": "A site that holds all current works that I've done.",
      "image": "jobapp.jpg"
    },
    {
      "title": "Arcade Game",
       "url":"https://github.com/jjones1234",
      "date": "April 2015",
      "description": "A site that shows an interactive game",
      "image": "arcade.jpg"
    },
    {
      "title": "Neighborhood Map",
       "url":"https://github.com/jjones1234",
      "date": "April 2015",
      "description": "A site that shows a neighborhood map",
      "image": "vegas3.jpg"
    }

    ]
  };

workprojects.display=function(){
for (project in workprojects.projects){
  $("#projects").append(HTMLprojectStart);
  var formattedTitle=HTMLprojectTitle.replace("%data%",workprojects.projects[project].title).replace('#',workprojects.projects[project].url);
  var formattedDates= HTMLprojectDates.replace("%data%",workprojects.projects[project].date);
  var formattedDescription=HTMLprojectDescription.replace("%data%",workprojects.projects[project].description);
  var formattedImage= HTMLprojectImage.replace("%data%",workprojects.projects[project].image);
  $(".project-entry:last").append(formattedTitle);


  $(".project-entry:last").append(formattedDates);

  $(".project-entry:last").append(formattedDescription);
    $(".project-entry:last").append(formattedImage);

}
}




var education={
    "schoolinfo":[{
    "name":"Georgia Southern University",
    "url":"https://www.georgiasouthern.edu",
    "degree": "Information Technology",
    "dates": "Aug 2006-May 2011",
    "location": "Statesboro, GA",
    "Major": "Network Administration"
    }]
  };

education.display=function(){
for (school in education.schoolinfo){
  $("#education").append(HTMLschoolStart);
  var formattedSchoolname=HTMLschoolName.replace("%data%",education.schoolinfo[school].name).replace('#',education.schoolinfo[school].url);
  var formattedSchooldegree=HTMLschoolDegree.replace("%data%",education.schoolinfo[school].degree);
  var formattedSchooldates=HTMLschoolDates.replace("%data%",education.schoolinfo[school].dates);
  var formattedLocation= HTMLschoolLocation.replace("%data%",education.schoolinfo[school].location);
  var formattedSchoolmajor=HTMLschoolMajor.replace("%data%",education.schoolinfo[school].Major);

 var formattedSchool= formattedSchoolname + formattedSchooldegree;
  $(".education-entry:last").append(formattedSchool);
  $(".education-entry:last").append(formattedSchooldates);
  $(".education-entry:last").append(formattedLocation);
  $(".education-entry:last").append(formattedSchoolmajor);

}
}



var classes={
  "online":[{
  "school": "Udacity",
  "title":"Front-End Web Development Nanodegree",
  "url":"https://www.udacity.com",
  "dates": "April 2015 - Current"
  }]
};

classes.display=function(){
for (online in classes.online){
  var formattedClassTitle=HTMLonlineTitle.replace("%data%",classes.online[online].title).replace('#',classes.online[online].url);
  var formattedClassName=HTMLonlineSchool.replace("%data%",classes.online[online].school);
  var formattedClassDate=HTMLonlineDates.replace("%data%",classes.online[online].dates);
  var formattedClass= formattedClassTitle + formattedClassName;
  $(".education-entry:last").append(formattedClass);
  $(".education-entry:last").append(formattedClassDate);


}
}

function inName(name){
  var name=$("#name").text();
  name=name.trim().split(" ");
  console.log(name);
  name[1]=name[1].toUpperCase();
  name[0]=name[0].slice(0,1).toUpperCase() +
  name[0].slice(1).toLowerCase();
   return name[0] + " "+ name[1];
}

bio.display();
work.display();
workprojects.display();
education.display();
classes.display();


$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);

$(document).click(function(loc){
  var x= loc.pageX;
  var y= loc.pageY;

  logClicks(x,y);

});









