const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://coingecko.p.rapidapi.com/coins/ethereum/history?date=22-09-2021",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coingecko.p.rapidapi.com",
		"x-rapidapi-key": "b7da3b1653msh8dc4468bb5d631fp1f9255jsn2e120b00800a"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});