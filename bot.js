const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTI5ODg3ODQyMzk0OTYzOTg5.DxKMqw.a2WuCTNE1XRPhzsa78_XdPadPdA);
