var siteName = "Do Cool Shiz";

var home = function(req, res){
	res.render('home', {
		title: siteName
	});
};

module.exports.home = home;