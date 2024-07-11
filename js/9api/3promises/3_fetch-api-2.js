//extra objects are also added in fetct within {}
    // Method: Specify the HTTP method (e.g., GET, POST, PUT, DELETE).
    // Mode: Set the CORS mode (e.g., cors, no-cors, same-origin).
    // Cache: Control caching behavior.
    // Credentials: Include credentials (cookies, authentication) in the request.
    // Headers: Customize request headers (e.g., content type).
    // Body: Attach data to the request body (for POST requests).

//fetch do task in 2 part:-
    //1)memory reservation(on fulfilled)
    //2)send network request

//fetch sent in call stack via "micro task queue(priority queue)"=>run before other set-timeout tasks(call back functions)
//call back functions sent in call stack via "task queue"




const url="https://api.github.com/users/mukeshkumar99422";

async function fetchApi(){
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data=await response.json();
    console.log(data);
}
fetchApi();