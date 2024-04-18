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
        verify: { projectID: "6602955814948952dcba56a96602955814948952dcba56a9" }, // Asenda see oma Voiceflow projekti ID-ga
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        autoOpen: true,
        initialPrompt: {
          type: 'text',
          text: 'Tere tulemast! Kuidas saan teid täna aidata?'
        },
        render: {
            mode: 'embedded',
            target: document.getElementById('chatbot'),
        },
        autostart: true
    });
}


