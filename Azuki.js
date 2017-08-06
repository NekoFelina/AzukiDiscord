const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require('moment');
const OSU_API_KEY = "80ad2bb473b898fe6a929a409883fdf14c598eb1";
const osu = require('osu-api');
const yt = require('ytdl-core');
const tokens = require('./tokens.json');

client.on('ready', () => {
  const ready = new Discord.RichEmbed()
    .setTitle(`Started up ${client.user.tag}`)
    .setDescription('Bot Details:')
    .setColor([51, 178, 255])
    .setThumbnail(client.users.get('148016257231224832').avatarURL)
    .setFooter('Azuki by TheNekoFelina#7651')
    .addField('Servers', `${client.guilds.size}`, true)
    .addField('Users', `${client.users.size}`, true)
    .addField('Time', `${moment().format('LLLL')}`, false);

  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.get('340514054533677057').sendEmbed(ready);
//  client.channels.get('341994241020526592').send(`:heart: \`[${moment().format('LTS')}]\` **${client.user.tag}** has started up! Neko Room's Members: **${client.guilds.get('330394901785214986').memberCount}**`); //
  client.user.setGame(`with Coconut | nya-ping`);
});

client.on('message', message => {
  if(!message.author.bot) {
    if(message.channel.type !== "dm") {
      if(message.channel.id !== "343381196002164738") {
        const logs = new Discord.RichEmbed()
          .setTitle(`${message.author.tag}`)
          .setColor([255, 91, 91])
          .setThumbnail(`${message.author.avatarURL}`)
          .setDescription(`${message.guild.name} - ${message.channel.name}`)
          .addField(`Content`, `MSG: ${message.content}`)
          .setFooter(`${moment().format('lll')}`);

        client.channels.get('343381196002164738').sendEmbed(logs)
      }
    }
  }
})

const prefix = "nya-";

client.on('message', message => {
  const help = "nya-help ";
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (message.content === "nya-help") {
    const helppage = new Discord.RichEmbed()
      .setAuthor(`${client.user.username}'s Help Page`, client.user.avatarURL)
      .setDescription(`Type ${prefix}help [command] for full help`)
      .setColor([51, 178, 255])
      .setFooter(`Requested at ${moment().format('lll')}`)
      .addField('Basic Commands', "`ping` `botinfo` `userinfo` `eval` `invite`")
      .addField('Fun Commands', "`ship` `reverse`")
      .addField('Moderation Commands', "`ban` `kick` `softban` `prune`")
      .addField('Music Commands', "`add` `play` `join` `queue` `pause` `resume` `skip` `time` `volume`")

    message.channel.sendEmbed(helppage);
  }
  if (message.content.startsWith(help + "reverse")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Reverses the given arguments!`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "volume")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Adjusts the volume of the bot. use - for -2% and + for +2%`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "time")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Shows the current time of the song`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "skip")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Skips the current song`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "resume")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`When paused, use this to resume the player`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "pause")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`When playing, use this to pause the player`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "queue")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Shows current queue, up to 15 songs`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "join")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Joins your current voice channel`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "play")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`When songs are added to the queue, use this command to play the queue`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "add")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Adds song to queue (Must be valid Youtube URL or ID)`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "ping")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Displays ms to receive and send message!`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "botinfo")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Displays info about **${client.user.tag}**!`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "userinfo")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Displays info about you or someone else!`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "ship")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Ship yourself with another and see if you're made for each other!`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "kick")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Kicks the mentioned user!`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "ban")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Bans the mentioned user!`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "softban")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Kicks the mentioned user and prunes all their messages!`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "prune")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Removes up to 100 messages!`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "help")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Displays the help page!`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "eval")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Executed command from message content **BOT OWNER ONLY**`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
  if (message.content.startsWith(help + "invite")) {
    const cmd = new Discord.RichEmbed()
      .setAuthor(`${message.content}`, message.author.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Sends [this](https://discordapp.com/oauth2/authorize?client_id=340474644567949313&scope=bot&permissions=535948511) invite link to add this bot!`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(cmd);
  }
});

