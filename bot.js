const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : KING `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '$Daily'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '$Credits'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === 'Bot ?'){
        message.channel.send('** By KING_Dz + Yacine __Fun__ :tada:  **')
    }
});

client2.on('message', message => {
    if(message.content === '$Daily'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '$Credits'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === 'Bot ?'){
        message.channel.send(':L Client2 :hearts: ')
    }
});



client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam :L :) , Frame :heart: , Credit By KING Tune Server :hearts: + King_Power + Yacine :crescent_moon: :dollar:  , Farm Credit By KING Tune Server :hearts: + King_Power , ez Farm - :fire: كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam :L :)  , Frame :heart:  , Credit By KING Tune Server :hearts: + King_Power + Yacine :crescent_moon: :dollar:  , Farm Credit By KING Tune Server :hearts:+ King_Power  , ez Farm - :fire: كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
