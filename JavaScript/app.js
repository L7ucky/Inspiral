/**
 * Created by Andrew on 3/8/2015.
 */
// Tyler's Stuff
var currentUser = "Andrew";
var loggedIn = false;
var imagelistPrivate = ["../Resources/cactus.jpeg", "../Resources/cactus.jpeg", "../Resources/cactus.jpeg", "../Resources/nike.jpeg", "../Resources/patriot.jpeg","../Resources/rooney.jpeg","../Resources/starwars.jpeg", "../Resources/sword.jpeg","../Resources/cow.jpeg","../Resources/greenChurch.jpeg","../Resources/dragon.jpeg","../Resources/moutain.jpeg","../Resources/roller.jpeg",];
var imagelistClass = ["../Resources/dog.jpeg", "../Resources/dog.jpeg", "../Resources/dog.jpeg", "../Resources/nike.jpeg", "../Resources/patriot.jpeg","../Resources/rooney.jpeg","../Resources/starwars.jpeg", "../Resources/sword.jpeg","../Resources/cow.jpeg","../Resources/greenChurch.jpeg","../Resources/dragon.jpeg","../Resources/moutain.jpeg","../Resources/roller.jpeg",];
var imagelistGroup = ["../Resources/husky.jpeg", "../Resources/husky.jpeg", "../Resources/husky.jpeg", "../Resources/nike.jpeg", "../Resources/patriot.jpeg","../Resources/rooney.jpeg","../Resources/starwars.jpeg", "../Resources/sword.jpeg","../Resources/cow.jpeg","../Resources/greenChurch.jpeg","../Resources/dragon.jpeg","../Resources/moutain.jpeg","../Resources/roller.jpeg",];
var imagelistPublic = ["../Resources/Cat.jpg", "../Resources/rain.jpg", "../Resources/weather.jpg", "../Resources/lights.jpg", "../Resources/park.jpg","../Resources/kitten.jpg","../Resources/message.jpg", "../Resources/sword.jpeg","../Resources/cow.jpeg","../Resources/greenChurch.jpeg","../Resources/dragon.jpeg","../Resources/moutain.jpeg","../Resources/roller.jpeg",];

var comments = {};
comments["../Resources/Cat.jpg"] = ["Josh: This is a cat.", "Dantley: It looks like it has magical powers. It must be a liger."];
comments["../Resources/cactus.jpeg"] = [];
comments["../Resources/nike.jpeg"] = ["Andrew: Respect the swoosh!"];
comments["../Resources/patriot.jpeg"] = ["Josh: Reminds me of Football.","Dantley: Flag.... nice!"];
comments["../Resources/rooney.jpeg"] = ["Andrew: Does this guy play soccer?","Tyler: I think he just scored a goal!"];
comments["../Resources/starwars.jpeg"] = ["Josh: Padme's beauty inspires me.", "Dantley: I personally prefer Leia."];
comments["../Resources/sword.jpeg"] = ["Josh: Do you think we could use a sword in our advertisement?"];
comments["../Resources/cow.jpeg"] = ["Josh: I look like a cow in this picture."];
comments["../Resources/greenChurch.jpeg"] = ["Dantley: This is a picture of the painting I made of a dream I had two weeks ago."];
comments["../Resources/dragon.jpeg"] = ["Andrew: This is a Fire-breathing beast!"];
comments["../Resources/moutain.jpeg"] = [];
comments["../Resources/roller.jpeg"] = [];
comments["../Resources/dog.jpeg"] = ["Josh: This is a dog."];
comments["../Resources/husky.jpeg"] = [];
comments["../Resources/lights.jpg"] = [];
comments["../Resources/message.jpg"] = ["Jesse: I took a picture of this at the beach last week.", "Josh: Wow! I've never seen a message in a bottle like that before!"];
comments["../Resources/park.jpg"] = ["Josh: I took this one while playing ultimate frisbee at Kiwanis."];
comments["../Resources/rain.jpg"] = [];
comments["../Resources/kitten.jpg"] = ["Tyler: This is a precious photo my wife took of little Katniss.","Josh: This looks like my cat."];
comments["../Resources/weather.jpg"] =[];

