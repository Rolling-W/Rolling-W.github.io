window.onload = function(){
    //存放音乐列表，根据音乐文件路径，进行填写
    var musicList = ["['images/1.mp3','images/2.mp3']"]
    playMusic(musicList);
}
function playMusic(musicList){
    var myAudio = new Audio();
    //是否进行预加载
    myAudio.preload = false;
    //是否显示隐藏按钮
    myAudio.controls = true;
    myAudio.hidden = true;
    //从音乐列表中，获取最后一个音乐（并删除）
    var src = musicList.pop();
    myAudio.src =src;
    //将最后一个音乐添加到数组的开头，这样实现循环
    musicList.unshift(src);
    //绑定音乐结束事件，当音乐播放完成后，将会触发playEndedHandler方法
    myAudio.addEventListener("ended",playEndedHandler,false);
    //播放当前音乐
    myAudio.play();
    document.getElementById("music").appendChild(myAudio);
    //将循环播放关闭，如果开启，将不能触发playEndedHandler方法，只能进行单曲循环
    myAudio.loop = false;
 
    function playEndedHandler(){
        src = musicList.pop();
        myAudio.src = src;
        musicList.unshift(src);
        myAudio.play();
    }
}


$(function () {
    var playerTrack = $("#player-track"),
        bgArtwork = $('#bg-artwork'),
        bgArtworkUrl, albumName = $('#album-name'),
        trackName = $('#track-name'),
        albumArt = $('#album-art'),
        sArea = $('#s-area'),
        seekBar = $('#seek-bar'),
        trackTime = $('#track-time'),
        insTime = $('#ins-time'),
        sHover = $('#s-hover'),
        playPauseButton = $("#play-pause-button"),
        i = playPauseButton.find('i'),
        tProgress = $('#current-time'),
        tTime = $('#track-length'),
        seekT, seekLoc, seekBarPos, cM, ctMinutes, ctSeconds, curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0,
        buffInterval = null,
        tFlag = false,
        albums = ['Bloom of Youth','红玫瑰','See You Again'],
        trackNames = ['清水淳一','陈奕迅','Wiz Khalifa / Charlie Puth'],
        albumArtworks = ['_1','_2','_3'],
        trackUrl = ['https://music.163.com/song/media/outer/url?id=760058.mp3','https://ws.stream.qqmusic.qq.com/C400003LnSNo1ecdc3.m4a?guid=1580957925&vkey=FE630313DC06A85DFD2373122523079486BE623AC09846417337B6519DE9644AB1E727B62FA761C94ED3996B007942DC33B48CE66D70027D&uin=3004&fromtag=66','https://apd-1d06c55b7af0300ee17f271eeaccfde4.v.smtcdns.com/mv.music.tc.qq.com/ABHcEtFiLO1ks3yxa0IG8ffj4QhL0LBkDvptbw_SXKTY/90F6245B39186E1A8DFC870AD821EB0ABE327073077341CBA6178DDDC73E39F59E3A7AD81B8F3CB80FA0CF9266377A85ZZqqmusic_default/qmmv_0a6butyoaqafmsaja4dqwcajaacfbulquic5ghe6jqcaybqfaqea.f9844.mp4?fname=qmmv_0a6butyoaqafmsaja4dqwcajaacfbulquic5ghe6jqcaybqfaqea.f9844.mp4'],
       
        playPreviousTrackButton = $('#play-previous'),
        playNextTrackButton = $('#play-next'),
        currIndex = -1;


    function playPause() {
        setTimeout(function () {
            if (audio.paused) {
                playerTrack.addClass('active');
                albumArt.addClass('active');
                checkBuffering();
                i.attr('class', 'fas fa-pause');
                audio.play();
            } else {
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                clearInterval(buffInterval);
                albumArt.removeClass('buffering');
                i.attr('class', 'fas fa-play');
                audio.pause();
            }
        }, 300);
    }
    function playNextTrackButton(){
        if (audio.paused) {
            playerTrack.addClass('active');
            albumArt.addClass('active');
            playMusic;

            audio.play();}
    
        
    }

    function showHover(event) {
        seekBarPos = sArea.offset();
        seekT = event.clientX - seekBarPos.left;
        seekLoc = audio.duration * (seekT / sArea.outerWidth());

        sHover.width(seekT);

        cM = seekLoc / 60;

        ctMinutes = Math.floor(cM);
        ctSeconds = Math.floor(seekLoc - ctMinutes * 60);

        if ((ctMinutes < 0) || (ctSeconds < 0))
            return;

        if ((ctMinutes < 0) || (ctSeconds < 0))
            return;

        if (ctMinutes < 10)
            ctMinutes = '0' + ctMinutes;
        if (ctSeconds < 10)
            ctSeconds = '0' + ctSeconds;

        if (isNaN(ctMinutes) || isNaN(ctSeconds))
            insTime.text('--:--');
        else
            insTime.text(ctMinutes + ':' + ctSeconds);

        insTime.css({
            'left': seekT,
            'margin-left': '-21px'
        }).fadeIn(0);

    }

    function hideHover() {
        sHover.width(0);
        insTime.text('00:00').css({
            'left': '0px',
            'margin-left': '0px'
        }).fadeOut(0);
    }

    function playFromClickedPos() {
        audio.currentTime = seekLoc;
        seekBar.width(seekT);
        hideHover();
    }

    function updateCurrTime() {
        nTime = new Date();
        nTime = nTime.getTime();

        if (!tFlag) {
            tFlag = true;
            trackTime.addClass('active');
        }

        curMinutes = Math.floor(audio.currentTime / 60);
        curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

        durMinutes = Math.floor(audio.duration / 60);
        durSeconds = Math.floor(audio.duration - durMinutes * 60);

        playProgress = (audio.currentTime / audio.duration) * 100;

        if (curMinutes < 10)
            curMinutes = '0' + curMinutes;
        if (curSeconds < 10)
            curSeconds = '0' + curSeconds;

        if (durMinutes < 10)
            durMinutes = '0' + durMinutes;
        if (durSeconds < 10)
            durSeconds = '0' + durSeconds;

        if (isNaN(curMinutes) || isNaN(curSeconds))
            tProgress.text('00:00');
        else
            tProgress.text(curMinutes + ':' + curSeconds);

        if (isNaN(durMinutes) || isNaN(durSeconds))
            tTime.text('00:00');
        else
            tTime.text(durMinutes + ':' + durSeconds);

        if (isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds))
            trackTime.removeClass('active');
        else
            trackTime.addClass('active');


        seekBar.width(playProgress + '%');

        if (playProgress == 100) {
            i.attr('class', 'fa fa-play');
            seekBar.width(0);
            tProgress.text('00:00');
            albumArt.removeClass('buffering').removeClass('active');
            clearInterval(buffInterval);
        }
    }

    function checkBuffering() {
        clearInterval(buffInterval);
        buffInterval = setInterval(function () {
            if ((nTime == 0) || (bTime - nTime) > 1000)
                albumArt.addClass('buffering');
            else
                albumArt.removeClass('buffering');

            bTime = new Date();
            bTime = bTime.getTime();

        }, 100);
    }

    function selectTrack(flag) {
        if (flag == 0 || flag == 1)
            ++currIndex;
        else
            --currIndex;

        if ((currIndex > -1) && (currIndex < albumArtworks.length)) {
            if (flag == 0)
                i.attr('class', 'fa fa-play');
            else {
                albumArt.removeClass('buffering');
                i.attr('class', 'fa fa-pause');
            }

            seekBar.width(0);
            trackTime.removeClass('active');
            tProgress.text('00:00');
            tTime.text('00:00');

            currAlbum = albums[currIndex];
            currTrackName = trackNames[currIndex];
            currArtwork = albumArtworks[currIndex];

            audio.src = trackUrl[currIndex];

            nTime = 0;
            bTime = new Date();
            bTime = bTime.getTime();

            if (flag != 0) {
                audio.play();
                playerTrack.addClass('active');
                albumArt.addClass('active');

                clearInterval(buffInterval);
                checkBuffering();
            }

            albumName.text(currAlbum);
            trackName.text(currTrackName);
            albumArt.find('img.active').removeClass('active');
            $('#' + currArtwork).addClass('active');

            bgArtworkUrl = $('#' + currArtwork).attr('src');

            bgArtwork.css({
                'background-image': 'url(' + bgArtworkUrl + ')'
            });
        } else {
            if (flag == 0 || flag == 1)
                --currIndex;
            else
                ++currIndex;
        }
    }

    function initPlayer() {
        audio = new Audio();

        selectTrack(0);

        audio.loop = false;

        playPauseButton.on('click', playPause);

        sArea.mousemove(function (event) {
            showHover(event);
        });

        sArea.mouseout(hideHover);

        sArea.on('click', playFromClickedPos);

        $(audio).on('timeupdate', updateCurrTime);

        playPreviousTrackButton.on('click', function () {
            selectTrack(-1);
        });
        playNextTrackButton.on('click', function () {
            selectTrack(1);
        });
    }

    initPlayer();
});