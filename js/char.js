var keys = [];
var fps = 120;

var resource = {
    res : {
        "bg"                          : "images/bg.png",    
        "bg_init"                     : "images/bg_init.jpg",    
        "bg_loading"                  : "images/bg_loading.jpg",    
        "bg_win"                      : "images/bg_win.jpg",    
        "bg_lose"                     : "images/bg_lose.jpg",    
        
        "primary_arm_ready"           : "images/primary/arm-ready.png",
        "primary_legs"                : "images/primary/legs.png",
        "primary_torso"               : "images/primary/torso.png",
        "primary_arm_ready_r"         : "images/primary/arm-ready-r.png",
        "primary_head"                : "images/primary/head.png",
        "primary_hair"                : "images/primary/hair.png",
        "primary_arm_fist"            : "images/primary/arm-fist.png",
        "primary_legs_jump"           : "images/primary/legs-jump.png",
        "primary_legs_walk"           : "images/primary/legs-walk.png",
        "primary_arm_fist_r"          : "images/primary/arm-fist-r.png",
                
        "primary_flip_arm_ready"      : "images/primary/flip-arm-ready.png",
        "primary_flip_legs"           : "images/primary/flip-legs.png",
        "primary_flip_torso"          : "images/primary/flip-torso.png",
        "primary_flip_arm_ready_r"    : "images/primary/flip-arm-ready-r.png",
        "primary_flip_head"           : "images/primary/flip-head.png",
        "primary_flip_hair"           : "images/primary/flip-hair.png",
        "primary_flip_arm_fist"       : "images/primary/flip-arm-fist.png",
        "primary_flip_legs_jump"      : "images/primary/flip-legs-jump.png",
        "primary_flip_legs_walk"      : "images/primary/flip-legs-walk.png",
        "primary_flip_arm_fist_r"     : "images/primary/flip-arm-fist-r.png",
        
        "secondary_arm_ready"           : "images/secondary/arm-ready.png",
        "secondary_legs"                : "images/secondary/legs.png",
        "secondary_torso"               : "images/secondary/torso.png",
        "secondary_arm_ready_r"         : "images/secondary/arm-ready-r.png",
        "secondary_head"                : "images/secondary/head.png",
        "secondary_hair"                : "images/secondary/hair.png",
        "secondary_arm_fist"            : "images/secondary/arm-fist.png",
        "secondary_legs_jump"           : "images/secondary/legs-jump.png",
        "secondary_legs_walk"           : "images/secondary/legs-walk.png",
        "secondary_arm_fist_r"          : "images/secondary/arm-fist-r.png",
                
        "secondary_flip_arm_ready"      : "images/secondary/flip-arm-ready.png",
        "secondary_flip_legs"           : "images/secondary/flip-legs.png",
        "secondary_flip_torso"          : "images/secondary/flip-torso.png",
        "secondary_flip_arm_ready_r"    : "images/secondary/flip-arm-ready-r.png",
        "secondary_flip_head"           : "images/secondary/flip-head.png",
        "secondary_flip_hair"           : "images/secondary/flip-hair.png",
        "secondary_flip_arm_fist"       : "images/secondary/flip-arm-fist.png",
        "secondary_flip_legs_jump"      : "images/secondary/flip-legs-jump.png",
        "secondary_flip_legs_walk"      : "images/secondary/flip-legs-walk.png",
        "secondary_flip_arm_fist_r"     : "images/secondary/flip-arm-fist-r.png"
    }
};

