function text() { 
}; 

text = new text(); 
number = 0; 

text[number++] = "写友情的太多，而我独喜欢“别见亦无君，别后长忆君”" 
text[number++] = "我愿你好，即使后来与我全然无关。" 
text[number++] = "人从悲伤中落落大方地走出来就是艺术家。" 
text[number++] = "早晚一定会苦尽甘来。" 
text[number++] = "成长的经历大概能让人越来越安静。"
text[number++] = "一次擦肩而过就可能再也不见了哦。" 
text[number++] = "我开心比苦恼多：<br>我希望我们都不要被生活折磨，不要再有那样难熬的崩溃的日子。<br>也希望我们都可以不用非常用力，就能吃到想吃的东西，<br>做到想做的事，见到想见的人。" 
text[number++] = "我们都会迎来更好的，无论是一起还是各自。"
text[number++] = "想起书里的一句话：说不出为什么爱你，但我知道，你就是我不爱别人的理由。"
text[number++] = "一个人爱着另外一个人是藏不住的，不信你去看看《大话西游》里紫霞仙子看至尊宝的眼神，满满的全是爱。"
text[number++] = "拖延和等待，是世界上最容易压胯一个人斗志的东西。"
text[number++] = "时间会让你输得心服口服。那时候，你才会真正了解他的缺点。"
increment = Math.floor(Math.random() * number); 
document.write(text[increment]); 