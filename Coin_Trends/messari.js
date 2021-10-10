// Button to search for coin
$("#btn-Search").click(function (){

var canvas = $("#myChart")
canvas.remove()

$("#chartResult").html(`
<canvas id="myChart" width="300" height="300"></canvas>
`)

let coinSearch = $("#coinInput").val()

const messariApiCall = `https://data.messari.io/api/v1/assets/${coinSearch}/metrics`

// Using ajax for api call
$.ajax({
    url: messariApiCall,
    method: "GET"
}).then(function (response) {

    var ctx = document.getElementById('myChart').getContext('2d');

    accessChart(ctx, response)
});
})

function accessChart(ctx, response){

	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['2020', '2019', '2018', '2017', '2016'],
			datasets: [{
				label: `${response.data.name} Return on Investment (By Year)`,
				data: [response.data.roi_by_year["2020_usd_percent"], response.data.roi_by_year["2019_usd_percent"], response.data.roi_by_year["2018_usd_percent"],
				response.data.roi_by_year["2017_usd_percent"], response.data.roi_by_year["2016_usd_percent"]],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)'
				],
				borderWidth: 1
			}
		]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	});

	myChart.update()
}