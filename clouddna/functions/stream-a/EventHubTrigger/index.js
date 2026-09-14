const { EventHubConsumerClient } = require("@azure/event-hubs");

module.exports = async function (context, eventHubMessages) {
    context.log(`Stream A triggered with ${eventHubMessages.length} message(s)`);

    eventHubMessages.forEach((message, index) => {
        context.log(`Message ${index}: ${JSON.stringify(message)}`);
    });

    context.log("Stream A processing complete");
};