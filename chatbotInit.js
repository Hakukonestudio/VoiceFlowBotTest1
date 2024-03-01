document.addEventListener('DOMContentLoaded', () => {
    const scriptExists = document.querySelector('script[src="https://cdn.voiceflow.com/widget/bundle.mjs"]');
    
    if (!scriptExists) {
        const script = document.createElement('script');
        script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
        script.type = "module";
        document.body.appendChild(script);

        script.onload = () => {
            initializeChatbot();
        };
    } else {
        initializeChatbot();
    }
});

function initializeChatbot() {
    window.voiceflow.chat.load({
        verify: { projectID: "Y65df350a33dfac9fbfad5426" }, // Asenda see oma Voiceflow projekti ID-ga
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        render: {
            mode: 'embedded',
            target: document.getElementById('chatbot'),
        },
        autostart: false
    });
}
