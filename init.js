const styles = 'font-family: sans-serif;user-select:none;min-width: 96px;text-align:center;line-height:48px;padding-left:16px;padding-right:16px;height: 48px;border-radius:24px;color:white;background-color:#00cc99;font-size:16px;position:fixed;right:48px;bottom:24px;box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);';
const panelStyles = 'height:400px;width:400px;background-color:red;position:fixed;right:48px;bottom:64px;border-radius:24px;box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);'
window.onload = (event) => {
  console.log('Chat loaded!');
  
  var node = document.createElement("div");
  node.onclick = openChat();
  node.style.cssText += styles;
  var help = document.createTextNode("HELP");
  var x = document.createTextNode("X");
  node.appendChild(help);
  
  
  
  var panel = document.createElement("div");
  panel.style.cssText += panelStyles;
  document.body.appendChild(node);    
};

let chatOpen = false;

function toggleChat() {
  chatOpen = !chatOpen;
}

function openChat() {
  toggleChat();
  node.onclick = closeChat();
  node.innerHTML = '';
  node.appendChild(x);
  node.appendChild(panel);
  alert('wow');
}

function closeChat() {
  toggleChat();
  node.onclick = openChat();
  node.innerHTML = '';
  node.appendChild(help);
  alert('wow');
}