var currentImages = imagelistPublic;
var currentPage = "";
if(location.href.indexOf("Public.html") > -1) {
    if(location.search.indexOf("tab=private") > -1)
        currentPage = "Private";
    else if(location.search.indexOf("tab=group") > -1)
        currentPage = "Group";
    else if(location.search.indexOf("tab=class") > -1)
        currentPage = "Class";
    else
        currentPage = "Public";
}
var currentIndex = 0;
var searching = false;

function logOut()
{
	loggedIn = false;
}
function insertComment(string_in, checked)
{
		if (string_in != "" && window.location.search.indexOf("loggedIn=true") > -1)
		{
      if(checked) comments[currentImages[currentIndex]].push(currentUser + ": (Private) " + string_in);
      else comments[currentImages[currentIndex]].push(currentUser + ": " + string_in);
      updateMainImage(currentIndex, false);
      thecomment.value = "";
      document.getElementById("commentButton").disabled = true;
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
function searchComments(path,val){
    val = val.toLowerCase();

    if(comments[path] &&(comments[path].length>0)){
        var commentsArray =comments[path];
        for(var k =0; k<commentsArray.length;k++){
            var str = commentsArray[k].toLowerCase();
            var n = str.search(val);
            if(n>-1){
                return true;
            }
        }
    }
    return false;
}
function search(){

    setTimeout(function(){
        determinePage();
        var value = document.getElementById("searchInput").value;
        var val = value.toLowerCase();

        if(val == "") {
            searching = false;
            determinePage();
        }
        else{

            searching= true;
            var newArray = [];
            for(var i = 0; i<currentImages.length;i++){
                var newString = currentImages[i];
                var newStr = newString.toLowerCase();
                var strArray = newStr.split("../resources/");
                var str = strArray[1];
                var n = str.search(val);
                if(n>-1 || searchComments(newString,val)){
                    newArray.push(newString);
                }
            }
            currentImages = newArray;
            refreshPictures();
        }
        if(currentImages.length>0){
            updateMainImage(0);
            refreshPictures();
        }
        else{
            refreshPictures();
        }
    },300);

}

function imageBarFull(){
    var len = currentImages.length;
    if(len<6)
        return false;
    else
        return true;
}

function refreshPictures()
{
    console.log(currentPage);

    var len = currentImages.length;
    for(var i =0;i<6;i++) {
        var curImageSlot;
        if (i == 0)
            curImageSlot = document.getElementById("first");
        else if (i == 1)
            curImageSlot = document.getElementById("second");
        else if (i == 2)
            curImageSlot = document.getElementById("third");
        else if (i == 3)
            curImageSlot = document.getElementById("fourth");
        else if (i == 4)
            curImageSlot = document.getElementById("fifth");
        else if (i == 5)
            curImageSlot = document.getElementById("sixth");

        if (i < len) {
            curImageSlot.src = currentImages[i];
            curImageSlot.style.visibility = 'visible';
        }
        else {
            curImageSlot.src = "../Resources/defaultimage.jpg";
            curImageSlot.style.visibility = 'hidden';
        }
    }
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
        console.log(currentPage);

    if(window.location.search.indexOf("loggedIn=true") > -1) {
        loggedIn=true;
        document.getElementById("signInButton").value = currentUser;
        document.getElementById("signInButton").onclick = function() {location.href="account.html?loggedIn=true"};
    }
    else {
        document.getElementById("submitContainer1").hidden = true;
    }
}

function determinePage(){

    console.log(currentPage);

    if(currentPage !== '') {
        document.getElementById("publicNavButton").className = "navButton";
        document.getElementById("classNavButton").className = "navButton";
        document.getElementById("groupNavButton").className = "navButton";
        document.getElementById("privateNavButton").className = "navButton";
        
        document.getElementById("publicNavButton").onclick = goToPublic;
        document.getElementById("classNavButton").onclick = goToClass;
        document.getElementById("groupNavButton").onclick = goToGroup;
        document.getElementById("privateNavButton").onclick = goToPrivate;
    }
    if(currentPage == 'Private') {
        currentImages = imagelistPrivate;
        document.getElementById("privateNavButton").className = "navButton navButtonActive";
    }
    else if(currentPage == 'Group') {
        currentImages = imagelistGroup;
        document.getElementById("groupNavButton").className = "navButton navButtonActive";
    }
    else if(currentPage == 'Class') {
        currentImages = imagelistClass;
        document.getElementById("classNavButton").className = "navButton navButtonActive";
    }
    else if(currentPage == 'Public') {
        currentImages = imagelistPublic;
        document.getElementById("publicNavButton").className = "navButton navButtonActive";
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

function leftArrow ()
{
    if(imageBarFull()){
        var newArray = [];
        newArray.push(currentImages[currentImages.length-1]);
        for(var i = 0; i<currentImages.length-1;i++){
            newArray.push(currentImages[i]);
        }
        currentImages = newArray;
        refreshPictures();
    }
}

function rightArrow()
{
    if(imageBarFull()){
        var first = currentImages[0];
        var newArray = [];
        for(var i = 1; i<currentImages.length;i++){
            newArray.push(currentImages[i]);
        }
        newArray.push(first);
        currentImages = newArray;
        refreshPictures();
    }
}

function goToPrivate(){
    if(!loggedIn){
        location.href = 'login.html';
        return;
    }
    if(location.href.indexOf("Public.html") == -1){
        location.href = 'Public.html?loggedIn=true&tab=private';
        return;
    }
    if(document.getElementById("searchInput"))
        document.getElementById("searchInput").value ="";
    searching=false;
    currentPage = 'Private';
    onLoad();
}

function goToClass(){
    if(!loggedIn){
        location.href = 'login.html';
        return;
    }
    if(location.href.indexOf("Public.html") == -1){
        location.href = 'Public.html?loggedIn=true&tab=class';
        return;
    }
    if(document.getElementById("searchInput"))
        document.getElementById("searchInput").value ="";
    searching=false;
    currentPage = 'Class';
    onLoad();
}

function goToGroup(){
    if(!loggedIn){
        location.href = 'login.html';
        return;
    }
    if(location.href.indexOf("Public.html") == -1){
        location.href = 'Public.html?loggedIn=true&tab=group';
        return;
    }
    if(document.getElementById("searchInput"))
        document.getElementById("searchInput").value ="";
    searching=false;
    currentPage = 'Group';
    onLoad();
}

function goToPublic(){
    if(location.href.indexOf("Public.html") == -1){
        if(loggedIn)
            location.href = 'Public.html?loggedIn=true';
        else
            location.href = 'Public.html';
    }
    if(document.getElementById("searchInput"))
        document.getElementById("searchInput").value ="";
    searching=false;
    currentPage = 'Public';
    onLoad();
}

function goAddInspiration(){
    if(document.getElementById("searchInput"))
        document.getElementById("searchInput").value ="";
    searching=false;
    if(loggedIn)
        location.href = 'add_inspiration.html?loggedIn=true';
    else
        location.href = 'login.html';
}

function onLoad() {
    console.log(currentPage);
    setAccountButton();
    determinePage();
    refreshPictures();
    updateMainImage(0);
}

window.onload = onLoad;

function updateMainImage(index,homepage){
    console.log(currentPage);

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

function updateCommentSubmitButton() {
    if(document.getElementById("thecomment").value == ""){
        document.getElementById("commentButton").disabled = true;
    }
    else
        document.getElementById("commentButton").disabled = false;
}

function submitOnEnter(event){
    if(event.keyCode == 13)
        document.getElementById("commentButton").click();
}
