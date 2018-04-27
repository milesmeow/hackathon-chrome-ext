//window.alert("Pac Man says Hello");
 var today = new Date();
 var hour = today.getHours();
 var minute = today.getMinutes();
 var imgOpacity = 0.5;
var specialKey = true;
var mean="WORK";

// var myAudio = new Audio(); // create the audio object
// myAudio.src = "audio/pacman_beginning.mp3"; // assign the audio file to its src
//myAudio.src = "chrome-extension://ffhcpaeneieoeblmpefmgnmpmcafaekj/audio/pacman_beginning.mp3"; 
// myAudio.src =chrome.runtime.getURL("audio/pacman_beginning.mp3"); 
// console.log(myAudio.src);
// myAudio.play();  



        var form = $('<form method="get" id="searchform" action="http://www.google.com/search"></form>');
        var searchBox = $('<input id="searchHere" type="text" name="q" placeholder=" anything and press Enter">');
        //var btn = $('<input id="submit-btn" type="submit" value="search">')
        $("body").append(form);
        form.append(searchBox);
        //form.append(btn);

        
        document.getElementById("searchHere").addEventListener("keydown", doKeyPress, false);

        /* TODO:: change "if" before publishing*/
 if ( hour === hour ){

    SPEED = 250;//ms between each call
    // setTimeout(this.move.bind(this), this.SPEED);

    setInterval(move,SPEED);
    setInterval(blink, 500); // to blink the images

    var pacManDirection = 'right';
    var images = document.getElementsByTagName('img');
    var words = document.createElement("marquee");

    words.setAttribute("id", "banner");
    words.setAttribute("behavior","scroll");
    words.setAttribute("direction","left");

    if ( hour === 12 ) {
        words.style.display = "block";
        words.innerHTML = "IT IS NOW " + hour + ":" + minute + ", IT'S YOUR LUNCH TIME & PACMAN'S LUNCH TIME";
    } else if ( hour === 18 ) {
        words.style.display = "block";
        words.innerHTML = "IT IS NOW " + hour + ":" + minute + ", IT'S YOUR DINNER TIME & PACMAN'S DINNER TIME";
    } else {
        words.style.display = "none";
    }

    for (let i=0; i<images.length; i++){
        images[i].className = 'pacman-food';
       if ( i % 2 === 0){
        images[i].style.border = "10px solid green";
       } else if ( i % 3 === 0) {
        images[i].style.border = "10px solid yellow";
       } else {
         images[i].style.border = "10px solid red";
       }
    }

        var img = $('<img id="pacman">');
        img.attr("src", "http://rs222.pbsrc.com/albums/dd182/Robby_loves_kaytie/pcmn.gif~c200");
        $('body').append(img);
        $('body').append(words);


    function move() {
        let position = img.position();
        //console.log(($('#banner')).position());

        let trail = $('<div class="trail"></div>');//document.createElement("div");

        trail.css({top: position.top+15, left: position.left+15});
        //console.log(`top: ${trail.style.top}, left: ${trail.style.left}`);
        $("body").append(trail);

        if (pacManDirection === 'right') position.left += 50;
        if (pacManDirection === 'left') position.left -= 50;
        if (pacManDirection === 'up') position.top -= 50;
        if (pacManDirection === 'down') position.top += 50;
        
        // render pacman
        if ( position.left < 0 ) {
            img.css({left: 0});
        } else if ( (position.left +100) > window.innerWidth )  {
            img.css({left: window.innerWidth - 100 });
        }else{
            img.css({left: position.left});
        }
        if (position.top < 100) {
            img.css({ top: 100 });
        } else if (position.top + 100 > document.body.clientHeight) {
            img.css({
                top: document.body.clientHeight - 100
            });
        } else {
            img.css({ top: position.top });
        }

    }

    function blink() {
        if (images) {
            if ( imgOpacity === 0.5 ) {
                imgOpacity = 1.0;
             } else { 
                 imgOpacity = 0.5;
             }   
            //loop through 
                for (let i=0; i<images.length; i++){
                    if ( images[i].id !== 'pacman'){
                        if ( images[i].style.top !== undefined ){
                            images[i].style.opacity = imgOpacity;
                        }
                    }
                }
        }
    }


    if (window==top) {
        console.log("key listener test");
        window.addEventListener('keydown', doKeyPress, false);
    }

    // $('#pacman').on('keydown', function(e) {    
    function doKeyPress (e){
        // left
        if (e.keyCode === 37 || e.keyCode === 65) {
                pacManDirection = 'left';
                $('#pacman').css({transform: "scaleX(-1)"})
        }
        if (e.keyCode === 38 || e.keyCode === 87) {
                pacManDirection = 'up';
                // img.style.transform = "rotate(90deg)";
                $('#pacman').css({transform: "rotateZ(-90deg)"})
        }
        if (e.keyCode === 39 || e.keyCode === 68) {
                pacManDirection = 'right';
                 $('#pacman').css({transform: "scaleY(1)"})
        }
        if (e.keyCode === 40 || e.keyCode === 83) {
                pacManDirection = 'down';
                 $("#pacman").css({transform: "rotateZ(90deg)"});
        }
        if (e.keyCode ===  187) {
            specialKey = !specialKey;
        }
    }
    
 };
