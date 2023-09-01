//your JS code here. If required.
// Function that returns a Promise
      function delayedMessage() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("Hello, world!");
          }, 1000); // Resolve the Promise after 1 second
        });
      }

      // Function to update the HTML element with the resolved value
      function updateOutputText() {
        delayedMessage()
          .then((message) => {
            const outputElement = document.getElementById("output");
            outputElement.textContent = message;
          })
          .catch((error) => {
            console.error("An error occurred:", error);
          });
      }

      // Call the function to update the output text
      updateOutputText();
