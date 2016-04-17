const host = 'https://localhost:' + (process.env.APP_PORT || '3000')

module.exports = {
  url: host + '/lobby',
  elements: {
    createRoomButton: "input[type=text",
    aboutPageLink: "button[onclick*='/about']"
  }
};