client.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") {
		const direct = new Discord.RichEmbed()
		  .setTitle("Note")
			.setThumbnail(client.user.avatarURL)
      .setColor([51, 178, 255])
			.setDescription("Commands can't be used in Direct Message!");

    return message.channel.sendEmbed(direct);
  }

  if(!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "invite") {
    const invite = new Discord.RichEmbed()
      .setAuthor(`Invite ${client.user.tag}`, client.user.avatarURL)
      .setColor([51, 178, 255])
      .setDescription(`Use [this](https://discordapp.com/oauth2/authorize?client_id=340474644567949313&scope=bot&permissions=535948511) link to invite **${client.user.tag}**`)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(invite);
  }
  if (command === "reverse") {
    var text = message.content.substring(11);

    var reversed = '';
    var i = text.length;

    while (i > 0) {
        reversed += text.substring(i - 1, i);
        i--;
    }

    message.channel.send(reversed);
  }
  if (command === "userinfo") {
    const userinfo = new Discord.RichEmbed()
      .setAuthor(`${message.author.tag}'s info`, message.author.avatarURL)
      .setDescription('Everything you need to know about me')
      .setColor([51, 178, 255])
      .addField('Bot', `${message.author.bot}`, true)
      .addField('ID', `${message.author.id}`, true)
      .addField('Nickname', `${message.member.nickname}`, true)
      .addField('Joined Discord', `${message.author.createdAt}`, false)
      .addField('Joined Server', `${message.member.joinedAt}`, false)
      .setFooter(`Requested at ${moment().format('lll')}`);

    if (message.mentions.users.size === 0) {
      return message.channel.sendEmbed(userinfo);
    }
    const mentionedinfo = new Discord.RichEmbed()
      .setAuthor(`${message.mentions.users.first().tag}'s info`, message.mentions.users.first().avatarURL)
      .setDescription('Everything you need to know about me')
      .setColor([51, 178, 255])
      .addField('Bot', `${message.mentions.users.first().bot}`, true)
      .addField('ID', `${message.mentions.users.first().id}`, true)
      .addField('Joined Discord', `${message.mentions.users.first().createdAt}`, false)
      .setFooter(`Requested at ${moment().format('lll')}`);

    message.channel.sendEmbed(mentionedinfo);
  }
  if (command === "botinfo") {
    const botinfo = new Discord.RichEmbed()
      .setAuthor(`${client.user.username}'s info`, client.user.avatarURL)
      .setDescription('Everything you need to know')
      .setColor([51, 178, 255])
      .setFooter(`Requested at ${moment().format('lll')}`)
      .addField('Info', `${client.user.tag} is a bot created with JavaScript and NodeJS. ${client.user.username} is made for fun and for everything else!`, false)
      .addField('Author', `${client.users.get('148016257231224832').tag}`, true)
      .addField('Library', `Discord.JS`, true);

    message.channel.sendEmbed(botinfo);
  }
  if (command === 'eval') {
		console.log(`Logs => ${message.member.user.username} : eval`);
    const clean = text => {
      if (typeof(text) === 'string')
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
      else
          return text;
    }
    if(message.author.id !== "148016257231224832") {
      return message.channel.send(`Only the bot owner can use this command!`);
    }
    try {
      const code = args.join(' ');
      let evaled = eval(code);

      if (typeof evaled !== 'string')
      evaled = require('util').inspect(evaled);

      message.channel.send(clean(evaled), {code:'xl'});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }

  if (command === "osu") {
    var username = (message.content.split(" ").length < 2) ?  msg.author.username : message.content.substring(5);
    osu.getUser(username, (err, data) => {
      if (err) client.sendMessage(message, "Error: " + err, function(erro, wMessage) { client.deleteMessage(wMessage, {"wait": 8000}); });
      if (!data) client.sendMessage(message, "User \"" + username + "\" not found", function(erro, wMessage) { client.deleteMessage(wMessage, {"wait": 8000}); });
      else {s
        if (data.playcount === null || data.playcount == 0) { client.sendMessage(message, "User has no data", (erro, wMessage) => { client.deleteMessage(wMessage, {"wait": 10000}); }); return; }
        var toSend = [];
        toSend.push("User: " + data.username.replace(/@/g, '@\u200b') + " (" + data.country + ")");
        toSend.push("Play Count: " + data.playcount.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " | Level: " + data.level.substring(0, data.level.split(".")[0].length + 3));
        toSend.push("Ranked Score: " + data.ranked_score.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        toSend.push("Total Score: " + data.total_score.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        toSend.push("PP: " + data.pp_raw.split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        toSend.push("Rank: #" + data.pp_rank.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " (Country Rank: #" + data.pp_country_rank.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ")");
        toSend.push("Accuracy: " + data.accuracy.substring(0, data.accuracy.split(".")[0].length + 3) + "%");
        toSend.push("300s: " + data.count300.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " | 100s: " + data.count100.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " | 50s: " + data.count50.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " | SS: " + data.count_rank_ss + " | S: " + data.count_rank_s + " | A: " + data.count_rank_a.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        client.sendMessage(message, "```xl\n" + toSend.join('\n') + "```");
      }
    });
  }
  if (command === "ship") {
		console.log(`Logs => ${message.member.user.username} : ship`)
		if (message.mentions.users.size === 0) {
			return message.channel.send("Who do I need to ship? I'm very good at this~");
		}
		if (message.mentions.users.size === 1) {
			return message.channel.send("I can't ship 1 person / yourself, can I?");
		}
		var roll = Math.floor(Math.random()*21);

		if (roll == 0) {
		  const per5 = new Discord.RichEmbed()
		    .setColor([51, 178, 255])
			  .setDescription("Results: **5%** | Argh what am I seeing? :broken_heart:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per5);
		}
		if (roll == 1) {
	  	const per10 = new Discord.RichEmbed()
		    .setColor([51, 178, 255])
			  .setDescription("Results: **10%** | At least is better than 0% :persevere:");

		  message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per10);
		}
		if (roll == 3) {
			const per15 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **15%** | At least no complete failure :frowning2:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per15);
		}
		if (roll == 4) {
			const per20 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **20%** | A step closer to 25% :frowning:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per20);
		}
		if (roll == 5) {
			const per25 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **25%** | Try again, you can do this~ :slight_frown:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per25);
		}
		if (roll == 6) {
			const per30 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **30%** | Quick heads up, not gonna work :confused:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per30);
		}
		if (roll == 7) {
			const per35 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **35%** | What are you even trying to do? :cry:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per35);
		}
		if (roll == 8) {
			const per40 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **40%** | Come on~ :fearful:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per40);
		}
		if (roll == 9) {
			const per45 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **45%** | Try again, you can do this~ :hushed:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per45);
		}
		if (roll == 10) {
			const per50 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **50%** | Pwease.... :stuck_out_tongue:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per50);
		}
		if (roll == 11) {
			const per55 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **55%** | Woop Woop~ :stuck_out_tongue_winking_eye:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per55);
		}
		if (roll == 12) {
			const per60 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **60%** | Come on, you did good~ :wink:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per60);
		}
		if (roll == 13) {
			const per65 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **65%** | Pretty good~ :kissing_heart:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per65);
		}
		if (roll == 14) {
			const per70 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **69%** | You know what I mean~ :smirk:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per70);
		}
		if (roll == 15) {
			const per75 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **75%** | I love the number 7~ :kissing_smiling_eyes:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per75);
		}
		if (roll == 16) {
			const per80 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **80%** | Error 404: Love overheated system :warning:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per80);
		}
		if (roll == 17) {
			const per85 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **85%** | Lovey-dovey~ :heart:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per85);
		}
		if (roll == 18) {
			const per90 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **90%** | OwO :gift_heart:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per90);
		}
		if (roll == 19) {
			const per95 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **95%** | Amazing, NOW LOVE~! :heartpulse:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per95);
		}
		if (roll == 20) {
			const per100 = new Discord.RichEmbed()
				.setColor([51, 178, 255])
				.setDescription("Results: **100%** | Destiny chose u two~ :sparkling_heart:");

			message.channel.send(`:heart: Shipping~ :heart:\n:white_small_square: **${message.mentions.users.first().username}** :black_small_square: **${message.mentions.users.last().username}**`);
			message.channel.sendEmbed(per100);
		}
	}
  if (command === "ping") {
		console.log(`Logs => ${message.member.user.username} : ping`);
    message.channel.send('Message Received!')
    .then(m => m.edit(`Message Sent! (**${m.createdTimestamp - message.createdTimestamp}ms)**`))
  }
  if (command === 'avatar') {
		console.log(`Logs => ${message.member.user.username} : avatar`);
    const avatar = new Discord.RichEmbed()
      .setColor([51, 178, 255])
      .setDescription(`Link to your avatar [here](${message.author.avatarURL})`)
      .setImage(message.author.avatarURL)
      .setFooter(`Your Avatar, ${message.author.username}`);

    if (message.mentions.users.size === 0) {
      return message.channel.sendEmbed(avatar);
    }
    const avataruser = new Discord.RichEmbed()
      .setColor([51, 178, 255])
      .setDescription(`Link to your avatar [here](${message.mentions.users.first().avatarURL})`)
      .setImage(message.mentions.users.first().avatarURL)
      .setFooter(`Avatar of ${message.mentions.users.first().username}`);

    message.channel.sendEmbed(avataruser);
  }
  if (message.content.startsWith(prefix + "prune")) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      const noperm1 = new Discord.RichEmbed()
        .setTitle("No permission")
        .setColor([255, 92, 92])
        .setThumbnail(message.member.user.avatarURL)
        .setDescription("You require the permission **Manage Messages** to execute this command!");

      return message.channel.sendEmbed(noperm1);
    }
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
      const noperm = new Discord.RichEmbed()
        .setTitle("No permission")
        .setColor([255, 92, 92])
        .setThumbnail(client.user.avatarURL)
        .setDescription("I require the permission **Manage Messages** to execute a prune!");

      return message.channel.sendEmbed(noperm);
    }
    console.log(`Logs => ${message.member.user.username} : prune`)
    const params = message.content.split(" ").slice(1);
    let messagecount = parseInt(params[0]);
    message.channel.fetchMessages({
        limit: 100
      })
      .then(messages => {
        let message_array = messages.array();
        message_array.length = messagecount + 1;
        message_array.map(m => m.delete().catch(console.error));
        message.channel.send(`Succesfully removed **${messagecount}** messages!`)
      });
  }
  if (message.content.startsWith(prefix + "purge")) {
    if (message.author.id !== "148016257231224832") {
      const noperm1 = new Discord.RichEmbed()
        .setTitle("No permission")
        .setColor([255, 92, 92])
        .setThumbnail(message.member.user.avatarURL)
        .setDescription("You require the permission **Manage Messages** to execute this command!");

      return message.channel.sendEmbed(noperm1);
    }
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
      const noperm = new Discord.RichEmbed()
        .setTitle("No permission")
        .setColor([255, 92, 92])
        .setThumbnail(client.user.avatarURL)
        .setDescription("I require the permission **Manage Messages** to execute a prune!");

      return message.channel.sendEmbed(noperm);
    }
    console.log(`Logs => ${message.member.user.username} : prune`)
    const params = message.content.split(" ").slice(1);
    let messagecount = parseInt(params[0]);
    message.channel.fetchMessages({
        limit: 100
      })
      .then(messages => {
        let message_array = messages.array();
        message_array.length = messagecount + 1;
        message_array.map(m => m.delete().catch(console.error));
        message.channel.send(`Succesfully removed **${messagecount}** messages!`)
      });
  }
  if (command === 'kick') {
		console.log(`Logs => ${message.member.user.username} : kick`);
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(':warning: | You need permission **Kick Members** to use this command');
    }
    if(message.mentions.users.size === 0) {
      return message.channel.send(":warning: | Please mention a user!");
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if(!kickMember) {
      return message.channel.send(":warning: | Invalid user!");
    }
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
      return message.channel.send(":warning: | I miss permission **Kick Members** to kick!");
    }
    kickMember.kick().then(member => {
      message.channel.send(`:white_check_mark: | Kicked **${member.user.username}**`)
    })


  }

  if (command === 'ban') {
		console.log(`Logs => ${message.member.user.username} : ban`);
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(':warning: | You need permission **Ban Members** to use this command');
    }
    if(message.mentions.users.size === 0) {
      return message.channel.send(":warning: | Please mention a user!");
    }
    let banMember = message.guild.member(message.mentions.users.first());
    if(!banMember) {
      return message.channel.send(":warning: | Invalid user!");
    }
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
      return message.channel.send(":warning: | I miss permission **Ban Members** to ban!");
    }
    banMember.ban().then(member => {
      message.channel.send(`:white_check_mark: | Banned **${member.user.username}**`)
    })

  }
	if (command === 'softban') {
		console.log(`Logs => ${message.member.user.username} : ban`);
		if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(':warning: | You need permission **Ban Members** to use this command');
    }
		if(message.mentions.users.size === 0) {
			return message.channel.send(":warning: | Please mention a user!");
		}
		let banMember = message.mentions.users.first();
		if(!banMember) {
			return message.channel.send(":warning: | Invalid user!");
		}
		if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
			return message.channel.send(":warning: | I miss permission **Ban Members** to softban!");
		}
		message.guild.ban(banMember.id, 7).then(msg => {
			message.channel.send(`:white_check_mark: | Softbanned **${message.mentions.users.first().username}**`)
		});
		message.guild.unban(banMember.id);
		console.log(`Logs => ${message.mentions.users.first().username} got softbanned from ${message.guild.name}`);
	}
});

