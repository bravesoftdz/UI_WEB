function refreshDocs() {
  $.get("/refresh", function() {
    location.reload()
  });
}

function logEcharts(id, data) {
  if(data.hasOwnProperty("error")){
    return;
  }
  var myChart = echarts.init(document.getElementById(id),'walden');
  var xAxisDataObj = {}
  $.each(data, function(i, v) {
    if (!_.has(xAxisDataObj, v.author)) {
      xAxisDataObj[v.author] =[0,0];
      if(v.msg.indexOf("Review:>")==0){
        xAxisDataObj[v.author][1] =1;
      }else{
        xAxisDataObj[v.author][0] =1;
      }
    } else {
      if(v.msg.indexOf("Review:>")==0){
        xAxisDataObj[v.author][1]++;
      }else{
        xAxisDataObj[v.author][0]++
      }
      
    }
  })
  var xAxisData = [];
  var seriesData = [];
  var reviewseriesData = [];
  $.each(xAxisDataObj, function(k, v) {
      xAxisData.push(k)
      seriesData.push(v[0])
      reviewseriesData.push(v[1])
    })
    // 指定图表的配置项和数据
  var option = {
    barMinHeight:1,
    title: {
      text: '数据统计'
    },
    tooltip: {},
    legend: {

      data: [{
        name:"更新记录"
      },{
        name:"Review记录"
      }]
    },
    xAxis: {
      data: xAxisData
    },
    yAxis: {
      splitNumber: 1
    },
    series: [{
      barMaxWidth:25,
      name: '更新记录',
      type: 'bar',
      data: seriesData
    },{
      barMaxWidth:25,
      name: 'Review记录',
      type: 'bar',
      data: reviewseriesData
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}


function initDoc(name, homepage) {
  return {
    basePath: 'docs/',
    markdown: {
      smartypants: true,
      renderer: {
        code: function(code, language) {
          language = language || '';
          var codes = '<pre v-pre data-lang="' + language + '"><code class="lang-' + language + '">' + Prism.highlight(code, Prism.languages.javascript);
          codes += '</code></pre>'

          return codes
        }
      }
    },
    //themeColor: '#3F51B5',
    homepage: homepage || 'home.md',
    loadNavbar: false,
    coverpage: false,
    auto2top: true,
    loadSidebar: false,
    autoHeader: true,
    name: name,
    noEmoji: true,
    plugins: [

      function(hook, vm) {
        var header = [
          ''
        ].join('')

        hook.afterEach(function(html) {
          return header + html
        });

        hook.doneEach(function() {
          var path = vm.route.path;
          if (path == "/") {
            path = "/home"
          }
          var showLogNum = 4;
          $.get("/getlog?path=" + path, function(data) {
            if(!data||!$.isArray(data)){
              return
            }
            var html = "<tr><th>author</th><th>date</th><th>log</th></tr>";
            $.each(data, function(i, v) {
              var _class=i>showLogNum?"hideLog":"";
              html += '<tr class="'+_class+'"><td>' + v.author + '</td><td>' + v.date + '</td><td>' + v.msg.replace(new RegExp("\n","gm"),'<br/>') + '</td></tr>'
            })
            //prepend
            html+='<tr><td colspan="3"><button class="button" onClick="$(\'.hideLog\').show()">More...</button></td></tr>'
            $("#main h1").after('<div id="chart" style="height:250px;"></div><table class="table" id="logTable">' + html + '</table>')
            logEcharts('chart', data)
            var documentscrollTop=document.body.scrollTop;
            if(documentscrollTop!=0){
              $(document).scrollTop(documentscrollTop+$("#logTable").height()+$("#chart").height()+20);
            }
            
          });
        })

        hook.ready(function() {
            $("a[href$='.pdf']").each(function(){
              $(this).attr("href",$(this).attr("href").slice(1)).attr("target","_blank")
            })

        })

      }
    ]
  }
}
