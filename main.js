//window.alert("Pac Man says Hello");
 var today = new Date();
 var hour = today.getHours();
 var minute = today.getMinutes();
 if ( hour === hour){



    SPEED = 500;//ms between each call
    // setTimeout(this.move.bind(this), this.SPEED);

    setInterval(move,SPEED);

    var pacManDirection = 'right';
    var images = document.getElementsByTagName('img');
    var words = document.createElement("marquee");
    // var today = new Date();
    // var hour = today.getHours();
    words.setAttribute("id", "banner");
    words.setAttribute("behavior","slide");
    words.setAttribute("direction","left");
    words.innerHTML = "....LUNCH TIME.... " + " at " + hour + ":" + minute;

    for (let i=0; i<images.length; i++){
        //var parent = images[i].parentElement;
        images[i].parentNode.removeChild(images[i]);
        //parent.appendChild(img);
    }

        var img = $('<img id="pacman">');
        img.attr("src", "https://upload.wikimedia.org/wikipedia/commons/4/49/Pacman.svg");
        $('body').append(img);
        $('body').append(words);
    // 
    // console.log(images);

    function move() {
        let position = img.position();
        console.log(($('#banner')).position());
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
        if (position.top < 0) {
          img.css({ top: 0 });
        } else if (position.top + 100 > window.innerHeight) {
          img.css({ top: window.innerHeight - 100 });
        }
        else{
            img.css({top: position.top});
        }
        var element = document.elementFromPoint(img.css.left, img.css.top);
        console.log("this is an element", element);
        console.log("this is a position check on img.css.left", img.css.left);



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
    }
    // });
 };
