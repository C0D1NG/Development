var confirmCases = "# Total Cases";
var recoveredCases = "# Recoveries";
var deaths = "# Deaths";

if ($(window).width() < 496) {
    confirmCases = "# TC";
    recoveredCases = "# RC";
    deaths = "# Dths";
}

var xmlhttp = new XMLHttpRequest();
var url = "https://api.covid19api.com/summary";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        worldGraph(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function worldGraph(arr) {
    var tc = arr.Global.TotalConfirmed;
    var tr = arr.Global.TotalRecovered;
    var td = arr.Global.TotalDeaths;

    createGraph(tc, tr, td);
    myFunction(arr);
}
var countryMap = new Map();
countryMap.set("Worldwide", -1);

function myFunction(arr) {

    var countrySel = document.querySelector("#countrySel");
    countrySel.length = 1;
    var countryArr = arr.Countries

    for (var i = 0; i < countryArr.length; i++) {
        countrySel.options[countrySel.options.length] = new Option(countryArr[i].Country, countryArr[i].Country);
        countryMap.set(countryArr[i].Country, i);
    }

    countrySel.onchange = function () {
        var selected_country = document.querySelector("#countrySel").value;
        var indx = countryMap.get(selected_country);

        try {
            var tc = countryArr[indx].TotalConfirmed;
            var tr = countryArr[indx].TotalRecovered;
            var td = countryArr[indx].TotalDeaths;
            createGraph(tc, tr, td);

        } catch (error) {
            try {
                var tc = arr.Global.TotalConfirmed;
                var tr = arr.Global.TotalRecovered;
                var td = arr.Global.TotalDeaths;
                createGraph(tc, tr, td);

            } catch (error) {
                var tc = 0;
                var tr = 0;
                var td = 0;
                createGraph(tc, tr, td);
            }

        }
    }

}
var pt = 0;

function createGraph(ttc, ttr, ttd) {
    $('#barChart').remove();
    $('#graph').append('<canvas id="barChart"></canvas>');
    var ctx = document.getElementById('barChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [confirmCases, recoveredCases, deaths],
            datasets: [{
                data: [ttc, ttr, ttd],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderWidth: 1,
            }]
        },
        options: {
            legend: {
                display: false,
            },

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: "grey",
                        fontSize: "18",
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: "grey",
                        fontSize: "18",
                    }
                }]
            }
        }

    });
    var AC = document.querySelector("#confirmCs");
    var RC = document.querySelector("#recoveries");
    var DC = document.querySelector("#deaths");
    AC.textContent = ttc;
    RC.textContent = ttr;
    DC.textContent = ttd;
}