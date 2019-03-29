const Discord = require("discord.js");
const bot = new Discord.Client({autoReconnect:true});
const fs = require("fs");

bot.on("ready", () => {
  console.log("By Yestarday");
  console.log("Logged in " + bot.user.username);

});
bot.login("NTIwMzQ2Nzg2Njk1NjEwMzY5.D2a0xg.g6gAU2kOX3EhSEpSIHXM-w7wpNU");
const ownerid = "520346786695610369";
const prefix = "*";

bot.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== ownerid) return;

  if (message.content.startsWith(prefix + 'w')) {
                
      if(argresult){
         message.channel.send("**Watching: **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
        bot.user.setActivity(argresult, {type:'WATCHING'});
      } else 
      if(!argresult) {
      message.channel.send("**Yestarday is an error**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
  } else
   if (message.content.startsWith(prefix + 's')) {
                
      if(argresult){
         message.channel.send("**Streaming: **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
        bot.user.setActivity(argresult, {type:'STREAMING', url:"https://www.twitch.tv/TheFuture"});
      } else 
      if(!argresult) {
      message.channel.send("**Yestarday is an error**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
  } else
	    if (message.content.startsWith(prefix + 'p')) {
             
      if(argresult){
         message.channel.send("**Playing: **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
        bot.user.setActivity(argresult, {type:'PLAYING'});
      } else 
      if(!argresult) {
      message.channel.send("**Yestarday is an error**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
  } else
  
    if (message.content.startsWith(prefix + 'l')) {
               
      if(argresult){
         message.channel.send("**Listening: **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
        bot.user.setActivity(argresult, {type:'LISTENING'});
      } else 
      if(!argresult) {
      message.channel.send("**Yestarday is an error**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
  } else
	  if (message.content.startsWith(prefix + "dnd")) {
        message.channel.send("**Changing Your Status To `DND`**").then(message => {message.delete(3000)})
        message.delete(3000);
		  bot.user.setStatus("dnd");
	  } else
		  
      if (message.content.startsWith(prefix + "idle")) {
        message.channel.send("**Changing Your Status To `IDLE`**").then(message => {message.delete(3000)})
        message.delete(3000);
		  bot.user.setStatus("idle");
	  } else
		  
	  if (message.content.startsWith(prefix + "off")) {
          message.channel.send("**Changing Your Status To `OFFLINE`**").then(message => {message.delete(3000)})
          message.delete(3000);
		  bot.user.setStatus("invisible");
	  } else 

       if (message.content.startsWith(prefix + "de")) {

        let count = parseInt(args[0]) || 1;

          message.delete();
          message.channel.fetchMessages({ limit: Math.min(count, 100), before: message.id }).then(messages => {
          const prunable = messages.filter(m => m.author.id === bot.user.id);

        return Promise.all(
            prunable.map(m => m.delete())
        ).then(() => {
        });
    }).catch(message.error);
    
} else
 
    if (message.content.startsWith(prefix + "a")) {
        var mentionned = message.mentions.users.first();
    var MsH;
      if(mentionned){
          var MsH = mentionned;
      } else {
          var MsH = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("#33353C")
        .setImage(`${MsH.avatarURL}`)
      message.channel.sendEmbed(embed);
      message.delete(3000);

    }
});
