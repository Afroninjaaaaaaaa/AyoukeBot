const config = require("../config.json");
const fs = require("fs")

exports.run = (client, message, args) =>
{
	if(message.author.id !== config.ownerID) return;
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    config.prefix = newPrefix;
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
}