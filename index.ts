const discord = require('discord.js');
const client = new discord.Client();
const discordbtn = require('discord.js-buttons')(client);

const button = new discordbtn.MessageButton()
    .setStyle('green')
    .setLabel('ファイル更新・読込')
    .setID('scan');