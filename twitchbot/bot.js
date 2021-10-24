var tmi = require("tmi.js")
var channel = "highschoolmath"

var config = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "highschoomath",
        password: "oauth:eiuhflap3d2uek4z3iy42zqa26alr6"
    },
    channels: [channel]
}

var client = new tmi.client(config)
client.connect();


client.on("connected", (address, port) => {
    client.action(channel, "Bot has connected" + address + ":" + port);
    
})

client.on("chat", (channel, user, message, self) => {
    if (message == "start") {
        const words = ["pog", "pogchamp", ":)", "<3", ":D", "LuL", "awine rh/euiv on"]
        while (true) {
            var startTime = new Date();
            var endTime = new Date();
            while (endTime - startTime <= 3000) {
                endTime = new Date();
            }
            var rand_word = words[Math.floor(Math.random()*words.length)];
            client.say(channel, rand_word);
        }
    }
})

/*
client.on("chat", (channel, user, message, self) => {
    if (self) return;
    if (message == "hi") {
        client.say(channel, "hey pal")
    }
})
*/