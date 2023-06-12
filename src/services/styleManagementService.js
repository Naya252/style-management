export function createChanellTitle(){
	const broadcastChannel = new BroadcastChannel("title_channel");
	broadcastChannel.addEventListener("message", ({ data }) => {
		document.title = data
	});
}

export function useChannelTitle(val) {
		const broadcastChannel = new BroadcastChannel("title_channel");
		broadcastChannel.postMessage(val);
};



