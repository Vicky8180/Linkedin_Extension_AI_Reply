import { getChatGPTResponse } from "./utils"

function addButton(targetDiv: HTMLElement) {
  if (!targetDiv.querySelector(".auto-fill-button")) {


    // Querying the ID on which we have to append ot inject or Dialog div

    const wrapperElement =
      document.querySelector(
        ".msg-overlay-conversation-bubble__content-wrapper"
      ) ||
      document.querySelector("#message-thread-ember3") ||
      document.querySelector('[id^="message-thread-ember"]') ||
      (document.querySelector(".scaffold-layout__detail") as HTMLElement | null)



    // creating AI icon button to be visible to users so that they can start interaction...  

    const button = document.createElement("button")
    button.className = "auto-fill-button"
    button.style.position = "absolute"
    button.style.right = "10px"
    button.style.bottom = "10px"
    button.style.zIndex = "1000"
    button.style.padding = "0"
    button.style.width = "32px"
    button.style.height = "32px"
    button.style.border = "none"
    button.style.cursor = "pointer"
    button.style.backgroundImage =
      'url("https://seeklogo.com/images/G/google-bard-logo-2D24045D5B-seeklogo.com.png")'
    button.style.backgroundSize = "contain"
    button.style.backgroundRepeat = "no-repeat"
    button.style.backgroundPosition = "center"

    targetDiv.style.position = "relative"
    targetDiv.appendChild(button)


// On clicking the AI icon button dialog will pop-up

    button.addEventListener("click", function (event) {
      event.preventDefault()
      const dialog = document.createElement("div")
      dialog.className = "auto-fill-dialog"
      dialog.style.position = "fixed"
      dialog.style.bottom = "25%"
      dialog.style.left = "50%"
      dialog.style.transform = "translate(-56%)"
      dialog.style.zIndex = "1001"
      dialog.style.backgroundColor = "white"
      dialog.style.padding = "20px"
      dialog.style.borderRadius = "15px"
      dialog.style.width = "435px" // Set a fixed width or calculate dynamically
      dialog.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)"

      const output = document.createElement("div")
      output.style.marginBottom = "8px"
      output.style.backgroundColor = "#DBEAFE"
      output.style.borderRadius = "5px"
      output.style.maxHeight = "350px"
      output.style.overflowY = "auto"
      output.style.fontFamily = "math"
      output.style.fontSize = "17px"
      output.style.fontWeight = "400"
      output.style.lineHeight = "1.5"
      output.style.color = "#333"
      dialog.appendChild(output)



      const input = document.createElement("input")
      input.type = "text"
      input.placeholder = "Enter prompt for ChatGPT"
      input.style.width = "100%"
      input.style.borderRadius = "5px"
      input.style.border = "1px solid #ccc"
      input.style.marginBottom = "5px"
      dialog.appendChild(input)

//  Creating div (buttons ) to append or inject into Linkedin Website

      const divForButton = document.createElement("div")
      divForButton.style.display = "flex"
      divForButton.style.justifyContent = "flex-end"
      divForButton.style.marginTop = "10px"

      const submitButton = document.createElement("button")
      submitButton.textContent = "Generate"
      submitButton.style.marginLeft = "10px"
      submitButton.style.fontFamily = "system-ui"
      submitButton.style.fontSize = "17px"
      submitButton.style.fontWeight = "500"
      submitButton.style.lineHeight = "1.5"
      submitButton.style.padding = "8px 16px"
      submitButton.style.backgroundColor = "#3B82F6"
      submitButton.style.color = "white"
      submitButton.style.border = "none"
      submitButton.style.borderRadius = "8px"
      submitButton.style.cursor = "pointer"
      submitButton.style.transition = "background-color 0.3s ease"

      divForButton.appendChild(submitButton)


      const insertButton = document.createElement("button")
      insertButton.textContent = "Insert"
      insertButton.style.marginLeft = "10px"
      insertButton.style.fontFamily = "system-ui"
      insertButton.style.fontSize = "17px"
      insertButton.style.fontWeight = "500"
      insertButton.style.lineHeight = "1.5"
      insertButton.style.padding = "8px 16px"
      insertButton.style.backgroundColor = "white"
      insertButton.style.color = "#666D80"
      insertButton.style.border = "2px solid var(--Colors-Gray-500, #666D80)"
      insertButton.style.borderRadius = "8px"
      insertButton.style.cursor = "pointer"
      insertButton.style.transition = "background-color 0.3s ease"
      insertButton.style.display = "none" // Initially hide insert button
      divForButton.appendChild(insertButton)
      dialog.appendChild(divForButton)



    //  Generating the response from users prompt

      submitButton.addEventListener("click", async function () {
        const prompt = input.value.trim()
        if (prompt === "") {
          alert("Please enter a prompt.")
          return
        }
        try {
          const response = await getChatGPTResponse(prompt)
          output.textContent = response
          submitButton.textContent = "Regenerate"
          input.placeholder = ""
          input.value = ""
          insertButton.style.display = "inline-block"
        } catch (error) {
          output.textContent = error.message
        }
      })


//  Adding Text(Response generated ) into Linkedin Input Field 

      insertButton.addEventListener("click", function () {
        const linkedinInput = document.querySelector(
          ".msg-form__contenteditable"
        ) as HTMLElement
        if (linkedinInput) {
          const pTag = linkedinInput.querySelector("p")

          if (pTag) {
            const brTag = pTag.querySelector("br")
            if (brTag) {
              brTag.remove()
            }
            linkedinInput.removeAttribute("aria-label")
            const response = output.textContent
            linkedinInput.setAttribute("aria-label", ".")
            pTag.textContent = response
          }
          wrapperElement.removeChild(dialog)
          targetDiv.removeChild(button)
        }
      })



    //   Removing Dialog from Dom tree on outside click
      const clickOutsideHandler = function (event: MouseEvent) {
        if (!dialog.contains(event.target as Node) && event.target !== button) {
          wrapperElement.removeChild(dialog)
          targetDiv.removeChild(button)
          document.removeEventListener("click", clickOutsideHandler)
        }
      }

      document.addEventListener("click", clickOutsideHandler)
      wrapperElement.appendChild(dialog)
    })
  }
}

// STARTING POINT...
// Accessing the linkedin Input field on focus...   

document.addEventListener("click", function (event) {
  const targetDiv = (event.target as HTMLElement).closest(
    ".msg-form__contenteditable"
  ) as HTMLElement
  if (targetDiv && targetDiv.matches(".msg-form__contenteditable")) {
    addButton(targetDiv)
  } else {
    const autoFillButton = document.querySelector(
      ".auto-fill-button"
    ) as HTMLElement
    if (autoFillButton && !autoFillButton.contains(event.target as Node)) {
      autoFillButton.remove()
    }

    const autoFillDialog = document.querySelector(
      ".auto-fill-dialog"
    ) as HTMLElement
    if (autoFillDialog && !autoFillDialog.contains(event.target as Node)) {
      autoFillDialog.remove()
    }
  }
})
