import immersiveUISettings from "./settings.js";

console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function() {
  console.log("This code runs once the Foundry VTT software begins its initialization workflow.");
	immersiveUISettings();
});

Hooks.on("ready", function() {
  console.log("This code runs once core initialization is ready and game data is available.");
});

Hooks.on('preCreateChatMessage', function(message){
	if(!message.sound && game.settings.get('immersive-ui', 'chatMessageSound')) {
		message.updateSource({sound: 'modules/immersive-ui/assets/audio/chat-notification-sound.mp3'});
	}
});