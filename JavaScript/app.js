/**
 * Created by Andrew on 3/8/2015.
 */
// Tyler's Stuff

var imagelistPrivate = [1,2,3,4,5,6,7,8];
var imagelistClass = [12,10,8,6,4,2];
var imagelistGroup = [16,17,10,9,7,3,2,1];
var imagelistPublic = [20,21,16,17,18,19,9,11,0];

var posts = {};
posts[0] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/Cat.jpg',link:'www.google.com',comments:["Josh: This is a cat.", "Dantley: It looks like it has magical powers. It must be a liger."]};
posts[1] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/cactus.jpeg',link:'www.google.com',comments:["Josh: This is a cat.", "Dantley: It looks like it has magical powers. It must be a liger."]};
posts[2] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/nike.jpeg',link:'www.nike.com',comments:["Andrew: Respect the swoosh!"]};
posts[3] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/patriot.jpeg',link:'www.nike.com',comments:["Josh: Reminds me of Football.","Dantley: Flag.... nice!"]};
posts[4] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/rooney.jpeg',link:'www.rooney.com',comments:["Andrew: Does this guy play soccer?","Tyler: I think he just scored a goal!"]};
posts[5] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/starwars.jpeg',link:'www.starwars.com',comments:["Josh: Padme's beauty inspires me.", "Dantley: I personally prefer Leia."]};
posts[6] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/sword.jpeg',link:'www.sword.com',comments:["Josh: Do you think we could use a sword in our advertisement?"]};
posts[7] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/cow.jpeg',link:'www.cow.com',comments:["Josh: I look like a cow in this picture."]};
posts[8] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/greenChurch.jpeg',link:'www.greenChurch.com',comments:["Dantley: This is a picture of the painting I made of a dream I had two weeks ago."]};
posts[9] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/dragon.jpeg',link:'www.dragon.com',comments:["Andrew: This is a Fire-breathing beast!"]};
posts[10] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/moutain.jpeg',link:'www.moutain.com',comments:["Andrew: Mountains!"]};
posts[11] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/roller.jpeg',link:'www.roller.com',comments:[]};
posts[12] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/dog.jpeg',link:'www.dog.com',comments:["Andrew: Respect the swoosh!"]};
posts[13] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/husky.jpeg',link:'www.husky.com',comments:[]};
posts[14] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/lights.jpg',link:'www.lights.com',comments:[]};
posts[15] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/message.jpg',link:'www.message.com',comments:["Jesse: I took a picture of this at the beach last week.", "Josh: Wow! I've never seen a message in a bottle like that before!"]};
posts[16] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/park.jpg',link:'www.park.com',comments:["Josh: I took this one while playing ultimate frisbee at Kiwanis."]};
posts[17] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/rain.jpg',link:'www.rain.com',comments:[]};
posts[18] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/kitten.jpg',link:'www.kitten.com',comments:["Tyler: This is a precious photo my wife took of little Katniss.","Josh: This looks like my cat."]};
posts[19] = {op:'Andrew', note:'Click the link below to go to the page',image:'../Resources/weather.jpg',link:'www.weather.com',comments:["Andrew: Respect the weather channel!"]};
posts[20] = {op:'Andrew', note:'Click the link below to go to the page',image:'http://blog.jimdo.com/wp-content/uploads/2014/01/tree-247122.jpg',link:'http://www.beach.com',comments:["Andrew: I want to go there so badly!"]};
posts[21] = {op:'Andrew', note:'Click the link below to go to the page',image:'http://images.visitcanberra.com.au/images/canberra_hero_image.jpg',link:'http://www.hotairballons.com',comments:["Andrew: Awesome!!"]};

var currentImages = imagelistPublic;
var currentPage = "public";
var currentImageIndex = 0;
var searching = false;

var currentUser = "Andrew";
var currGroup = "Byters"
var currClassCode = "012345";
var loggedIn = false;


function logOut()
{
	loggedIn = false; 
	determineTabName();
    changePage('public');
}

