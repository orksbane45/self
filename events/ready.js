const chalk = require('chalk');
const moment = require('moment');
module.exports = client => {
 console.log(chalk.black.bgRed('Self Bot en ligne'));
    console.log(chalk.inverse(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] `) + chalk.black.bgGreen(`Le self-bot ${client.user.tag} est prêt.`));
  client.user.setActivity('rien')
};
 //on ou off