var images = {
    files : {},
    res : {
        bg : {
            "bg"               : resource.res["bg"],
            "bg_loading"       : resource.res["bg_loading"],
            "bg_win"           : resource.res["bg_win"],
            "bg_lose"          : resource.res["bg_lose"],
            "bg_init"          : resource.res["bg_init"]
        },
        char1 : {
            "arm-ready"        : resource.res["primary_arm_ready"],
            "legs"             : resource.res["primary_legs"],
            "torso"            : resource.res["primary_torso"],
            "arm-ready-r"      : resource.res["primary_arm_ready_r"],
            "head"             : resource.res["primary_head"],
            "hair"             : resource.res["primary_hair"],
            "arm-fist"         : resource.res["primary_arm_fist"],
            "legs-jump"        : resource.res["primary_legs_jump"],
            "legs-walk"        : resource.res["primary_legs_walk"],
            "arm-fist-r"       : resource.res["primary_arm_fist_r"],
            
            "flip-arm-ready"   : resource.res["primary_flip_arm_ready"],
            "flip-legs"        : resource.res["primary_flip_legs"],
            "flip-torso"       : resource.res["primary_flip_torso"],
            "flip-arm-ready-r" : resource.res["primary_flip_arm_ready_r"],
            "flip-head"        : resource.res["primary_flip_head"],
            "flip-hair"        : resource.res["primary_flip_hair"],
            "flip-arm-fist"    : resource.res["primary_flip_arm_fist"],
            "flip-legs-jump"   : resource.res["primary_flip_legs_jump"],
            "flip-legs-walk"   : resource.res["primary_flip_legs_walk"],
            "flip-arm-fist-r"  : resource.res["primary_flip_arm_fist_r"]
        },
        char2 : {
            "arm-ready"        : resource.res["secondary_arm_ready"],
            "legs"             : resource.res["secondary_legs"],
            "torso"            : resource.res["secondary_torso"],
            "arm-ready-r"      : resource.res["secondary_arm_ready_r"],
            "head"             : resource.res["secondary_head"],
            "hair"             : resource.res["secondary_hair"],
            "arm-fist"         : resource.res["secondary_arm_fist"],
            "legs-jump"        : resource.res["secondary_legs_jump"],
            "legs-walk"        : resource.res["secondary_legs_walk"],
            "arm-fist-r"       : resource.res["secondary_arm_fist_r"],
            
            "flip-arm-ready"   : resource.res["secondary_flip_arm_ready"],
            "flip-legs"        : resource.res["secondary_flip_legs"],
            "flip-torso"       : resource.res["secondary_flip_torso"],
            "flip-arm-ready-r" : resource.res["secondary_flip_arm_ready_r"],
            "flip-head"        : resource.res["secondary_flip_head"],
            "flip-hair"        : resource.res["secondary_flip_hair"],
            "flip-arm-fist"    : resource.res["secondary_flip_arm_fist"],
            "flip-legs-jump"   : resource.res["secondary_flip_legs_jump"],
            "flip-legs-walk"   : resource.res["secondary_flip_legs_walk"],
            "flip-arm-fist-r"  : resource.res["secondary_flip_arm_fist_r"]
        }
    }    
};

function keydown(e){
    keys[e.keyCode] = true;
}

function keyup(e){
    delete keys[e.keyCode];
}
function collisionDetect(boundA, boundB){
    return ! ( 
        (boundA.y + boundA.height < boundB.y) || 
        (boundA.y > boundB.y + boundB.height) || 
        (boundA.x > boundB.x + boundB.width) || 
        (boundA.x + boundA.width < boundB.x)
    );
}

function getOffsetX(e){
    e = e || window.event;

    var target = e.target || e.srcElement;
    var rect = target.getBoundingClientRect();
    
    return e.clientX - rect.left;
}

function getOffsetY(e){
    e = e || window.event;

    var target = e.target || e.srcElement;
    var rect = target.getBoundingClientRect();

    return e.clientY - rect.top;
}

function arrayHasOwnIndex(array, prop) {
    return array.hasOwnProperty(prop) && /^0$|^[1-9]\d*$/.test(prop) && prop <= 4294967294; // 2^32 - 2
}

