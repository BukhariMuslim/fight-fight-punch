var http = require('http').createServer(server).listen(7228);
var io = require('socket.io').listen(http);
var serve = require('serve');

function server(request, response) {
  response.writeHead(200, { 'content-type': 'plain-text' });
  response.end();
}

var htmlserver = serve('./', {
  port: process.env.PORT || 3000
});

function lenObject(obj) {
  var size = 0;
  for (var key in obj) { if (obj.hasOwnProperty(key)) size++; }
  return size;
}

function arrayHasOwnIndex(array, prop) {
  return array.hasOwnProperty(prop) && /^0$|^[1-9]\d*$/.test(prop) && prop <= 4294967294; // 2^32 - 2
}

function collisionDetect(boundA, boundB) {
  return !(
    (boundA.y + boundA.height < boundB.y) ||
    (boundA.y > boundB.y + boundB.height) ||
    (boundA.x > boundB.x + boundB.width) ||
    (boundA.x + boundA.width < boundB.x)
  );
}

var playerIn = null;

io.sockets.on('connection', function (socket) {
  socket.on('clientlogin', function (par) {
    var id = par["id"];
    var name = par["name"];
    var dmg = par["damage"];
    if (!name) name = "Anonymous Player";
    if (playerIn === null) {
      playerIn = new Array();
    }

    var cnew = true;
    for (var idx = 0; idx < playerIn.length; idx++) {
      var d = playerIn[idx];
      if (lenObject(d.players) < 2) {
        d.players[id] = {
          'x': 640,
          'y': 550,
          'w': 50,
          'h': 69,
          'health': 100,
          'jumpHeight': 140,
          'name': name,
          'jumping': false,
          'lookRight': false,
          'hitting': false,
          'walking': false,
          'rHit': false,
          'rStep': false,
          'speed': 70,
          'type': 2,
          'damage': dmg,
          'boundary': {
            'x': 20,
            'y': 20,
            'w': 24,
            'h': 52
          },
          'lastUpdated': null,
          'lastHit': null,
          'handTime': null,
          'stepTime': null
        };
        d.status = 'ready';
        socket.playerslot = idx;
        cnew = false;
      }
    }
    if (cnew) {
      var slot = {
        'players': {},
        'punches': new Array(),
        'status': 'wait'
      };
      slot.players[id] = {
        'x': 50,
        'y': 550,
        'w': 50,
        'h': 69,
        'health': 100,
        'jumpHeight': 140,
        'name': name,
        'jumping': false,
        'lookRight': true,
        'hitting': false,
        'walking': false,
        'rHit': false,
        'rStep': false,
        'speed': 70,
        'type': 1,
        'damage': dmg,
        'boundary': {
          'x': 20,
          'y': 20,
          'w': 24,
          'h': 52
        },
        'lastUpdated': null,
        'lastHit': null,
        'handTime': null,
        'stepTime': null
      };

      var idx = playerIn.push(slot);
      socket.playerslot = idx - 1;
    }

    socket.emit('serverloginsuccess', null);
  });

  socket.on('clientattempt', function (id) {
    var idx = socket.playerslot;
    var slot = playerIn[idx];
    socket.emit('serverplayerstatus', slot);
  });

  socket.on('clientgame', function (id) {
    var idx = socket.playerslot;
    var slot = playerIn[idx];
    socket.emit('servergame', slot);
  });

  socket.on('clientupdate', function (data) {
    var idx = socket.playerslot;
    var slot = playerIn[idx];
    var now = Date.now();
    if (data.id) {
      var then = playerIn[idx].players[data.id].lastUpdated == null ? Date.now() : playerIn[idx].players[data.id].lastUpdated;
      var thenHit = playerIn[idx].players[data.id].lastHit == null ? Date.now() : playerIn[idx].players[data.id].lastHit;
      var delta = (now - then) / 1000;
      var deltaHit = (now - thenHit) / 1000;

      var pspeed = playerIn[idx].players[data.id].speed;

      if (data.keys.indexOf('left') > -1) {
        playerIn[idx].players[data.id].x -= pspeed * delta;
        playerIn[idx].players[data.id].lookRight = false;
        playerIn[idx].players[data.id].walking = true;
      }
      if (data.keys.indexOf('right') > -1) {
        playerIn[idx].players[data.id].x += pspeed * delta;
        playerIn[idx].players[data.id].lookRight = true;
        playerIn[idx].players[data.id].walking = true;
      }
      if (data.keys.indexOf('rHit') > -1) {
        playerIn[idx].players[data.id].rHit = true;
      }
      if (data.keys.indexOf('lHit') > -1) {
        playerIn[idx].players[data.id].rHit = false;
      }
      if (data.keys.indexOf('jump') > -1) {
        playerIn[idx].players[data.id].jumping = true;
      }
      if (data.keys.indexOf('land') > -1) {
        playerIn[idx].players[data.id].jumping = false;
      }
      if (data.keys.indexOf('attack') > -1) {
        playerIn[idx].players[data.id].hitting = true;
      }
      if (data.keys.indexOf('stopHit') > -1) {
        playerIn[idx].players[data.id].hitting = false;
      }
      if (data.keys.indexOf('stopWalk') > -1) {
        playerIn[idx].players[data.id].walking = false;
      }

      if (playerIn[idx].players[data.id].x < 50)
        playerIn[idx].players[data.id].x += pspeed * delta;
      if (playerIn[idx].players[data.id].x + playerIn[idx].players[data.id].w > 800)
        playerIn[idx].players[data.id].x -= pspeed * delta;

      for (var i in playerIn[idx].punches) {
        var playerBound = {};
        if (!playerIn[idx].players[data.id].lookRight) {
          playerBound = {
            'x': playerIn[idx].players[data.id].x + playerIn[idx].players[data.id].boundary.x - 20,
            'y': playerIn[idx].players[data.id].y + playerIn[idx].players[data.id].boundary.y - 100,
            'width': playerIn[idx].players[data.id].boundary.w,
            'height': playerIn[idx].players[data.id].boundary.h
          };
        }
        else {
          playerBound = {
            'x': playerIn[idx].players[data.id].x + playerIn[idx].players[data.id].boundary.x + 20,
            'y': playerIn[idx].players[data.id].y + playerIn[idx].players[data.id].boundary.y - 100,
            'width': playerIn[idx].players[data.id].boundary.w,
            'height': playerIn[idx].players[data.id].boundary.h
          };
        }
        if (arrayHasOwnIndex(playerIn[idx].punches, i)) {
          if (playerIn[idx].punches[i].owner == data.id) {
            playerIn[idx].punches[i].x += playerIn[idx].punches[i].speedx * delta;

            if (
              playerIn[idx].punches[i].x < 0 ||
              playerIn[idx].punches[i].x > 800 ||
              playerIn[idx].punches[i].y < playerIn[idx].players[data.id].y - 100 ||
              playerIn[idx].punches[i].y > playerIn[idx].players[data.id].y + playerIn[idx].players[data.id].h + 40
            ) {
              playerIn[idx].punches.splice(i, 1);
            }
          }
          else if (
            collisionDetect(playerBound,
              {
                'x': playerIn[idx].punches[i].x - playerIn[idx].punches[i].radius / 2,
                'y': playerIn[idx].punches[i].y - playerIn[idx].punches[i].radius / 2,
                'width': playerIn[idx].punches[i].radius,
                'height': playerIn[idx].punches[i].radius
              })
            && !playerIn[idx].players[data.id].jumping
          ) {
            playerIn[idx].players[data.id].health -= playerIn[idx].punches[i].damage;
            playerIn[idx].punches.splice(i, 1);
          }
        }
      }

      if (data.keys.indexOf('attack') > -1 &&
        (playerIn[idx].players[data.id].lastHit == null || deltaHit >= 1)
      ) {
        var px = playerIn[idx].players[data.id].x;
        var py = playerIn[idx].players[data.id].y - 30;
        var pw = playerIn[idx].players[data.id].w;

        var lx = px + pw + 40;
        var sp = 1;
        var right = true;

        if (!playerIn[idx].players[data.id].lookRight) {
          lx = px - 10;
          sp = -1;
          right = false;
        }

        playerIn[idx].punches.push({
          'owner': data.id,
          'x': lx,
          'y': py,
          'lookRight': right,
          'radius': 30,
          'speedx': 100 * sp,
          'speedy': 100,
          'damage': 10
        });

        playerIn[idx].players[data.id].lastHit = now;
      }

      playerIn[idx].players[data.id].lastUpdated = now;

      var end = false;
      for (var i in playerIn[idx].players) {
        if (end == false && playerIn[idx].players.hasOwnProperty(i)) {
          if (i == data.id && playerIn[idx].players[i].health <= 0) {
            socket.emit('serverend', 'lose');
            end = true;
          }
          else if (i != data.id && playerIn[idx].players[i].health <= 0) {
            socket.emit('serverend', 'win');
            end = true;
          }
        }
      }

      if (end == false) socket.emit('servergame', playerIn[idx]);
    }
  });
});