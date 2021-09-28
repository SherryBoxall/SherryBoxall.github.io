const d = new Date();
const year = d.getFullYear();
const month = d.getMonth();
const day = d.getDate();

const coingeckoApiCall = {
	"async": true,
	"crossDomain": true,
	"url": `https://coingecko.p.rapidapi.com/coins/ethereum/history?date=${day}-${month}-${year}`,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coingecko.p.rapidapi.com",
		"x-rapidapi-key": "b7da3b1653msh8dc4468bb5d631fp1f9255jsn2e120b00800a"
	}
};

$.ajax(coingeckoApiCall).done(function (response) {
	console.log(response);
	$("#logo").attr("src",`${response.image.small}`);
});