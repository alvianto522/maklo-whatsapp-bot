const { create, Client, decryptMedia} = require("@open-wa/wa-automate");
const gtts = require('node-gtts')('id');

// running text to speech
gtts.createServer(1337);

create().then((client) => start(client));

// 2020 - pajaar
// github.com/pajaar
// trakteer.id/pajaar

async function start(client) {
client.onMessage(async (msg) => {

// if message not from group  
if (msg.chat.isGroup === false) {	

// random emoticon function	
function repeat(str, num) { 
return (new Array(num+1)).join(str); 
}

// u can add more emoticon on this array
let emot = ["🤣", "😳", "🤨", "😂", "😭", "🥰", "😡"];
let random = Math.floor(Math.random() * emot.length);
let randomemot =  repeat(emot[random], Math.floor(Math.random() * 5));

	if(msg.type === 'chat') {	
	var urlencode = require('urlencode');	
    const fetch = require('node-fetch');
    fetch('http://tololbgt.coolpage.biz/simi.php?tot='+urlencode(msg.body))
    .then(res => res.json())
    .then(json =>{
	
    // create random number
    // 0=typing || 1=voice
	var jawab = Math.floor(Math.random() * 2);
	
	if (jawab === 0) {
    client.simulateTyping(msg.from, true);
    client.sendText(msg.from, json.result+randomemot);
	
	} else {
    client.sendPtt(msg.from, 'http://localhost:1337/?text='+urlencode(json.result)+'&lang=id');
    client.sendText(msg.from, randomemot);
	
    }
	
				});
			}
		}
  });
}


// ./e0f