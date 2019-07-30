/**
 * Copyright (c) My Dick Corporation. All rights reserved.
 */
module.exports = function(controller) {
    
    const Mongo = require('../lib/mongo');

    // !pokemon
    controller.hears(/^!debug/i, ['message','direct_message'], async function(bot, message) {
        const client = Mongo.client();

        const gary = client.metrics.find({name:'gary'})
        await bot.reply(message, {text: 'Deploys ' + gary.deploys});
      
    });

}