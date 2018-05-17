const cheerio = require('cheerio'),
      snekfetch = require('snekfetch'),
      querystring = require('querystring');

module.exports.run = async function(client, msg, args)
{
	console.log("ok");
   let searchMessage = await msg.reply('Searching... Sec.');
   let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(msg.content)}`;

   return snekfetch.get(searchUrl).then((result) => {

      let $ = cheerio.load(result.text);
	  let googleData = $('.r').first().find('a').first().attr('href');

      googleData = querystring.parse(googleData.replace('/url?', ''));
      searchMessage.edit(`Result found!\n${googleData.q}`);

  }).catch((err) =>
  {
     searchMessage.edit('No results found!');
  });
}
