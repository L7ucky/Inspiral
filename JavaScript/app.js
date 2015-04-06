/**
 * Created by Andrew on 3/8/2015.
 */
// Tyler's Stuff
var currentUser = "Andrew";
var loggedIn = false;
var imagelistPrivate = ["../Resources/cactus.jpeg", "../Resources/cactus.jpeg", "../Resources/cactus.jpeg", "../Resources/nike.jpeg", "../Resources/patriot.jpeg","../Resources/rooney.jpeg","../Resources/starwars.jpeg", "../Resources/sword.jpeg","../Resources/cow.jpeg","../Resources/greenChurch.jpeg","../Resources/dragon.jpeg","../Resources/moutain.jpeg","../Resources/roller.jpeg",];
var imagelistClass = ["../Resources/dog.jpeg", "../Resources/dog.jpeg", "../Resources/dog.jpeg", "../Resources/nike.jpeg", "../Resources/patriot.jpeg","../Resources/rooney.jpeg","../Resources/starwars.jpeg", "../Resources/sword.jpeg","../Resources/cow.jpeg","../Resources/greenChurch.jpeg","../Resources/dragon.jpeg","../Resources/moutain.jpeg","../Resources/roller.jpeg",];
var imagelistGroup = ["../Resources/husky.jpeg", "../Resources/husky.jpeg", "../Resources/husky.jpeg", "../Resources/nike.jpeg", "../Resources/patriot.jpeg","../Resources/rooney.jpeg","../Resources/starwars.jpeg", "../Resources/sword.jpeg","../Resources/cow.jpeg","../Resources/greenChurch.jpeg","../Resources/dragon.jpeg","../Resources/moutain.jpeg","../Resources/roller.jpeg",];
var imagelist = ["../Resources/Cat.jpg", "../Resources/rain.jpg", "../Resources/weather.jpg", "../Resources/lights.jpg", "../Resources/park.jpg","../Resources/kitten.jpg","../Resources/message.jpg", "../Resources/sword.jpeg","../Resources/cow.jpeg","../Resources/greenChurch.jpeg","../Resources/dragon.jpeg","../Resources/moutain.jpeg","../Resources/roller.jpeg",];

var comments = {};
comments["../Resources/Cat.jpg"] = ["Josh: This is a cat.", "Dantley: It looks like it has magical powers. It must be a liger."];
comments["../Resources/cactus.jpeg"] = [];
comments["../Resources/nike.jpeg"] = [];
comments["../Resources/patriot.jpeg"] = [];
comments["../Resources/rooney.jpeg"] = [];
comments["../Resources/starwars.jpeg"] = ["Josh: Padme's beauty inspires me.", "Dantley: I personally prefer Leia."];
comments["../Resources/sword.jpeg"] = ["Josh: Do you think we could use a sword in our advertisement?"];
comments["../Resources/cow.jpeg"] = ["Josh: I look like a cow in this picture."];
comments["../Resources/greenChurch.jpeg"] = ["Dantley: This is a picture of the painting I made of a dream I had two weeks ago."];
comments["../Resources/dragon.jpeg"] = [];
comments["../Resources/moutain.jpeg"] = [];
comments["../Resources/roller.jpeg"] = [];
comments["../Resources/dog.jpeg"] = [];
comments["../Resources/husky.jpeg"] = [];
comments["../Resources/lights.jpg"] = [];
comments["../Resources/message.jpg"] = ["Jesse: I took a picture of this at the beach last week.", "Josh: Wow! I've never seen a message in a bottle like that before!"];
comments["../Resources/park.jpg"] = ["Josh: I took this one while playing ultimate frisbee at Kiwanis."];
comments["../Resources/rain.jpg"] = [];
comments["../Resources/kitten.jpg"] = ["Tyler: This is a precious photo my wife took of little Katniss."];
comments["../Resources/weather.jpg"] =[];

var currentImages = imagelist;
var currentPage ='Public';
var currentIndex = 0;

function insertComment(string_in, checked)
{
		if (string_in != "" && window.location.search.indexOf("loggedIn=true") > -1)
		{
      if(checked) comments[currentImages[currentIndex]].push(currentUser + ": (Private) " + string_in);
      else comments[currentImages[currentIndex]].push(currentUser + ": " + string_in);
      updateMainImage(currentIndex, false);
      thecomment.value = "";
		}
}
//this is the function to change image on upload image
function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                document.getElementById("uploadImage").src= e.target.result;
                   // .attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

