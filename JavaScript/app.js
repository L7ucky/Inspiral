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
var currentPage = "public";

var currentIndex = 0;
var searching = false;

function logOut()
{
	loggedIn = false; 
	determineTabName();
    changePage('public');
}
function insertComment(string_in, checked)
{
		if (string_in != "" && loggedIn)
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


    if(loggedIn) {
        document.getElementById("signInButton").value = currentUser;
        document.getElementById("signInButton").onclick = function() {changePage('account')};
    }
    else {
        document.getElementById("signInButton").value = 'Sign In';
        document.getElementById("submitContainer1").hidden = true;
    }
}

function determinePage(){

    document.getElementById("publicNavButton").className = "navButton";
    document.getElementById("privateNavButton").className = "navButton";
    document.getElementById("groupNavButton").className = "navButton";
    document.getElementById("classNavButton").className = "navButton";

    if(currentPage == 'public') {
        currentImages = imagelistPublic;
        document.getElementById("publicNavButton").className = "navButton navButtonActive";
    }
    else if(currentPage == 'private') {
        currentImages = imagelistPrivate;
        document.getElementById("privateNavButton").className = "navButton navButtonActive";
    }
    else if(currentPage == 'group') {
        currentImages = imagelistGroup;
        document.getElementById("groupNavButton").className = "navButton navButtonActive";
    }
    else if(currentPage == 'class') {
        currentImages = imagelistClass;
        document.getElementById("classNavButton").className = "navButton navButtonActive";
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


function login(){
    loggedIn = true;
    changePage("public");
}
function accountButtonPressed(){
    if(loggedIn){
        changePage('account');
    }
    else{
        changePage('login');
    }

}
function changePage(page){
    document.getElementById("mainViewWrapper").style.display ="none";
    document.getElementById("addInspirationWrapper").style.display ="none";
    document.getElementById("accountWrapper").style.display ="none";
    document.getElementById("loginWrapper").style.display ="none";

    if(page == "login"){
        document.getElementById("loginWrapper").style.display ="inline";
        currentPage ='login';
    }
    else if(page == "group"){
        document.getElementById("mainViewWrapper").style.display ="inline";
        currentPage = 'group';
    }
    else if(page == "public"){
        document.getElementById("mainViewWrapper").style.display ="inline";
        currentPage = 'public';
    }
    else if(page == "private"){
        document.getElementById("mainViewWrapper").style.display ="inline";
        currentPage ='private';
    }
    else if(page == "class"){
        document.getElementById("mainViewWrapper").style.display ="inline";
        currentPage ='class';
    }
    else if(page == "account"){
        document.getElementById("accountWrapper").style.display ="inline";
        currentPage ='account';
    }
    else if(page == "addInspiration"){
        document.getElementById("addInspirationWrapper").style.display ="inline";
        currentPage ='addInspiration';
    }
    else {
        document.getElementById("loginWrapper").style.display = "inline";
        currentPage = 'login';
    }
    if(document.getElementById("searchInput"))
        document.getElementById("searchInput").value ="";
    searching=false;
    onLoad();

}

function onLoad() {
    setAccountButton();
    determinePage();
    refreshPictures();
    updateMainImage(0);
    determineTabName();
}

window.onload = function(){
    changePage('public');
    onLoad();
};

function updateMainImage(index,homepage){
    console.log(currentPage);

    if(homepage){
        changePage('public');
    }

    document.getElementById('mainImage').src= currentImages[index];
    document.getElementById('commentshere').innerHTML = "";
    if (comments[currentImages[index]].length == 0)
    {
    	document.getElementById('commentshere').innerHTML += "<p class='aComment' style='color: gray'>" + "No comments yet." + "</p>";
    }
    else{
	   	for(var i=0;i<comments[currentImages[index]].length;i++)
	   	{
	       	document.getElementById('commentshere').innerHTML += "<p class='aComment'>" + comments[currentImages[index]][i] + "</p>";
	   	}
	}
    currentIndex = index;
}



// Account page stuff

function leave() {
    document.getElementById("currentGroup").value = "";
    document.getElementById("leaveGroupButton").disabled = true;
}

function newGroup() {
    document.getElementById("currentGroup").value = document.getElementById("newGroup").value;
    document.getElementById("newGroup").value = "";
    document.getElementById("createGroupButton").disabled = true;
    document.getElementById("leaveGroupButton").disabled = false;
}

function joinGroup() {
    document.getElementById("currentGroup").value = document.getElementById("joinGroup").value;
    document.getElementById("joinGroup").value = "";
    document.getElementById("joinGroupButton").disabled = true;
    document.getElementById("leaveGroupButton").disabled = false;
}

function updateCommentSubmitButton() {
    if(document.getElementById("thecomment").value == ""){
        document.getElementById("commentButton").disabled = true;
    }
    else
        document.getElementById("commentButton").disabled = false;
}

function submitOnEnter(event, button) {
    if(event.keyCode == 13)
        document.getElementById(button).click();
}

function updateCreateButton() {
    if(document.getElementById("newGroup").value == ""){
        document.getElementById("createGroupButton").disabled = true;
    }
    else
        document.getElementById("createGroupButton").disabled = false;
}

function updateJoinButton() {
    if(document.getElementById("joinGroup").value == ""){
        document.getElementById("joinGroupButton").disabled = true;
    }
    else
        document.getElementById("joinGroupButton").disabled = false;
}

function updateSignInButton() {
    if(document.getElementById("signInUsername").value == "" || document.getElementById("signInPassword").value == ""){
        document.getElementById("signUpButton2").disabled = true;
    }
    else
        document.getElementById("signUpButton2").disabled = false;
}

function updateSignUpButton() {
    if(document.getElementById("signUpUsername").value == ""
    || document.getElementById("signUpPassword").value == ""
    || document.getElementById("signUpEmail").value == ""
    || document.getElementById("signUpClassCode").value == ""){
        document.getElementById("signUpButton").disabled = true;
    }
    else
        document.getElementById("signUpButton").disabled = false;
}

function updateSaveChangesButton() {
    if(document.getElementById("editEmail").value == "")
        document.getElementById("saveChangesButton").disabled = true;
    else
        document.getElementById("saveChangesButton").disabled = false;
}
function determineTabName()
{
	if (loggedIn == true) 
		{
			document.getElementById("classNavButton").innerHTML = "Class (Section 1)";
			document.getElementById("groupNavButton").innerHTML = "Group (Byters)";
		}
		else
		{
			document.getElementById("classNavButton").innerHTML = "Class";
			document.getElementById("groupNavButton").innerHTML = "Group";
		}
}
