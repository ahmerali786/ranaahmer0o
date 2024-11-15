const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923287149558";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_00_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDc0LFxuICAgICAgICA4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NixcbiAgICAgICAgNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwLFxuICAgICAgICA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDYzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk1LFxuICAgICAgICA0MixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICA4MixcbiAgICAgICAgMTA4LFxuICAgICAgICA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICA2OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTExLFxuICAgICAgICAzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDczLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MixcbiAgICAgICAgMzMsXG4gICAgICAgIDcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDM4LFxuICAgICAgICA4NSxcbiAgICAgICAgODksXG4gICAgICAgIDE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5WcmRFQ0poT3d0VG9rbXEvOEpaV25aRTQ2UFVYcG1zNytEQlVWbTR5Rms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjg3MTQ5NTU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RDIxNjY2QjkyMEJFRjY1MkQwNDYyNzFCODQ3NUMzRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE2NTQwMzNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiekt0bGRoT1JUMTZ6M2xma0c5eVlHZ1wiLFxuICBcInBob25lSWRcIjogXCI5ZjJmOTQ2Yy03YjNlLTQ0NTgtODE3Zi1lNzY3NTEzNTgxYTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTksXG4gICAgICAxNjYsXG4gICAgICAyMSxcbiAgICAgIDEzMCxcbiAgICAgIDIzNSxcbiAgICAgIDEzLFxuICAgICAgMjUsXG4gICAgICAyMDAsXG4gICAgICAxMixcbiAgICAgIDIzOCxcbiAgICAgIDIwMCxcbiAgICAgIDY1LFxuICAgICAgMTQ4LFxuICAgICAgMjA4LFxuICAgICAgNzYsXG4gICAgICA2NyxcbiAgICAgIDEyNixcbiAgICAgIDE4NCxcbiAgICAgIDE2MixcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODEsXG4gICAgICAxODAsXG4gICAgICAxNDEsXG4gICAgICA5NCxcbiAgICAgIDIyOCxcbiAgICAgIDIzNSxcbiAgICAgIDgyLFxuICAgICAgMjU0LFxuICAgICAgMTgzLFxuICAgICAgNzEsXG4gICAgICA4MCxcbiAgICAgIDI0OSxcbiAgICAgIDkwLFxuICAgICAgMTEzLFxuICAgICAgMjAsXG4gICAgICA0NixcbiAgICAgIDE0MSxcbiAgICAgIDM1LFxuICAgICAgMTQ3LFxuICAgICAgMTg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjY3VFpXREJLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyODcxNDk1NTg6NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4ODIxMDY2Nzk3Mjc3Ojc4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BqdzZlUUJFSXJqMjdrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaGNwTGRndjlqdXpwM0JPa2VOZ0pKenFlN1NQUHl2MGI4cjF2UERWWjN3WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJeGYzSVZPM1N4c1llbjhJT2g4VVRLbUtFM3ZMbmF2OVVQcGRRVmVJZ3VEYTVKNlRkVjRtM1F4ckx2a1ExNGhlMUFuMlpxM0V5bk1icE1PTnhRSUlDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0YnBJa1k2djJUVjdlU0dINWhIbW5zY3VsMFFXMHVoRlplcjhFS2E5cjhnL0lxTzMzeDR0V1VrNmVQOGxRWkl1eWc4Uk1XeERpQUE1NGMxaTZTV0NBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyODcxNDk1NTg6NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNjU0MDI5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjM5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOMzkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzc2pXSHp5QVFEeTNtUzUzb1djYkNPZnppVTRrZW14aG53K3RxVU8xVWZrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ3OTg4NTQyOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Ahmer Ali",
  packname: process.env.PACK_NAME || "Ahmer Ali",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Ahmer-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
