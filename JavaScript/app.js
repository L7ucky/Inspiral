/**
 * Created by Andrew on 3/8/2015.
 */

	var currentUser = "Tyler Holbrook";
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
