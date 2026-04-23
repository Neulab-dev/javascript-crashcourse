// Step 1: Wait for headers
const response = await fetch("https://api.example.com/user");

// Step 2: Parse the body
const data = await response.json();

// Alternatively, you can read the body as a stream
const val = "";
response.body
  .getReader()
  .read()
  .then(({ done, value }) => {
    if (done) {
      console.log("Stream complete");
      return;
    }

    const decodedValue = new TextDecoder().decode(value);
    val += decodedValue;
    console.log("Received chunk:", decodedValue);
  });
