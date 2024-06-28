//  using Chat-gpt-3.5 turbo api for generating response

export async function getChatGPTResponse(prompt: string) {
    var trial = true
    if (trial === true) {
      if(prompt==""){
        return "Please Enter the prompt!"
      }
      return `Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."${prompt}"`;
    } else {
    
      if(prompt==""){
        return "Please enter the prompt !"
      }

      const data = JSON.stringify({
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        system_prompt: "",
        temperature: 0.9,
        top_k: 5,
        top_p: 0.9,
        max_tokens: 256,
        web_access: false,
      });
  
      const response = await fetch(
        "https://chatgpt-42.p.rapidapi.com/conversationgpt4-2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-key": "b702b11444msheeab6882a7e4c3ap1e0598jsne0db1c99139b",
            "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
          },
          body: data,
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to fetch response from ChatGPT API");
      }
  
      const responseData = await response.json();
      return responseData.result;
    }
  }
  