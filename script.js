console.log("YouTube message remover started.");

setInterval(() => {
  const iframe = document.getElementById("chatframe");

  if (!iframe) return;

  const messages = iframe?.contentWindow?.document.getElementsByTagName(
    "yt-live-chat-text-message-renderer"
  );

  if (!messages) return;

  for (const elem of messages) {
    if (messages.length < 100) return;
    if (messages[0].getAttribute("author-type") === "owner") {
      messages[1].parentNode?.removeChild(messages[1]);
    } else {
      messages[0].parentNode?.removeChild(messages[0]);
    }
  }

  console.log(messages.length);
}, 10);

setInterval(() => {
  const messages = document.getElementsByTagName(
    "yt-live-chat-text-message-renderer"
  );

  if (!messages) return;

  for (const elem of messages) {
    if (messages.length < 100) return;
    if (messages[0].getAttribute("author-type") === "owner") {
      messages[1].parentNode?.removeChild(messages[1]);
    } else {
      messages[0].parentNode?.removeChild(messages[0]);
    }
  }

  console.log(messages.length);
}, 10);
