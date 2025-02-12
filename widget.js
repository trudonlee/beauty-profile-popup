// Import Firebase Auth functions from the Firebase module
import { 
  getAuth, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the Firebase Auth service
  const auth = getAuth();

  // --- Login Modal Elements ---
  const loginModal = document.getElementById("loginModal");
  const loginForm = document.getElementById("loginForm");
  const closeLoginModal = document.getElementById("closeLoginModal");

  // Monitor authentication state: show login modal if no user is logged in
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      loginModal.style.display = "block";
    } else {
      loginModal.style.display = "none";
      console.log("Logged in as:", user.email);
    }
  });

  // Handle login form submission
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      // Attempt to sign in the user
      await signInWithEmailAndPassword(auth, email, password);
      loginModal.style.display = "none";
    } catch (error) {
      // If sign-in fails, try creating a new account
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        loginModal.style.display = "none";
      } catch (error2) {
        alert("Error: " + error2.message);
      }
    }
  });

  // Allow manual closing of the login modal
  closeLoginModal.addEventListener("click", () => {
    loginModal.style.display = "none";
  });

  // --- Beauty Profile Modal Elements ---
  const modal = document.getElementById("beautyProfileModal");
  const openBtn = document.getElementById("openProfileBtn");
  const closeBtn = document.getElementById("closeModal");

  // Open the Beauty Profile modal when the button is clicked
  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Close the Beauty Profile modal when the "X" is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Also close modals if clicking outside of them
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
    if (event.target === loginModal) {
      loginModal.style.display = "none";
    }
  });

  // --- Handle the Beauty Profile Form Submission ---
  const profileForm = document.getElementById("profileForm");
  profileForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Stop the page from refreshing

    // Convert the form data into a plain object
    const formData = new FormData(profileForm);
    let formObject = {};
    for (let [key, value] of formData.entries()) {
      formObject[key] = value;
    }
    
    // Add logged-in user info if available
    const user = auth.currentUser;
    if (user) {
      formObject.userId = user.uid;
      formObject.email = user.email;
    }
    
    // Send the data to the Google Apps Script web app
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwUz5jbUKLkEUN9Ge_enyKdPdW1V_T4C3QHwtJxkxsqxSyHuntsgZuA05x3eHotGz96Mw/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formObject)
      });
      const result = await response.json();
      if (result.status === "success") {
        alert("Profile saved successfully!");
      } else {
        alert("Error saving profile: " + result.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form. See console for details.");
    }
    
    // Close the profile modal after submission
    modal.style.display = "none";
  });
});
