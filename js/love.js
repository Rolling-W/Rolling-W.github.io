//designed by Rolling-Wind
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
       "SymbianOS", "Windows Phone",
       "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
       if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
       }
    }
    return flag;
 }


function detectBrowser()
{
    var isMobile = IsPC();
    var isChrome =  navigator.userAgent.indexOf('Chrome') > -1
    if (isChrome)
    {
        var x = 0
    }

    else
    {
        alert("请使用最新版本的谷歌浏览器以获得最佳体验。\n网页将随后关闭！");
        close();
    }
    // if(isMobile == false){
        // alert("请在电脑端使用最新版本的谷歌浏览器以获得最佳体验。\n网页将随后关闭！");
        // close();
    // }
}

window.onload = function(){
    var screenWidth = window.screen.width;
    detectBrowser()
    var max = 8, min = 2
    var ClickTimes = 0
    var hastoTimes = Math.floor(Math.random() * (max - min + 1) ) + min;
    var insideL = document.getElementById("inside_love")
    
    insideL.onclick = function(){
        // alert("点击");
        ClickTimes = ClickTimes + 1;
        if(ClickTimes == hastoTimes && screenWidth >= 1080){
              
            document.getElementById("inside_love_h1").innerHTML = "❤";
            // document.getElementById("inside_love_h2").innerHTML = "占位符";
            document.getElementById("inside_love_h1").style.fontSize = '350px';
            document.getElementById("inside_love_h1").style.color='rgba(240, 97, 72, 0.55 )';
            document.getElementById("inside_love_h1").style.width = 'auto';
            document.getElementById("love").style.borderRadius = '0px';
            document.getElementById("love").style.height = '100%';
            document.getElementById("love").style.width = '100%';
            document.getElementById("love").style.color = 'rgba(252, 166, 166, 0.295)';
            document.getElementById("inside_love_h1").style.fontWeight = 'normal';
            document.getElementById("inside_love").style.cursor = 'auto';
            document.getElementById("inside_p").innerHTML = " ";
            //alert("本次点击的次数为 "+ ClickTimes);  
            alert("恭喜你发现彩蛋！"); 
            // document.getElementById("inside_love_h1").style.lineHeight = '100px';
        }
        if(ClickTimes == hastoTimes && screenWidth < 1080){
              
            document.getElementById("inside_love_h1").innerHTML = "❤";
            // document.getElementById("inside_love_h2").innerHTML = "占位符";
            document.getElementById("inside_love_h1").style.fontSize = '250px';
            document.getElementById("inside_love_h1").style.color='rgba(240, 97, 72, 0.55 )';
            document.getElementById("inside_love_h1").style.width = 'auto';
            document.getElementById("love").style.borderRadius = '0px';
            document.getElementById("love").style.height = '100%';
            document.getElementById("love").style.width = '100%';
            document.getElementById("love").style.color = 'rgba(252, 166, 166, 0.295)';
            document.getElementById("inside_love_h1").style.fontWeight = 'normal';
            document.getElementById("inside_love").style.cursor = 'auto';
            document.getElementById("inside_p").innerHTML = " ";
            //alert("本次点击的次数为 "+ ClickTimes);  
            alert("恭喜你发现彩蛋！"); 
            // document.getElementById("inside_love_h1").style.lineHeight = '100px';
        }
        
    }
    
}