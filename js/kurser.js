new Chart(document.getElementById("bar-chart"), {
    type: 'pie',
    data: {
      labels: ["Användargränssnitt", "Utvecklingsmiljöer", "Användning av frameworks", "Animering", "Kompilatorprogrammering","Projektverktyg"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","black"],
        data: [3,3,3,2,3,2]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Yrkesämnen'
      }
    }
});