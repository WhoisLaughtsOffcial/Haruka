const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = true //jadiin true klo gk mau fitur bot lu di pke sama org lain
global.anticall = true
global.anti_delete = true

// setting
global.ownername ="WhoIsLaughts"
global.ownernumber = "51902679067"
global.botname = "EmperoBot"
global.thumbnail = fs.readFileSync("./settings/Haruka.jpg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/d4c05638fa7886a1d8060.jpg"
global.lolkey = '3f60a8f5be1b233d7bd90c3c' //register lolhuman.xyz klo mau apikey
global.zenzkey = '8423e19c13' //register zenzapi.xyz klo mau apikey
global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
