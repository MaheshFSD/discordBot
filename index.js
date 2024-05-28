const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
console.log(process.env.secret, ' ----------- secete ------- ');
client.on('messageCreate', (message) => {
    console.log(message.content, ' ----------- content created ---------- ');
    console.log(message.author.username, ' -------- username ------- ');
    message.delete().then((data)=> { console.log(data, 'delete------')}); // trying some ops on messages ... 
})

client.login(process.env.secret);