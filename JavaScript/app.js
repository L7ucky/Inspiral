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
	var currentImages = imagelist;
    var currentPage ='Public';
    function insertComment(string_in, checked)
	{
		if (string_in != "")
		{
			var output = document.getElementById("commentshere").innerHTML;
			output += "<p class='aComment'>";
			output += currentUser;
			output +=": ";
			if (checked) output += "(Private) ";
			output += string_in;
			output += "</p>";
			document.getElementById("commentshere").innerHTML = output;
			thecomment.value = "";
		}
	}
	function insertInspiration(string_in, checked1, checked2, checked3, checked4)
	{
		textupload.value = "";
		visibilityCheckbox1.checked = false;
		visibilityCheckbox2.checked = false;
		visibilityCheckbox3.checked = false;
		visibilityCheckbox4.checked = false;
		browse.value = "";
	}




//Dantley's Stuff
    var numberScrollRight = 6;
	var numberScrollLeft = currentImages.length-1;
	var currentImageForLoad=0;
	function initPicture()
	{
        determinePage();
        numberScrollLeft = currentImages.length-1;
		document.getElementById("first").src = currentImages[0];
		document.getElementById("second").src = currentImages[1];
		document.getElementById("third").src = currentImages[2];
		document.getElementById("fourth").src = currentImages[3];
		document.getElementById("fifth").src = currentImages[4];
		document.getElementById("sixth").src = currentImages[5];
	}
	function setAccountButton()
	{
        if(window.location.search.indexOf("loggedIn=true") > -1) {
            loggedIn=true;
            document.getElementById("signInButton").value = currentUser;
            document.getElementById("signInButton").onclick = function() {location.href="account.html"};
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
	document.getElementById("first").src=document.getElementById("second").src;
	document.getElementById("second").src=document.getElementById("third").src;
	document.getElementById("third").src=document.getElementById("fourth").src;
	document.getElementById("fourth").src=document.getElementById("fifth").src;
	document.getElementById("fifth").src=document.getElementById("sixth").src;
	//alert(numberScrollRight);
	document.getElementById("sixth").src=currentImages[numberScrollRight];
	if(numberScrollRight==currentImages.length-1)
	{
		numberScrollRight=0;
	}
	else
	{
		numberScrollRight++;
	}
	if(numberScrollLeft==currentImages.length-1)
	{
		numberScrollLeft=0;
	}
	else
	{
		numberScrollLeft++;
	}

}

function leftArrow()
{
	document.getElementById("sixth").src=document.getElementById("fifth").src;
	document.getElementById("fifth").src=document.getElementById("fourth").src;
	document.getElementById("fourth").src=document.getElementById("third").src;
	document.getElementById("third").src=document.getElementById("second").src;
	document.getElementById("second").src=document.getElementById("first").src;
	//alert(numberScrollLeft);
	document.getElementById("first").src=currentImages[numberScrollLeft];
	if (numberScrollLeft ==0)
	{
		numberScrollLeft = currentImages.length-1;
	}
	else
	{
		numberScrollLeft--;
	}
	if (numberScrollRight ==0)
	{
		numberScrollRight = currentImages.length-1;
	}
	else
	{
		numberScrollRight--;
	}


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
};