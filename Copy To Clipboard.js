javascript:if(typeof clipBoard === 'undefined'){let clipBoard = "";} window.focus(); setTimeout(async () => {clipBoard = await navigator.clipboard.readText();navigator.clipboard.writeText(clipBoard + " | " + window.getSelection()); }, 500); void 0;
