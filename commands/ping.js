const config = require("../config.json");

exports.run = (client, message, args) =>
{
    message.reply("GWAAK!").catch(console.error);
}