const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
console.log(process.env.secret, ' ----------- secete ------- ');
client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    console.log(message.content, ' ----------- content created ---------- ');
    console.log(message.author.username, ' -------- username ------- ');
    message.reply("I am the great bot...");
    // message.delete().then((data)=> console.log(data, 'delete------')); // trying some ops on messages ... 
    // trying to reply with bot...
})

client.login(process.env.secret);