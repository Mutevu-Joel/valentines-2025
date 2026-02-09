const twilio = require('twilio');

exports.handler = async (event, context) => {
  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  try {
    // Message to HER
    await client.messages.create({
      body: "I'm so happy you said yes! I love you so much. ❤️",
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.HER_PHONE_NUMBER
    });

    // Message to YOU
    await client.messages.create({
      body: "SHE SAID YES! 🌹 Mission accomplished.",
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.YOUR_PERSONAL_NUMBER
    });

    return { statusCode: 200, body: "Sent" };
  } catch (error) {
    return { statusCode: 500, body: error.message };
  }
};