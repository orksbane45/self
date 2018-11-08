const chalk = require('chalk');
const moment = require('moment');
module.exports = client => {
 console.log(chalk.black.bgRed('Self Bot en ligne'));
    console.log(chalk.inverse(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] `) + chalk.black.bgGreen(`Le self-bot ${client.user.tag} est prêt.`));
    console.log(chalk.inverse('Token :               ') + chalk.black.bgGreen(client.token));
    console.log(chalk.inverse('Id :                  ') + chalk.black.bgGreen(client.user.id));
  client.user.setActivity('être un chevalier')
};
 //on ou off
