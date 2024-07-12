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
        verify: { projectID: "65e30c9573cb87b08438d8a1" }, // Asenda see oma Voiceflow projekti ID-ga
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        render: {
            mode: 'embedded',
            target: document.getElementById('chatbot'),
        },
        autostart: false
    });
}
