var user11553 = {username:"JStudent01"};
var instagram = "JMann22";
var twitter = "JohnM22";
//Create a function that adds properties to an object and then call the function.

function updateSocialMedia(obj, str1, str2) {
	obj["instagramID"] = str1;
	obj["twitterID"] = str2;
	return obj;
}

updateSocialMedia(user11553, instagram, twitter);