let queue = {};

const commands = {
	'play': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`**Error** | Add some songs to the queue first with ${tokens.prefix}add`);
		if (!msg.guild.voiceConnection) return commands.join(msg).then(() => commands.play(msg));
		if (queue[msg.guild.id].playing) return msg.channel.sendMessage('**Error** | Already Playing');
		let dispatcher;
		queue[msg.guild.id].playing = true;

		console.log(queue);
		(function play(song) {
			console.log(song);
			if (song === undefined) return msg.channel.send("No more songs to play, leaving the voice channel!").then(() => {
				queue[msg.guild.id].playing = false;
				msg.member.voiceChannel.leave();
			});
			msg.channel.send(`Now playing: **${song.title}** added by **${song.requester}**`);
			dispatcher = msg.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : tokens.passes });
			let collector = msg.channel.createCollector(m => m);
			collector.on('message', m => {
				if (m.content.startsWith(tokens.prefix + 'pause')) {
					msg.channel.sendMessage('paused').then(() => {dispatcher.pause();});
				} else if (m.content.startsWith(tokens.prefix + 'resume')){
					msg.channel.sendMessage('resumed').then(() => {dispatcher.resume();});
				} else if (m.content.startsWith(tokens.prefix + 'skip')){
					msg.channel.sendMessage('skipped').then(() => {dispatcher.end();});
				} else if (m.content.startsWith('nya~volume +')){
					if (Math.round(dispatcher.volume*50) >= 100) return msg.channel.sendMessage(`**Notification** | Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith('nya~volume -')){
					if (Math.round(dispatcher.volume*50) <= 0) return msg.channel.sendMessage(`**Notification** | Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith(tokens.prefix + 'time')){
					msg.channel.sendMessage(`**Notification** | time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
				}
			});
			dispatcher.on('end', () => {
				collector.stop();
				play(queue[msg.guild.id].songs.shift());
			});
			dispatcher.on('error', (err) => {
				return msg.channel.sendMessage('error: ' + err).then(() => {
					collector.stop();
					play(queue[msg.guild.id].songs.shift());
				});
			});
		})(queue[msg.guild.id].songs.shift());
	},
	'join': (msg) => {
		return new Promise((resolve, reject) => {
			const voiceChannel = msg.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply("Couldn't connect to current voice channel!");
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
	},
	'add': (msg) => {
		let url = msg.content.split(' ')[1];
		if (url == '' || url === undefined) return msg.channel.sendMessage(`You must add a YouTube video url, or id | **${tokens.prefix}add**`);
		yt.getInfo(url, (err, info) => {
			if(err) return msg.channel.sendMessage('Invalid YouTube Link: ' + err);
			if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
			queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
			const added = new Discord.RichEmbed()
			msg.channel.send(`Added song to queue -> **${info.title}**`);
		});
	},
	'queue': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Add some songs to the queue first with ${tokens.prefix}add`);
		let tosend = [];
		queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
		msg.channel.sendMessage(`__**${msg.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
	},
	'reboot': (msg) => {
		if (msg.author.id == "148016257231224832") process.exit(); //Requires a node module like Forever to work.
	}
};

client.on('message', msg => {
	if (!msg.content.startsWith(tokens.prefix)) return;
	if (commands.hasOwnProperty(msg.content.toLowerCase().slice(tokens.prefix.length).split(' ')[0])) commands[msg.content.toLowerCase().slice(tokens.prefix.length).split(' ')[0]](msg);
});

client.login('MzQwNDc0NjQ0NTY3OTQ5MzEz.DFzDPQ.5bP6pHpR-i3UKgChcaY6C2O5vh8');
