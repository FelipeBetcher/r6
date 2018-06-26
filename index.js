const Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Estou pronto!")
    bot.user.setActivity('ou melhor xitando no R6', { type: 'PLAYING' })
    bot.user.setStatus("dnd")
})

bot.on("guildMemberUpdate", mem => {
    bot.channels.get("460888924357656615").setName("Membros VIPS: "+mem.guild.roles.get("460550113773879317").members.size)
})

bot.on("guildMemberAdd", mem => {
    bot.channels.get("460893598427381798").setName("Membros totais: "+mem.guild.memberCount)
    mem.addRole("460910412209061903")
    bot.channels.get("460546789498421266").send(mem+" seja bem-vindo, olhe <#460546521256034309> para ter mais informações")
})

bot.on("guildMemberRemove", mem => {
    bot.channels.get("460893598427381798").setName("Membros totais: "+mem.guild.memberCount)
    bot.channels.get("460546789498421266").send(mem+" saiu do servidor")
})

bot.on('message', async message => {
    if(message.channel.type == "dm") return;
    if(message.author.bot) return;

    const registro = bot.channels.get("460922518560309249")

    if((message.content.toLowerCase() === "b!preco") || (message.content.toLowerCase() === "b!preço") || (message.content.toLowerCase() === "preço") || (message.content.toLowerCase() === "preco")) {
      message.author.send(new Discord.RichEmbed()
      //.setTimestamp()
      .setColor("#0CBF9D")
      .setTitle("BOOST")
      //.setImage("https://cdn.discordapp.com/attachments/460549914695434252/460976003351576576/image.png")
      //.setFooter(bot.users.get("412582853834965003").username, bot.users.get("412582853834965003").avatarURL)
      .setDescription("**AVISO**\nO preço varia de acordo com os pontos que está ganhando por partida.\n\n**Pagamento**\nPara comprar fale com <@412582853834965003>.\nPagamento via Mercado Pago ou GiftCard Steam.\n⠀")
      .addField("Lista de preços","MD10 → diamante\nPlatina → diamante\nOuro → diamante\nPrata → diamante\nBronze → diamante\nCobre → diamante",true)
      .addField("BRL","R$ 60,00\nR$ 50,00\nR$ 70,00\nR$ 80,00\nR$ 110,00\nR$ 140,00",true))

      message.author.send(new Discord.RichEmbed()
      .setTimestamp()
      .setColor("#0CBF9D")
      .setTitle("MACRO")
      .setImage("https://cdn.discordapp.com/attachments/460549914695434252/460976003351576576/image.png")
      .setFooter(bot.users.get("412582853834965003").username, bot.users.get("412582853834965003").avatarURL)
      .setDescription("**Pagamento**\nPara comprar fale com <@412582853834965003>.\nPagamento via Mercado Pago ou GiftCard Steam.\n\n**Promoção**\nCaso divulgue o macro para 3 pessoas e os mesmos comprarem você ganha o macro de graça.\n⠀"))
    }

    if(message.content.toLowerCase().startsWith("b!boost")) {
      if(message.author.id !== "412582853834965003") return;
      function msg() {
        if(!message.content.slice(8)) return "<@&460550113773879317> **Boost on**"
        if(message.content.slice(8)) return "<@&460550113773879317> **Boost on:** " + message.content.slice(8)
      }
      message.delete()
      message.channel.send(msg())
    }

    if(message.content.toLowerCase().startsWith("b!aviso")) {
      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      if(!message.content.slice(8)) {
        message.author.send("Escreva algo depois do `b!aviso`")
      }
      if(message.content.slice(8)) {
        bot.channels.get("460917098860904453").send(new Discord.RichEmbed()
        .setColor("#FFCC4D")
        .setTitle("AVISO")
        .setDescription(message.content.slice(8))
        .setThumbnail("https://cdn.discordapp.com/attachments/460917098860904453/460919852744441866/26a0.png"))
      }
      message.delete()
    }

    if(message.content.startsWith("b!clear")) {
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
      if(!message.content.slice(8)) {
        message.channel.send(message.author + " digite um número").then(a => {
          a.delete(3000)
        })
        message.delete()
      }
      if(message.content.slice(8)) {
        if(!isNaN(message.content.slice(8))) {
          var b = parseFloat(message.content.slice(8)).toFixed(0)
          if(b > 100) {
            b = 100
          }
          message.channel.bulkDelete(b)
          message.channel.send(message.author + " " + b.toString() + " mensagens deletadas").then(a => {
            a.delete(3000)
          })
        }
        if(isNaN(message.content.slice(8))) {
          message.channel.send(message.author + " digite um número").then(a => {
            a.delete(3000)
          })
          message.delete()
        }
      }
    }

    if(!message.member.roles.map(e => e.id).includes("460550113773879317")) {
      if(message.member.hasPermission("ADMINISTRATOR")) return;
          var oi = {}
          var a = message.content.toLocaleLowerCase()

          for(var i = 0; i < a.length; i++) {
          var letra = a.split("")[i]
          if(!oi[letra]) {
          oi[letra] = {
            ve:
            1
          }
          } else {
          oi[letra] = {
            ve:
            oi[letra].ve + 1
          }
          }
          }
          var u = Object.values(oi)
          var t = []
          for(var i = 0; i < u.length; i++) {
          var y = u[i].ve
          if(y > 20) {
          t.push(y)
          }
          }

        var ii = 0
        for(var i = 0; i < message.content.length; i++) {
          var letra = message.content.split("")[i]
          if(letra !== letra.toLowerCase()) {
            ii++
          }
        }
        var raz = []
        if(ii > 10) {
          raz.push("muitas letras maiúsculas")
        }

        var re =  /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.exec(message.cleanContent);
        if(re != null){
          raz.push("convite")
        }

        if(message.content.length > 256){
          raz.push("mais de 256 caracteres")
        }

        if(t.length > 0) {
          raz.push("muitos caracteres iguais")
        }

        if((t.length > 0) || (ii > 10) || (message.content.toLowerCase().indexOf("discord.gg") > -1) || (message.content.length > 256)){
          registro.send(new Discord.RichEmbed()
          .setColor(message.guild.members.get(bot.user.id).highestRole.hexColor)
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription("**Mensagem enviada por " + message.author + " deletada em " + message.channel + "**")
          .addField("razão", raz.join(", ").slice(0,1).toUpperCase()+raz.join(", ").slice(1,raz.join(", ").length))
          .setFooter("ID: " + message.author.id)
          .setTimestamp())
          message.delete()
        }
    }

})

bot.login(process.env.BOT_TOKEN);
