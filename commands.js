const { REST, Routes } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const commands = [{
    name: 'create',
    description: 'Creating a Url.',
}];


// console.log(process.env.secret, ' --------- env variable ----');
const rest = new REST({version: "10"}).setToken(process.env.secret);
(async () => {
    try {
        // refreshing
        await rest.put(Routes.applicationCommands("1244975774780358726"),{body: commands});
        // reloading
    } catch (error) {
        console.log(error, ' ------ error from registering commands -------- ');
    }
})()