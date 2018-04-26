//window.alert("Pac Man says Hello");




    SPEED = 100;//ms between each call
    // setTimeout(this.move.bind(this), this.SPEED);

    setInterval(move,SPEED);

    var pacManDirection = 'right';
    var images = document.getElementsByTagName('img');
    for (let i=0; i<images.length; i++){
        //var parent = images[i].parentElement;
        images[i].parentNode.removeChild(images[i]);
        //parent.appendChild(img);
    }

        var img = $('<img id="pacman">');
        img.attr("src", "https://upload.wikimedia.org/wikipedia/commons/4/49/Pacman.svg");
        $('body').append(img);
    // 
    // console.log(images);

    function move() {
        let position = img.position();
        console.log(position);
        if (pacManDirection === 'right') position.left += 50;
        if (pacManDirection === 'left') position.left -= 50;
        if (pacManDirection === 'up') position.top -= 50;
        if (pacManDirection === 'down') position.top += 50;
        // setTimeout(this.move.bind(this), this.SPEED);
    }


    // if (window==top) {
    //     console.log("key listener test");
    //     window.addEventListener('keydown', doKeyPress, false);
    // }

    // // $('#pacman').on('keydown', function(e) {    
    // function doKeyPress (e){
    //     // left
    //     console.log(e.keycode)
    //     if (e.keyCode === 37 || e.keyCode === 65) {
    //     if ( pacManDirection !== "right"){
    //         pacManDirection = 'left';
    //     }
    //     }
    //     if (e.keyCode === 38 || e.keyCode === 87) {
    //     if ( pacManDirection !== "down"){
    //         pacManDirection = 'up';
    //     }
    //     }
    //     if (e.keyCode === 39 || e.keyCode === 68) {
    //     if ( pacManDirection !== "left"){
    //         pacManDirection = 'right';
    //     }
    //     }
    //     if (e.keyCode === 40 || e.keyCode === 83) {
    //     if ( pacManDirection !== "up"){
    //         pacManDirection = 'down';
    //     }
    //     }
    // }
    // });

// }