$(function() {
    var socket = null,
        id = null,
        players = null,
        canvas = $('<canvas width="800" height="600" />')
            .addClass('gameboard')
            .appendTo('#canvasDiv')
            .off('click')
            .off('mousedown')
            .off('mouseup')
            .off('mousemove'),
        ctx = canvas.get(0).getContext('2d'),
        board = {
            'width': canvas.width(),
            'height': canvas.height()-50,
            'x': 0,
            'y': 50,
            'bg': canvas.css('background-color')
        },
        breathInc = 0.1,
        breathDir = 1,
        breathAmt = 0,
        breathMax = 2,
        punches = {
            'self': null,
            'enemy': null  
        },
        breathInterval = setInterval(updateBreath, 1000 / fps),
        maxEyeHeight = 14,
        curEyeHeight = maxEyeHeight,
        eyeOpenTime = 0,
        timeBtwBlinks = 4000,
        blinkUpdateTime = 200,
        blinkTimer = setInterval(updateBlink, blinkUpdateTime),
        totalFile = 0,
        tempName = "",
        sendKey = new Array(),
        mp = 25,
        particles1 = [],
        particles2 = [],
        y1 = 550,
        y2 = 600,
        angle = 0,
        damage = 10,
        sounds = {
            bg: new Audio("audio/bg.mp3"),
            win: new Audio("audio/win.wav"),
            lose: new Audio("audio/lose.wav"),
            select: new Audio("audio/select.wav"),
            tick: new Audio("audio/tick.mp3"),
            hit: new Audio("audio/hit.wav"),
            jump: new Audio("audio/jump.wav"),
            punch: new Audio("audio/punch.wav")
        };

    $(".main").addClass("hide");
    $(".main").on("click", function() {
        window.location.reload(); 
    });   
    var loop = function() {
        this.currentTime = 0;
        this.play();
    };
    
    for(var i = 0; i < mp; i++)
    {
        particles1.push({
            x: Math.random()*800,
            y: Math.random()*y1,
            r: Math.random()*4+1,
            d: Math.random()*mp
        });
        particles2.push({
            x: Math.random()*800,
            y: Math.random()*y2,
            r: Math.random()*4+1,
            d: Math.random()*mp
        });
    }
        
    
    $.each(images.res, function(idx, res){
        images.files[idx] = this;
        var temp = images.files[idx]; 
        $.each(res, function(i, r){
            var img = new Image();
            img.src = r;
            img.onload = function(){
                temp[i] = this;
                totalFile++;
                if(totalFile == Object.keys(images.res.bg).length + Object.keys(images.res.char1).length + Object.keys(images.res.char2).length){
                    start();
                }
            }
            img.onerror = function(){
                clearScreen();
                drawText(145, (board.height/2), 18, 'Failed to load game resources');
            }
        });
    });
    
    function clearScreen(){
        ctx.beginPath();
        ctx.rect(0, 0, canvas.get(0).width, canvas.get(0).height);
        ctx.fillStyle = '#000';
        ctx.fill();
        ctx.closePath();
    }
    
    function drawText(x, y, size, text, color, align, type){
        if (color) ctx.fillStyle = color;
        else ctx.fillStyle = 'rgb(255,255,255)';
        if (!type) type = "sans-serif";
        ctx.font = size + 'px ' + type;
        if (align) ctx.textAlign = align;
        else ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillText(text, x, y);
    }
    
    function start(){
        clearScreen();
        ctx.drawImage(images.files.bg["bg_init"], 0, 0, 800, 600);        
        
        var input = $("<input>").attr({
            type: "text",
            id: "nama",
            class: "inputNama",
            placeholder: "Nama Pemain"
        });
        input.appendTo("#canvasDiv");
        input.focus();
        
        var clickArea = $("<div>").attr({
            id: "clickArea",
            class: "clickArea"
        });
        clickArea.appendTo("#canvasDiv");
        
        clickArea.on('click', function(e){
            sounds.select.play();
            if (input.val()) {
                tempName = input.val();
                input.remove();
                clickArea.remove();
                login();
            }
            else {
                alert("Silahkan masukkan nama Anda!");
            }
        });
        
        input.on('keypress', function(e) {
            sounds.tick.play();            
        });
        
        input.on('keyup', function(e){
            var key = e.which || e.keyCode;
            if (key == '13') {
                sounds.select.play();                    
                if (input.val()) {
                    tempName = input.val();
                    input.remove();
                    clickArea.remove();
                    login();
                }
                else {
                    alert("Silahkan masukkan nama Anda!");
                }
            }
        });
    }
    
    function login(){
        if(typeof io === 'undefined'){
            clearScreen();
            drawText(135, (board.height/2), 18, 'Gagal terhubung dengan Server');
        }
        else {
            socket = io.connect('http://localhost:7228'); // http://localhost:7228
            id = Math.floor(Math.random() * 50000000);
            
            var param = {
                'id' : id, 
                'name' : tempName,
                'damage' : damage
            }
            socket.emit('clientlogin', param);
            
            socket.on('serverloginsuccess', function(data){
                socket.emit('clientattempt', id);
            });
            
            socket.on('serverplayerstatus', function (data){
                if(data.status == 'wait'){
                    clearScreen();
                    ctx.drawImage(images.files.bg["bg_loading"], 0, 0, 800, 600);
                    drawText(50, 580, 10, 'Menunggu pemain lain untuk tersambung...', "#424242");
                    window.setTimeout(function() { socket.emit('clientattempt', id); }, 500);
                }
                else if(data.status == 'ready'){
                    var player1 = {
                        'x': (board.width/2)-(50/2), 'y': (board.height/2)-(69),
                        'width': 100, 'height': 170,
                        'boundary': {'x':20, 'y':20, 'width':24, 'height':52},
                        'image': images.res.char1,
                        'name' : tempName,
                        'jumpHeight': 140,
                        'jumping': false,
                        'lookRight': true,
                        'hitting': false,
                        'walking': false,
                        'type': null,
                        'rHit': false,
                        'rStep': false,
                        'speed': 70,
                        'lastUpdated': null
                    };
                    
                    var player2 = {
                        'x': (board.width/2)-(50/2), 'y': (board.height/2)-(69),
                        'width': 100, 'height': 170,
                        'boundary': {'x':20, 'y':20, 'width':24, 'height':52},
                        'image': images.res.char2,
                        'name' : tempName,
                        'jumpHeight': 140,
                        'jumping': false,
                        'lookRight': false,
                        'hitting': false,
                        'walking': false,
                        'type': null,
                        'rHit': false,
                        'rStep': false,
                        'speed': 70,
                        'lastUpdated': null
                    };
                    
                    players = {};
                    
                    if(data.players[id].type == 1){
                        players.self = player1;
                        players.enemy = player2;
                    }
                    else if(data.players[id].type == 2){
                        players.self = player2;
                        players.enemy = player1;
                    }
                    
                    clearScreen();
                    
                    redraw(players.self);
                    
                    drawText(90, (board.height/2) + 12, 12, 'Bersiaplah bertarung, ' + tempName + '!');
                    drawText(90, (board.height/2) + 48, 12, 'Gunakan arah panah untuk bergerak');
                    
                    window.setTimeout(main, 1000); // 5000
                }
            });
        }
    }
    
    function main(){
        clearScreen();
        document.addEventListener("keydown", keydown, false);
        document.addEventListener("keyup", keyup, false);
        
        socket.emit('clientgame', id);
        
        socket.on('servergame', function(data){
            for(var i in data.players){
                if(data.players.hasOwnProperty(i)){
                    if(i == id){
                        players.self.x = data.players[i].x;
                        players.self.y = data.players[i].y;
                        players.self.health = data.players[i].health;
                        players.self.name = data.players[i].name;
                        players.self.lookRight = data.players[i].lookRight;
                        players.self.jumping = data.players[i].jumping;
                        players.self.hitting = data.players[i].hitting;
                        players.self.walking = data.players[i].walking;
                        players.self.type = data.players[i].type;
                        players.self.rHit = data.players[i].rHit;
                        players.self.rStep = data.players[i].rStep;
                        players.self.lastUpdated = data.players[i].lastUpdated;
                    }
                    else{
                        players.enemy.x = data.players[i].x;
                        players.enemy.y = data.players[i].y;
                        players.enemy.health = data.players[i].health;
                        players.enemy.name = data.players[i].name;
                        players.enemy.lookRight = data.players[i].lookRight;
                        players.enemy.jumping = data.players[i].jumping;
                        players.enemy.hitting = data.players[i].hitting;
                        players.enemy.walking = data.players[i].walking;
                        players.enemy.type = data.players[i].type;
                        players.enemy.rHit = data.players[i].rHit;
                        players.enemy.rStep = data.players[i].rStep;
                        players.enemy.lastUpdated = data.players[i].lastUpdated;
                    }
                }
            }
            
            punches.self = [];
            punches.enemy = [];
            
            for(i in data.punches){
                if(arrayHasOwnIndex(data.punches, i)){
                    if(data.punches[i].owner == id) punches.self.push(data.punches[i]);
                    else punches.enemy.push(data.punches[i]);
                }
            }
        });
        
        socket.on('serverend', function(data){
            clearScreen();
            window.clearInterval(gameinterval);
            window.clearInterval(breathInterval);
            window.clearInterval(blinkTimer);
            sounds.bg.removeEventListener('ended', loop, false);
            if (sounds.bg.played) {
                sounds.bg.pause();
                sounds.bg.currentTime = 0;
            }
            if ($(".main").hasClass("hide")) $(".main").removeClass("hide") 
            if (data == "win") {
                sounds.win.play();
                ctx.drawImage(images.files.bg["bg_win"], 0, 0, 800, 600);
            }
            else {
                sounds.lose.play();
                ctx.drawImage(images.files.bg["bg_lose"], 0, 0, 800, 600);
            }
            // drawText((board.width/2) - 80, (board.height/2) + 12, 24, 'You ' + data + '!');
            socket.disconnect();
        });
        
        sounds.bg.addEventListener('ended', loop, false);
        sounds.bg.play();
        var gameinterval = window.setInterval(function(){ update(); render(); }, 1000/24);
    }
    
    function render(){
        clearScreen();
        ctx.drawImage(images.files.bg["bg"], -100, 0, 1067, 600);
        
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        for(var i = 0; i < mp; i++)
        {
            var p = particles1[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
        }
        ctx.fill();
        updateSnow(particles1, y1);
        
        if (players.self.type == 1) {
            redraw(players.self);
            redraw(players.enemy);
            for(var i in punches.self){
                if(arrayHasOwnIndex(punches.self, i)){
                    drawEllipse(punches.self[i].x, punches.self[i].y, punches.self[i].radius, punches.self[i].radius, punches.self[i].lookRight, "#03A9F4", true);
                }
            }
            for(var i in punches.enemy){
                if(arrayHasOwnIndex(punches.enemy, i)){
                    drawEllipse(punches.enemy[i].x, punches.enemy[i].y, punches.enemy[i].radius, punches.enemy[i].radius, punches.enemy[i].lookRight, "#F44336", true);
                }
            }
        }
        else {
            redraw(players.enemy);
            redraw(players.self);
            for(var i in punches.enemy){
                if(arrayHasOwnIndex(punches.enemy, i)){
                    drawEllipse(punches.enemy[i].x, punches.enemy[i].y, punches.enemy[i].radius, punches.enemy[i].radius, punches.enemy[i].lookRight, "#03A9F4", true);
                }
            }
            for(var i in punches.self){
                if(arrayHasOwnIndex(punches.self, i)){
                    drawEllipse(punches.self[i].x, punches.self[i].y, punches.self[i].radius, punches.self[i].radius, punches.self[i].lookRight, "#F44336", true);
                }
            }
        }
        
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        for(var i = 0; i < mp; i++)
        {
            var p = particles2[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
        }
        ctx.fill();
        updateSnow(particles2, y2);
        
        ctx.fillStyle= '#B0BEC5';
        ctx.fillRect(0, 0, 800, 95);
        ctx.beginPath();
        ctx.moveTo(0, 95);
        ctx.lineTo(800, 95);
        ctx.fillStyle = '#263238';
        ctx.stroke();
        ctx.closePath();
        
        if (players.self.type == 1) {
            drawText(50, 60, 16,  players.self.name, "#212121");
            drawText(750, 60, 16, players.enemy.name, "#212121", "right");
            
            fillHealth(players.self.health, false);
            fillHealth(players.enemy.health, true);
        }
        else {
            drawText(50, 60, 16, players.enemy.name, "#212121");
            drawText(750, 60, 16, players.self.name, "#212121", "right");
            
            fillHealth(players.enemy.health, false);
            fillHealth(players.self.health, true);
        }
    }
    
    function fillHealth(health, rightPosition) {
        var pos1 = 43;
        var pos2 = 50;
        if (rightPosition) {
            pos1 = 443;
            pos2 = 450;
        }
        
        ctx.fillStyle="#424242";
        ctx.fillRect(pos1, 23, 314, 34);
        ctx.fillStyle="#FFF";
        ctx.fillRect(pos2, 30, 300, 20);
        if (health > 75) ctx.fillStyle="#4CAF50";
        else if (health > 50) ctx.fillStyle="#FFEB3B";
        else if (health > 25) ctx.fillStyle="#FF6F00";
        else ctx.fillStyle="#B71C1C";
        ctx.fillRect(pos2, 30, (health/100)*300, 20);
    }
    
    function update() {
        if (37 in keys) {
            sendKey.push('left');
        }
        if (39 in keys) {
            sendKey.push('right');
        }
        if (32 in keys) {
            sendKey.push('jump');
        }
        if (65 in keys) {
            sendKey.push('rHit');
            sendKey.push('attack');
        }
        if (83 in keys) {
            sendKey.push('lHit');
            sendKey.push('attack');
        }
        
        socket.emit('clientupdate', {
            id: id,
            keys: sendKey
            // , mouses: mouses
        });
        
        sendKey = new Array();
    }
    
    function redraw(player) {
        var x = player.x,
            y = player.y,
            jumpHeight = player.jumpHeight,
            jumping = player.jumping,
            lookRight = player.lookRight,
            hitting = player.hitting,
            walking = player.walking,
            rHit = player.rHit,
            rStep = player.rStep;
            
        if (jumping) {
            sounds.jump.play();
            jump(player);
        }
        if (hitting) {
            sounds.hit.play();
            hit(player);
        }
        if (walking) {
            if (lookRight) goRight(player);
            else goLeft(player);
        }
        
        if (lookRight) {
            if (jumping) {
                drawEllipse(x + 40, y + 29, 100 - breathAmt, 4);
            } else {
                drawEllipse(x + 40, y + 29, 160 - breathAmt, 6);
            }

            if (jumping) {
                y -= jumpHeight;
            }

            if (hitting && rHit) {
                ctx.drawImage(player.image["arm-fist"], x + 40, y - 42 - breathAmt);
            }
            else {
                if (jumping) {
                    drawImageRot(player.image["arm-fist"], x + 40, y - 32 - breathAmt, 60, 24, 45);
                } else {
                    ctx.drawImage(player.image["arm-ready"], x + 40, y - 42 - breathAmt);
                }
            }

            if (jumping) {
                ctx.drawImage(player.image["legs-jump"], x, y- 6);
            } else {
                if (walking && !rStep) ctx.drawImage(player.image["legs-walk"], x, y); 
                else ctx.drawImage(player.image["legs"], x, y);
            }
                
            ctx.drawImage(player.image["torso"], x, y - 50);
            ctx.drawImage(player.image["head"], x - 10, y - 125 - breathAmt);
            ctx.drawImage(player.image["hair"], x - 37, y - 138 - breathAmt);

            if (hitting && !rHit) {
                drawImageRot(player.image["arm-fist-r"], x - 0, y - 42 - breathAmt, 60, 24, 0);
            }
            else {
                if (jumping) {
                        drawImageRot(player.image["arm-fist-r"], x - 36, y - 30 - breathAmt, 60, 24, -230);
                } else {
                    ctx.drawImage(player.image["arm-ready-r"], x - 0, y - 42 - breathAmt);
                }
            }
                
            drawEllipse(x + 47, y - 68 - breathAmt, 8, curEyeHeight);
            drawEllipse(x + 58, y - 68 - breathAmt, 8, curEyeHeight);
        } 
        else {
            if (jumping) {
                drawEllipse(x + 40, y + 29, 100 - breathAmt, 4);
            } else {
                drawEllipse(x + 40, y + 29, 160 - breathAmt, 6);
            }

            if (jumping) {
                y -= jumpHeight;
            }

            if (hitting && rHit) {
                ctx.drawImage(player.image["flip-arm-fist"], x - 7, y - 42 - breathAmt);
            }
            else {
                if (jumping) {
                    drawImageRot(player.image["flip-arm-fist"], x - 10, y - 32 - breathAmt, 60, 24, -40);
                } else {
                    ctx.drawImage(player.image["flip-arm-ready"], x - 7, y - 42 - breathAmt);
                }
            }

            if (jumping) {
                ctx.drawImage(player.image["flip-legs-jump"], x - 6, y- 6);
            } else {
                if (walking && !rStep) ctx.drawImage(player.image["flip-legs-walk"], x + 3, y); 
                else ctx.drawImage(player.image["flip-legs"], x, y);
            }
                
            ctx.drawImage(player.image["flip-torso"], x + 25, y - 50);
            ctx.drawImage(player.image["flip-head"], x, y - 125 - breathAmt);
            ctx.drawImage(player.image["flip-hair"], x - 3, y - 138 - breathAmt);

            if (hitting && !rHit) {
                drawImageRot(player.image["flip-arm-fist-r"], x + 18, y - 42 - breathAmt, 60, 24, 0);
            }
            else {
                if (jumping) {
                    drawImageRot(player.image["flip-arm-fist-r"], x + 60, y - 30 - breathAmt, 60, 24, -140);
                } else {
                    ctx.drawImage(player.image["flip-arm-ready-r"], x + 27, y - 42 - breathAmt);
                }
            }
                
            drawEllipse(x + 22, y - 68 - breathAmt, 8, curEyeHeight);
            drawEllipse(x + 33, y - 68 - breathAmt, 8, curEyeHeight);
        }
    }

    function drawImageRot(img, x, y, width, height, deg) {
        var rad = deg * Math.PI / 180;
        ctx.translate(x + width / 2, y + height / 2);
        ctx.rotate(rad);
        ctx.drawImage(img, width / 2 * (-1), height / 2 * (-1), width, height);
        ctx.rotate(rad * ( -1 ) );
        ctx.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
    }

    function drawEllipse(centerX, centerY, width, height, rotateD, color, half) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - height/2);
            
        if (half) {
            if (rotateD) {
                ctx.bezierCurveTo(
                    centerX + width/2, centerY - height/2,
                    centerX + width/2, centerY + height/2,
                    centerX, centerY + height/2);
                ctx.bezierCurveTo(
                    centerX - 20 + width/2, centerY - height/2,
                    centerX - 20 + width/2, centerY + height/2,
                    centerX, centerY - height/2);                  
            }
            else {
                ctx.bezierCurveTo(
                    centerX + 20 - width/2, centerY + height/2,
                    centerX + 20 - width/2, centerY - height/2,
                    centerX, centerY + height/2);
                ctx.bezierCurveTo(
                    centerX - width/2, centerY + height/2,
                    centerX - width/2, centerY - height/2,
                    centerX, centerY - height/2);
            }
        }
        else {
            ctx.bezierCurveTo(
                centerX + width/2, centerY - height/2,
                centerX + width/2, centerY + height/2,
                centerX, centerY + height/2);
            
            ctx.bezierCurveTo(
                centerX - width/2, centerY + height/2,
                centerX - width/2, centerY - height/2,
                centerX, centerY - height/2);   
        }
           
        ctx.fillStyle = "black";
        if (color) ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();	
    }
    
    function updateSnow(particles, H) {
        var W = 800; 
        angle += 0.01;
        for(var i = 0; i < mp; i++)
        {
            var p = particles[i];
            p.y += Math.cos(angle+p.d) + 1 + p.r/2;
            p.x += Math.sin(angle) * 2;
            
            if(p.x > W+5 || p.x < -5 || p.y > H)
            {
                if(i % 3 > 0) particles[i] = { x: Math.random()*W, y: -10, r: p.r, d: p.d};
                else
                {
                    if(Math.sin(angle) > 0) particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
                    else particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
                }
            }
        }
    }
    
    function updateBreath() {          
        if (breathDir === 1) {
            breathAmt -= breathInc;
            if (breathAmt < -breathMax) {
                breathDir = -1;
            }
        } else {
            breathAmt += breathInc;
            if(breathAmt > breathMax) {
                breathDir = 1;
            }
        }
    }

    function updateBlink() { 
        eyeOpenTime += blinkUpdateTime;
        if(eyeOpenTime >= timeBtwBlinks){
            blink();
        }
    }

    function blink() {
        curEyeHeight -= 1;
        if (curEyeHeight <= 0) {
            eyeOpenTime = 0;
            curEyeHeight = maxEyeHeight;
        } else {
            setTimeout(blink, 10);
        }
    }

    function jump(player) {
        setTimeout(function() {
            sendKey.push('land');
        }, 300);
    }

    function hit(player) {      
        setTimeout(function() {
            sendKey.push('stopHit');
        }, 300);
    }

    function goRight(player) {
        setTimeout(stand, 500);
    }

    function goLeft(player) {
        setTimeout(stand, 500);
    }

    function stand() {
        sendKey.push('stopWalk');
    }
});