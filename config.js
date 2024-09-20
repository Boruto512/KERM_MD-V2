//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237650564445,50941704602";
global.owner = process.env.OWNER_NUMBER || "50943467496";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0hIeGpGcEs4cXMycWpFbnVUUUQ5M3pvYzJXU3duK0ZSdGxrV0kvRVpIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXlmc296Y2pOQWU4eThoemxxWXRyU1Z5YzZCUEFxdDdIdWJMKzVKalVTcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTzhjdm1oK2xCdlBDcEtXbDU0Rm1RUmNpenVaT0swcTlpUjUvSjRXRWxBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4VnI3ZUpUZFpjYXRqMHZEMG9jV3N0VmV3ajBOMThmMnpUQWJsNlNsTkJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndESnkweDBkTmY3MU5mbE0yRk1YQmxVa1l5Mm1YRkRQVHFGRGNkQ2twVTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjAxc3ZGTVZCSnA1cVRackJHNnJSQjZKREhnMlZ2aWtVNUluQmk5MTFRenc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0tEZmtHRXZPbi9zejgzMDBURVJKcTIyYWZPMVpqcGtEdnFPU0o1alhVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFFVeHcxTDJQNmlmbGRCWkRreGFvM1hUcUVveXVrK2N2NEVUNUZPbExsZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFzdm0vY3dUTnpCSVkwSDJJbkRyRVFuU05JTUFvdUFCNTBFWS9jZ1loVytYRTMzZ2RYU2tFZ2o0UkxpRG9VYjFCemJ1TVVDVzUxc3ZManZ2cmVvZWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiJRU1QwWEZyMVBpcmNZdXRmODN6bkYrb2NwZEE0WW1nTGVUNTQ2NkZFUXpvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQzNDY3NDk2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBMzNCRTVDOTI2MEUxRjNFRjg4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY0OTIxMDF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InIzTVpHeWFEU2xtOWJOUVpXZnlueEEiLCJwaG9uZUlkIjoiMjlhOGViMWQtNWVlNS00MGEwLWE5NDYtZjVmOGE1N2IxZTE5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImROdEwrNkY5QStmTGtWZWZSNUFqcGd4Rzlxaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIdUlIU2VGVEtGbUhDeUY2MlBWZHUyUStxYTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSkxCOFo0Tk4iLCJtZSI6eyJpZCI6IjUwOTQzNDY3NDk2OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Xo/Cdl7/wnZe28J2Xu/Cdl7DwnZey8J2YgPCdmIDwn46A8J+SlfCfkbgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0orK3I1WU5FTFhib0xjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjB6RkRrT0RydzJsaXJzSHloNDNmMFBYSzRienl4Nzkya2R2QmIvaE1xR2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlBVQlRjVGRYa1dUbElmdWRNc1R5TWpPbUZaNzFGM1VyYVk5UE1jYjlHUUZQcnY1NkVxQmJjQkxJUVZVMEM3Y0RHN08yUHVOenA4aGRoK2NNckhkWGlnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsa3ZZRW1RNFVsdlBKN0JRZ3ducFlpZndvNittdWpkeVptQStSY0dkdXZYeE9HOFJLam1BbHFuVFdKbjd3MWVtdlQrajdWdmYwYXAyV2tUSW1lcjVqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQzNDY3NDk2OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZE14UTVEZzY4TnBZcTdCOG9lTjM5RDF5dUc4OHNlL2RwSGJ3Vy80VEtobyJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2NDkyMDk4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUIzLyJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "Princess",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
