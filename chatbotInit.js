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
<<<<<<< HEAD
        verify: { projectID: "6602955814948952dcba56a96602955814948952dcba56a9" }, // Asenda see oma Voiceflow projekti ID-ga
=======
        verify: { projectID: "65e30c9573cb87b08438d8a1" }, // Asenda see oma Voiceflow projekti ID-ga
>>>>>>> 7cca9dda73f2131e9d58dbf24f46bf177ae634f9
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