function refreshPictures()
{
    document.getElementById("first").src = currentImages[0];
    document.getElementById("second").src = currentImages[1];
    document.getElementById("third").src = currentImages[2];
    document.getElementById("fourth").src = currentImages[3];
    document.getElementById("fifth").src = currentImages[4];
    document.getElementById("sixth").src = currentImages[5];
}
function  checkboxesCalculate (name, checked) {
	if (checked && name == "visibilityCheckbox1" && visibilityCheckbox2.checked == false &&
		visibilityCheckbox3.checked == false &&	visibilityCheckbox4.checked == false)
	{
		visibilityCheckbox2.checked = true;
		visibilityCheckbox3.checked = true;
		visibilityCheckbox4.checked = true;
	}
	else if(checked && name == "visibilityCheckbox2" && visibilityCheckbox1.checked == false &&
		visibilityCheckbox3.checked == false &&	visibilityCheckbox4.checked == false)
	{
		visibilityCheckbox3.checked = true;
		visibilityCheckbox4.checked = true;
	}
	else if(checked && name == "visibilityCheckbox3" && visibilityCheckbox2.checked == false &&
		visibilityCheckbox1.checked == false &&	visibilityCheckbox4.checked == false)
	{
		visibilityCheckbox4.checked = true;
	}
	
}

function setAccountButton()
{
    if(window.location.search.indexOf("loggedIn=true") > -1) {
        loggedIn=true;
        document.getElementById("signInButton").value = currentUser;
        document.getElementById("signInButton").onclick = function() {location.href="account.html"};
    }
    else {
        document.getElementById("thecomment").disabled = true; 
    }
}

function determinePage(){
    if(window.location.pathname.indexOf("Private") > -1) {
        currentImages = imagelistPrivate;
    }
    else if(window.location.pathname.indexOf("Group") > -1) {
        currentImages = imagelistGroup;
    }
    else if(window.location.pathname.indexOf("Class") > -1) {
        currentImages = imagelistClass;
    }
    else{
        currentImages = imagelist;
    }
}

function getImages() 
{

	var imgs = document.getElementsByTagName("img");
	//alert(imgs.length);
	var imgSrcs = [];

    for (var i = 0; i < imgs.length; i++) {
        imgSrcs.push(imgs[i].src);
    }
    
	return imgSrcs;
   // alert("test");
}

function rightArrow () 
{
    var newArray = [];
    newArray.push(currentImages[currentImages.length-1]);
    for(var i = 0; i<currentImages.length-1;i++){
        newArray.push(currentImages[i]);
    }
    currentImages = newArray;
    refreshPictures();

}

function leftArrow()
{
    var first = currentImages[0];
    var newArray = [];
    for(var i = 1; i<currentImages.length;i++){
        newArray.push(currentImages[i]);
    }
    newArray.push(first);
    currentImages = newArray;
    refreshPictures();

}

function goToPrivate(){
    if(loggedIn){
        location.href = 'Private.html?loggedIn=true';
    }
    else
        location.href = 'login.html';
}

function goToClass(){
    if(loggedIn)
        location.href = 'Class.html?loggedIn=true';
    else
        location.href = 'login.html';
}

function goToGroup(){
    if(loggedIn)
        location.href = 'Group.html?loggedIn=true';
    else
        location.href = 'login.html';
}

function goToPublic(){
    if(loggedIn)
        location.href = 'Public.html?loggedIn=true';
    else
        location.href = 'Public.html?loggedIn=false';
}

function goAddInspiration(){
    if(loggedIn)
        location.href = 'add_inspiration.html?loggedIn=true';
    else
        location.href = 'login.html';
}

window.onload = function(){
    setAccountButton();
    refreshPictures();
    updateMainImage(0);
};

function onLoad() {
    setAccountButton();
    refreshPictures();
    updateMainImage(0);
}

function updateMainImage(index,homepage){
    if(homepage){
        goToPublic();
    }

    document.getElementById('mainImage').src= currentImages[index];
    document.getElementById('commentshere').innerHTML = "";
    for(var i=0;i<comments[currentImages[index]].length;i++){
        document.getElementById('commentshere').innerHTML += "<p class='aComment'>" + comments[currentImages[index]][i] + "</p>";
    }
    currentIndex = index;
}

// Account page stuff

function leave() {
    document.getElementById("currentGroup").value = "";
}

function newGroup() {
    document.getElementById("currentGroup").value = document.getElementById("newGroup").value;
    document.getElementById("newGroup").value = "";
}

function joinGroup() {
    document.getElementById("currentGroup").value = document.getElementById("joinGroup").value;
    document.getElementById("joinGroup").value = "";
}
