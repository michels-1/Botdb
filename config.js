const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
GITHUB_USERNAME: process.env.GITHUB_USERNAME || "",
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || "",
REPO_NAME: process.env.config.REPO_NAME || "",
ALIVE_IMG: process.env.ALIVE_IMG ||"",
ALIVE_MSG: process.env.ALIVE_MSG ||"",
ANTI_BOT: process.env.ANTI_LINK || "",
ANTI_LINK: process.env.ANTI_LINK || "",
ANTI_BAD: process.env.ANTI_BAD || "",
ALLWAYS_OFFLINE: process.env.ALLWAYS_OFFLINE || "",
READ_CMD: process.env.READ_CMD || "", 
};
