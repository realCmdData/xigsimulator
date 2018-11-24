const Discord = require('discord.js');
const client = new Discord.Client();
const { TOKEN, PREFIX, OWNER, EMBEDCOLOUR} = require('./config.js');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`sum weeb shit`, { type: "WATCHING" });
});

client.on('error', error => {
    console.log(error)
});


client.on('message', message => {
    const responses = [
        `<a:wut:515559101850451968>`,
        `Listen 'ere buddy!`,
        `${message.author} is gay`,
        `uwu`,
        `<:blureyes:515560048672636929>`,
        `What the fuck that's gay`,
        `>:(`,
        `<:yes:515560787985563668>`,
        `Fuck off ${message.author}`,
        `Oh yes! FUCK YES!`,
        `lol`,
        `feckin cunt`,
        `idk what the fuck to say to you ${message.author}`,
        `<:wutface:515561254698614839>`,
        `<a:sad:515559102630330369>`,
        `reeeee you normie`,
        `:weary: :weary: :weary: :weary: :weary: :weary:`,
        `oh lol, cool story`,
        `YeEt ${message.author}`,
        `Yes soon soon my dude`,
        `Yikes my dude`,
        `<a:reeee:515562021983617026>`,
        `*breath in*`,
        `Bitte klatschen sie ${message.author} eine rein`,
        `You donkey fart >:(`,
        `Cuz you gay :weary:`,
        `Yikes you ducked it up man ${message.author}`,
        `Sir I'll have you know that I have to go to sleep soon`,
        `I am going to have to ask you to calm the duck down`,
        `discord roblox maker is the shit ma dude :ok_hand:`,
        `The fuck is this shit`,
        `Can you not`,
        `Luca is secretly a girl uwu`,
        `I rather you didn't sir`,
        `I just made an omelette guys`,
        `It's crazy how hard ${message.author} is right about now`,
        `Rythm down = Chaos for non-dev people like ${message.author}`,
        `Are you retarded or smth`,
        `${message.author} is being a dumbass :weary:`,
        `Are you under 13? uwu`,
        `:weary:`,
        `No u`,
        `um`,
        `:weary::weary::weary::weary::weary:`,
        `:weary::weary::weary::weary::weary::weary::weary::weary:`,
        `:regional_indicator_u: :regional_indicator_w: :regional_indicator_u:`,
        `xd`,
        `Why is it so big ${message.author}?`

    ]
    const modlog = [
        `your name is racially offensive`,
        `your name is racially offensive and we don't tolerate racial content`,
        `We do not tolerate names like yours`,
        `acting like he's a tough guy smh`,
        `underage`,
        `dm ads`,
        `storing messages without consent ree`,
        `Ban evasion`,
        `Advertising in general`,
        `Ads in #general`,
        `Responds to other bots`,
        `Complete trash, DBM could do a better job smh`,
        `Responds to "sa"`,
        `Racist memes`,
        `Clearly failed to learn his lesson of copying open-source bots/codes and treating them as his own.`,
        `Kept asking for a Mass DM command smh`,
        `Anti-curse messages. We're not a christian minecraft server here`,
        `Spam applying bots for verification with the same description and the same denial reason`
    ]

    let args = message.content.split(' ').slice(2);
    if (!message.content.startsWith(PREFIX)) return;
    if (message.channel.type === 'dm') return;
    if (message.author.bot) return;

    if (message.content.toLowerCase().startsWith(PREFIX + "github")) {
        return message.channel.send("This shit top-secret k? Don't give it to the evil marco_rennmaus. The Discord Trust & Saftey team have tried to detain him, but failed. He is still roaming around the channels.... \n https://github.com/realCmdData/xigsimulator");
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "owner")) {
        return message.channel.send("My owner is **CmdData#0101** give him sum cookies pls");
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "ping")) {
        return message.channel.send(`<a:animeping:515568211693928449> ${client.ping}ms`);
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "xiggy")) {
        return message.channel.send("What do you want uwu");
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "xignotic")) {
        return message.channel.send("What do you want uwu");
    }
    
    if (message.content.toLowerCase().startsWith(PREFIX + "xig")) {
        return message.channel.send("What do you want uwu");
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "ur a qt")) {
        return message.channel.send(":weary: uwu");
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "help")) {
        var embed = new Discord.RichEmbed()
            .setTitle(`Xignotic to the rescue! :fire:`)
            .setThumbnail("https://cdn.discordapp.com/emojis/493626394581008404.png?v=1")
            .addField(`${PREFIX}help`, "Sends this message")
            .addField(`${PREFIX}modlog`, "Sends a mod-log case")
            .addField(`${PREFIX}simulators`, "Shows other DBL simulators you'd like!")
            .addField(`${PREFIX}github`, "See my inner workings uwu")
            .addField(`${PREFIX}owner`, "Who made me?")
            .addField(`${PREFIX}invite`, "Sends the invite link")
            .addField(`${PREFIX}ping`, "Sends ping")
            .addField(`${PREFIX}[xiggy/xig/xignotic]`, "Who fucking said my name?")
            .addField(`${PREFIX}ur a qt`, "uwu")
            .addField(`${PREFIX}[question/text]`, "Let chance into the game!")
            .setColor(EMBEDCOLOUR)
            .setTimestamp()
        return message.channel.sendEmbed(embed);
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "simulators")) {
            var embed = new Discord.RichEmbed()
                .setTitle(`So i'm not good enough eh? Here are some more simulators!`)
                .setThumbnail("https://cdn.discordapp.com/emojis/493035193246941199.png?v=1")
                .addField(`Jonny Simulator`, "https://discordbots.org/bot/513875565447741440")
                .addField(`Oliy Simulator`, "https://discordbots.org/bot/500954344510980136")
                .addField(`DBL Simulator 2`, "https://discordbots.org/bot/513814680662179857")
                .setColor(EMBEDCOLOUR)
                .setTimestamp()
            return message.channel.sendEmbed(embed);
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "eval")) {
        if (message.author.id !== OWNER) {
            return message.channel.send("<:wutface:515561254698614839> What do you want from me");
        }
        return message.channel.send("Oi Cmd, you fecking idiot");
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "dbm")) {
        return message.channel.send("I've never used DBM wdym <a:reeee:515562021983617026>")
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "invite")) {
        return message.channel.send("Here's my invite link :weary: \n https://discordapp.com/oauth2/authorize?client_id=510506828031852555&permissions=8&scope=bot");
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "vote")) {
        return message.channel.send("I'll cut you if you don't vote ok \n https://discordbots.org/bot/510506828031852555");
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "modlog")) {
        let cases = [Math.floor(Math.random() * 3)]
        if (cases == 0) {
            cases = "Mute | Case"
            color = "#E1AE0B"
        } else if (cases == 1) {
            cases = "Ban | Case"
            color = "#ff0000"
        } else {
            cases = "Kick | Case"
            color = "#E1AE0B"
        }

        let modtxt = modlog[Math.floor(Math.random() * modlog.length)]
        let param = args.join(" ");
        let user = message.mentions.members.first() || message.guild.members.get(param) || message.guild.members.find(m => m.displayName.toLowerCase().includes(param.toLowerCase()) || m.user.tag.toLowerCase().includes(param.toLowerCase())) || null;
        if (!user || !param) {
            var embed = new Discord.RichEmbed()
                .setTitle(`${cases} #${Math.floor(Math.random() * 10000)}`)
                .addField("User", `${message.author.tag} (${message.author})`, true)
                .addField("Moderator", "Xignotic#0001", true)
                .addField("Reason", modtxt)
                .setTimestamp()
                .setColor(color)
            return message.channel.sendEmbed(embed);
        }
        var embed = new Discord.RichEmbed()
            .setTitle(`${cases} #${Math.floor(Math.random() * 10000)}`)
            .addField("User", `${user.user.tag} (${user})`, true)
            .addField("Moderator", "Xignotic#0001", true)
            .addField("Reason", modtxt)
            .setTimestamp()
            .setColor(color)
        return message.channel.sendEmbed(embed);
    }
    
    if (message.content.toLowerCase().startsWith(PREFIX)) {
        let txt = responses[Math.floor(Math.random() * responses.length)];
        message.channel.send(`${txt}`)
    }

})

client.login(TOKEN);