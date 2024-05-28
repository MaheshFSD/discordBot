const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    // console.log(message.content, ' ----------- content created ---------- ');
    // console.log(message.author.username, ' -------- username ------- ');
    message.reply("I am the great bot...");
    message.reply({content: "I am bot reply"});
    // message.delete().then((data)=> console.log(data, 'delete------')); // trying some ops on messages ... 
    // trying to reply with bot...
})
client.on("interactionCreate", (interaction) => {
    console.log(interaction, ' ------- interaction -----');
    interaction.reply({content: "creation is done...."});
})

client.login(process.env.secret);