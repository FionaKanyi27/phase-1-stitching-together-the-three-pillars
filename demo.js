// Step 1: DOM Manipulation - Selecting all heart icons
let articleHearts = document.querySelectorAll(".like-button");

// Verify in the console that articleHearts contains 5 elements
console.log(articleHearts); // Should show NodeList with 5 elements

// Step 2: Mock server-side behavior
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let isRandomFailure = Math.random() < 0.2;
            if (isRandomFailure) {
                reject("Random server error. Try again.");
            } else {
                resolve("Server notified of action!");
            }
        }, 300);
    });
}

// Step 3: Event listener for each heart button
articleHearts.forEach(function(heart) {
    heart.addEventListener("click", function() {
        mimicServerCall()
        .then(function(response) {
            // Toggle the "liked" state on success
            heart.classList.toggle("liked");
            heart.textContent = heart.classList.contains("liked") ? "♥" : "♡";
            console.log(response);
        })
        .catch(function(error) {
            alert("Something went wrong: " + error);
        });
    });
});
