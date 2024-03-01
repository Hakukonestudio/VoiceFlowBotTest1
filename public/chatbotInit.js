// Kuna see skript kasutab moodulit, veenduge, et server saadab selle õige MIME-tüübiga
const script = document.createElement('script');
script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
script.type = "module"; // Oluline, et brauser teaks, kuidas seda skripti töödelda
document.body.appendChild(script);

script.onload = () => {
    window.voiceflow.chat.load({
        verify: { projectID: "Y65df350a33dfac9fbfad5426" }, // Asenda oma projekti ID-ga
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        render: {
            mode: 'embedded',
            target: document.getElementById('flat-chat'),
        },
        autostart: false
    });
};