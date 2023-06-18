function openSearchEngines() {
  const links = document.querySelectorAll('.link');
  for (let i = 0; i < links.length; i++) {
    window.open(links[i].href);
  }
}

const tasks = document.querySelectorAll('input[type="checkbox"]');
tasks.forEach(task => {
  task.addEventListener('change', () => {
    if (task.checked) {
      task.parentNode.classList.add('completed');
    } else {
      task.parentNode.classList.remove('completed');
    }
  });
});

const copyLink = document.querySelector("#copy-link");
copyLink.addEventListener("click", async () => {
  try {
    const textToCopy = "git clone https://github.com/ReadLamp/AisWorker.git";
    await navigator.clipboard.writeText(textToCopy);
    console.log("Copied to clipboard:", textToCopy);
    alert('克隆命令已复制到剪切板');
  } catch (err) {
    console.error("Failed to copy:", err);
  }
}); 