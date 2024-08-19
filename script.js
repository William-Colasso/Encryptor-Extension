async function copy() {
    var output = document.getElementById("output").value
    var copy = document.getElementById("copy")
  try {
    await navigator.clipboard.writeText(output)
    copy.innerText = "Copied!"
    copy.style.color = "white"

     setTimeout(async () => {
                let clipboardContent = await navigator.clipboard.readText()
                if (clipboardContent !== output) {
                    copy.innerHTML = "Copy"
                    copy.style.color = "#12a525"
                }
            }, 3000) 

  } catch (err) {
    console.error("Copying Error" + err);
  }
}

function generateKey() {}
