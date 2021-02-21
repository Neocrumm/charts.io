 google.charts.load('current', {packages:['wordtree']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(
          [ ['Phrases'],
           ['coding is fun']
           ['coding is also called programming']
           ['coding is done by programmers']
           ['coding is cool']
           ['coding will may be inproved in 50 years']
           ['coding has two forms, block-based and text-based']
          ]
        );

        var options = {
          wordtree: {
            format: 'implicit',
            word: 'coding'
          }
        };

        var chart = new google.visualization.WordTree(document.getElementById('wordtree_basic'));
        chart.draw(data, options);
      }
