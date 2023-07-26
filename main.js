//Chart Options
const options = {
  chart: {
    height: 450,
    width: "100%",
    type: "bar",
    background: "#f4f4f4",
    foreColor: "#333",
  },
  series: [
    {
      name: "Population",
      data: [
        8550405, 3971883, 2720546, 2296224, 1567442, 1563025, 1469845, 1394928,
        1300092, 1026908,
      ],
    },
  ],
  xaxis: {
    categories: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Philadelphia",
      "Phoenix",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose",
    ],
  },

  fill: {
    colors: ["#f44336"],
  },
  dataLabels: {
    enabled: false,
  },
  title: {
    text: "Largest US cities by population",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: "25px",
    },
  },
};

//Init Charts
const chart = new ApexCharts(document.querySelector("#chart"), options);

//Render Chart
chart.render();

//Event method
document.querySelector("#btn1").addEventListener("click", () => {
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  });
});
document.querySelector("#btn2").addEventListener("click", () => {
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
  });
});
