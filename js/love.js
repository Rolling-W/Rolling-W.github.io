function detectBrowser()
{
    var isChrome =  navigator.userAgent.indexOf('Chrome') > -1
    if (isChrome)
    {
        var x = 0
    }

    else
    {
        alert("请在电脑端使用最新版本的谷歌浏览器以获得最佳体验。\n网页将随后关闭！");
        close();
    }
}

window.onload = function(){
    detectBrowser()
    var max = 8, min = 2
    var ClickTimes = 0
    var hastoTimes = Math.floor(Math.random() * (max - min + 1) ) + min;
    var insideL = document.getElementById("inside_love")
    
    insideL.onclick = function(){
        // alert("点击");
        ClickTimes = ClickTimes + 1;
        if(ClickTimes == hastoTimes){
              
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
            alert("测试版本：\n本次点击的次数为 "+ ClickTimes);  
            // document.getElementById("inside_love_h1").style.lineHeight = '100px';
        }
        
    }
    
}