function insertComment(string_in, checked)
{
    if (string_in != "" && loggedIn){

        if(checked)
            posts[currentImages[currentImageIndex]].comments.push(currentUser + ": (Private) " + string_in);
        else
            posts[currentImages[currentImageIndex]].comments.push(currentUser + ": " + string_in);
        updateMainImage(currentImageIndex, false);
        thecomment.value = "";
        document.getElementById("commentButton").disabled = true;

    }
}

//this is the function to change image on upload image
function readURL(input, type) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                if (type == 1) 
            	{
            		document.getElementById("uploadImage").src= e.target.result;
            	}
                else if (type == 2)
            	{
            		document.getElementById("ProfilePic").src= e.target.result;
            	}
                   // .attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

function searchComments(postID,val){
    val = val.toLowerCase();
    var imgComments = posts[postID].comments;
    if(imgComments &&(imgComments.length>0)){
        var commentsArray =imgComments;
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

function getImageName(url){
    var index = url.lastIndexOf("/") + 1;
    var name = url.substr(index);
    console.log(name);
    return name;
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
                var postID = currentImages[i];
                var post = posts[postID];
                var newString = getImageName(post.image);
                var str = newString.toLowerCase();
                var n = str.search(val);
                if(n>-1 || searchComments(postID,val)){
                    newArray.push(postID);
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
            curImageSlot.src = posts[currentImages[i]].image;
            curImageSlot.style.visibility = 'visible';
        }
        else {
            curImageSlot.src = "../Resources/defaultimage.jpg";
            curImageSlot.style.visibility = 'hidden';
        }

        if(currentImageIndex == i){
            //Update the border to the correct picture
            updateSelectionStyle(curImageSlot);
        }
    }
}

function updateSelectionStyle(curImageSlot){
    //Reset all other picture styling
    document.getElementById("first").style.padding = '.4%';
    document.getElementById("second").style.padding = '.4%';
    document.getElementById("third").style.padding = '.4%';
    document.getElementById("fourth").style.padding = '.4%';
    document.getElementById("fifth").style.padding = '.4%';
    document.getElementById("sixth").style.padding = '.4%';

    document.getElementById("first").style.border = 'none';
    document.getElementById("second").style.border = 'none';
    document.getElementById("third").style.border = 'none';
    document.getElementById("fourth").style.border = 'none';
    document.getElementById("fifth").style.border = 'none';
    document.getElementById("sixth").style.border = 'none';


    curImageSlot.style.padding = '0';
    curImageSlot.style.border = '10px solid #484848';
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
function checkCheckboxes()
{
	if (visibilityCheckbox1.checked == false && visibilityCheckbox2.checked == false &&
		visibilityCheckbox3.checked == false &&	visibilityCheckbox4.checked == false)
	{
		window.alert("Please check at least one visibility option.");
	}
	else changePage('public'); 
}

function setAccountButton()
{


    if(loggedIn) {
        document.getElementById("signInButton").value = currentUser;
        document.getElementById("signInButton").onclick = function() {changePage('account')};
        document.getElementById("submitContainer1").hidden = false;
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


function login(usernameEntered, classCodeEntered){
	currClassCode = classCodeEntered;
	if (usernameEntered != "") currentUser = usernameEntered;
	if (document.getElementById("signUpEmail").value != "")
	{
		document.getElementById("editEmail").value = document.getElementById("signUpEmail").value;
	}
	if (classCodeEntered != "012345") document.getElementById("editClassCode").innerHTML = classCodeEntered;
	document.getElementById("UsernameSlot").innerHTML = usernameEntered;
	if (usernameEntered == "") document.getElementById("UsernameSlot").innerHTML = currentUser;
	document.getElementById("signInUsername").value = "";
	document.getElementById("signInPassword").value = "";
	document.getElementById("signUpUsername").value = "";
	document.getElementById("signUpPassword").value = "";
	document.getElementById("signUpEmail").value = "";
	document.getElementById("signUpClassCode").value = "";
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
    else if(page == "group"&&loggedIn){
        document.getElementById("mainViewWrapper").style.display ="inline";
        currentPage = 'group';
    }
    else if(page == "public"){
        document.getElementById("mainViewWrapper").style.display ="inline";
        currentPage = 'public';
    }
    else if(page == "private"&&loggedIn){
        document.getElementById("mainViewWrapper").style.display ="inline";
        currentPage ='private';
    }
    else if(page == "class"&&loggedIn){
        document.getElementById("mainViewWrapper").style.display ="inline";
        currentPage ='class';
    }
    else if(page == "account"&&loggedIn){
        document.getElementById("accountWrapper").style.display ="inline";
        currentPage ='account';
    }
    else if(page == "addInspiration"&&loggedIn){
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

function updatePostInfo(index){
    var post = posts[currentImages[index]];
    document.getElementById('op').innerHTML = 'Posted By: '+post.op;
    if(post.note.length>0){
        document.getElementById('note').innerHTML = post.note;
        document.getElementById('note').display = 'inline-block';
    }
    else{
        document.getElementById('note').display = 'none';
    }
    if(post.link.length>0){
        document.getElementById('opLink').display = 'inline-block';
        document.getElementById('actualLink').innerHTML = post.link;
        document.getElementById('actualLink').href = post.link;
        document.getElementById('opLink').style.margin='10px 0px 10px 5%';
    }
    else{
        document.getElementById('opLink').display = 'none';
    }

}

function updateMainImage(index,homepage){
    currentImageIndex = index;

    if(homepage){
        changePage('public');
    }

    document.getElementById('mainImage').src= posts[currentImages[index]].image;
    document.getElementById('commentshere').innerHTML = "";
    if (posts[currentImages[index]].comments.length == 0)
    {
    	document.getElementById('commentshere').innerHTML += "<p class='aComment' style='color: gray'>" + "No comments yet." + "</p>";
    }
    else{
	   	for(var i=0;i<posts[currentImages[index]].comments.length;i++)
	   	{
	       	document.getElementById('commentshere').innerHTML += "<p class='aComment'>" + posts[currentImages[index]].comments[i] + "</p>";
	   	}
	}
    updatePostInfo(index);
    refreshPictures();
}



// Account page stuff

function leave() {
    document.getElementById("currentGroup").value = "";
    document.getElementById("leaveGroupButton").disabled = true;
}

function newGroup() {
	currGroup = document.getElementById("newGroup").value;
	determineTabName();
    document.getElementById("currentGroup").value = document.getElementById("newGroup").value;
    document.getElementById("newGroup").value = "";
    document.getElementById("createGroupButton").disabled = true;
    document.getElementById("leaveGroupButton").disabled = false;
}

function joinGroup() {
	currGroup = document.getElementById("joinGroup").value;
	determineTabName();
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
			var x = "Class (Code: ";
				x += currClassCode;
				x += ")";
			document.getElementById("classNavButton").innerHTML = x;

			x = "Group (";
			x += currGroup;
			x += ")";
			document.getElementById("groupNavButton").innerHTML = x;
		}
		else
		{
			document.getElementById("classNavButton").innerHTML = "Class";
			document.getElementById("groupNavButton").innerHTML = "Group";
		}
}
function moveToRight(){
    if(currentImages.length== 0){
        return;
    }
    else if(currentImageIndex==currentImages.length-1){
        updateMainImage(0);
    }
    else if(currentImageIndex==5){
        rightArrow();
        updateMainImage(5);
    }
    else
        updateMainImage(currentImageIndex+1);
}
function moveToLeft(){
    if(currentImages.length<=6 && currentImageIndex == 0){
        updateMainImage(currentImages.length-1);
    }
    else if(currentImages.length== 0){
        return;
    }
    else if(currentImageIndex==0){
        leftArrow();
        updateMainImage(0);
    }
    else
        updateMainImage(currentImageIndex-1);
}
document.onkeydown = function(event) {
    if (!event)
        event = window.event;
    var code = event.keyCode;
    if (event.charCode && code == 0)
        code = event.charCode;
    switch(code) {
        case 37:
            // Key left.
            moveToLeft();
            break;
        case 38:
            // Key up.
            break;
        case 39:
            // Key right.
            moveToRight();
            break;
        case 40:
            // Key down.
            break;
    }

};

function facebookLogin() {
    if(document.getElementById('signInUsername').value != '')
        login(document.getElementById('signInUsername').value, '012345');
    else
        login('Andrew', '012345');
    determineTabName();
}
