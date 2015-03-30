/**
 * Created by Andrew on 3/8/2015.
 */
// Tyler's Stuff
	var currentUser = "Andrew";
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
			privateCheckbox.checked = false;
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
var imagelist = ["../Resources/cactus.jpeg", "../Resources/dog.jpeg", "../Resources/husky.jpeg", "../Resources/nike.jpeg", "../Resources/patriot.jpeg","../Resources/rooney.jpeg","../Resources/starwars.jpeg", "../Resources/sword.jpeg","../Resources/cow.jpeg","../Resources/greenChurch.jpeg","../Resources/dragon.jpeg","../Resources/moutain.jpeg","../Resources/roller.jpeg",];
	var numberScrollRight = 6;
	var numnberScrollLeft = imagelist.length-1;
	var currentImageForLoad=0;
	function initPicture()
	{
		document.getElementById("first").src = imagelist[0];
		document.getElementById("second").src = imagelist[1];
		document.getElementById("third").src = imagelist[2];
		document.getElementById("fourth").src = imagelist[3];
		document.getElementById("fifth").src = imagelist[4];
		document.getElementById("sixth").src = imagelist[5];
	}
	function setAccountButton()
	{
    if(window.location.search.indexOf("loggedIn=true") > -1) {
        document.getElementById("signInButton").value = "Andrew";
        document.getElementById("signInButton").onclick = function() {location.href="account.html"};
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
	document.getElementById("sixth").src=imagelist[numberScrollRight];
	if(numberScrollRight==imagelist.length-1)
	{
		numberScrollRight=0;
	}
	else
	{
		numberScrollRight++;
	}
	if(numnberScrollLeft==imagelist.length-1)
	{
		numnberScrollLeft=0;
	}
	else
	{
		numnberScrollLeft++;
	}

}

function leftArrow()
{
	document.getElementById("sixth").src=document.getElementById("fifth").src;
	document.getElementById("fifth").src=document.getElementById("fourth").src;
	document.getElementById("fourth").src=document.getElementById("third").src;
	document.getElementById("third").src=document.getElementById("second").src;
	document.getElementById("second").src=document.getElementById("first").src;
	//alert(numnberScrollLeft);
	document.getElementById("first").src=imagelist[numnberScrollLeft];
	if (numnberScrollLeft ==0)
	{
		numnberScrollLeft = imagelist.length-1;
	}
	else
	{
		numnberScrollLeft--;
	}
	if (numberScrollRight ==0)
	{
		numberScrollRight = imagelist.length-1;
	}
	else
	{
		numberScrollRight--;
	}


}

//Functionality for the custom selector
//document.getElementsByClassName("select").onclick("click" , function() {
//
//    this.parent(".custom-select").toggleClass("open");
//
//});
//
//$(document).mouseup(function (e)
//{
//    var container = document.getElementsByClassName(".custom-select");
//
//    if (container.has(e.target).length === 0)
//    {
//        container.removeClass("open");
//    }
//});
//
//
//document.getElementsByTagName("select").on("change" , function() {
//
//    var selection = this.find("option:selected").text(),
//        labelFor = this.attr("id"),
//        label = document.getElementById("[for='" + labelFor + "']");
//
//    label.find(".selection-choice").html(selection);
//
//});