// https://foundryvtt.wiki/en/development/api/settings

export default function immersiveUISettings() {
	// Habilitar ou desabilitar som de notificação para mensagens.
	game.settings.register('immersive-ui', 'chatMessageSound', {
		name: 'Habilitar Som para Novas Mensagens',
		hint: 'Esta opção habilita um suave som para as notificações de mensagens, tornando-as mais perceptíveis.',
		scope: 'client',
		config: true,
		type: Boolean,
		default: true,
	});
}
