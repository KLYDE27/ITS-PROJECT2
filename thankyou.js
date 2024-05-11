// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Fetch existing comments when the page loads
    fetchComments();
    
    // Submit comment form
    document.getElementById("comment-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const comment = document.getElementById("comment").value;
        
        // Make AJAX request to submit comment
        const formData = { name, email, comment };
        submitComment(formData);
    });
});

// Function to fetch existing comments from the server
function fetchComments() {
    // Make AJAX request to fetch comments
    // Example:
    // fetch("/api/comments")
    //     .then(response => response.json())
    //     .then(data => {
    //         // Display comments in the comments container
    //         const commentsContainer = document.getElementById("comments-container");
    //         data.forEach(comment => {
    //             const commentElement = document.createElement("div");
    //             commentElement.classList.add("comment");
    //             commentElement.innerHTML = `
    //                 <p><strong>${comment.name}</strong></p>
    //                 <p>${comment.comment}</p>
    //                 <p class="timestamp">${comment.timestamp}</p>
    //             `;
    //             commentsContainer.appendChild(commentElement);
    //         });
    //     })
    //     .catch(error => console.error("Error fetching comments:", error));
}

// Function to submit a new comment
function submitComment(formData) {
    // Make AJAX request to submit comment
    // Example:
    // fetch("/api/comments", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(formData)
    // })
    // .then(response => {
    //     if (response.ok) {
    //         // Clear form fields
    //         document.getElementById("name").value = "";
    //         document.getElementById("email").value = "";
    //         document.getElementById("comment").value = "";
            
    //         // Fetch and display updated comments
    //         fetchComments();
    //     } else {
    //         console.error("Error submitting comment:", response.status);
    //     }
    // })
    // .catch(error => console.error("Error submitting comment:", error));
}
