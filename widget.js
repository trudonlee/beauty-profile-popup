// Import Firebase Auth functions from the Firebase module
import { 
  getAuth, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Import Firestore functions
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Import Storage functions
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-storage.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Firebase services
  const auth = getAuth();
  const db = getFirestore();
  const storage = getStorage();

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
    e.preventDefault(); // Prevent page refresh

    // Read text fields from the form
    const formData = new FormData(profileForm);
    let profileData = {
      fullName: formData.get("fullName") || "",
      beautyHistory: formData.get("beautyHistory") || "",
      allergies: formData.get("allergies") || ""
    };

    // Get the logged-in user; if not logged in, alert and abort
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in first.");
      return;
    }
    profileData.userId = user.uid;
    profileData.email = user.email;

    try {
      // --- Upload Profile Photo ---
      const profilePhotoFile = document.getElementById("profilePhoto").files[0];
      if (profilePhotoFile) {
        const profilePhotoRef = ref(storage, `users/${user.uid}/profilePhoto/${profilePhotoFile.name}`);
        const snapshot = await uploadBytes(profilePhotoRef, profilePhotoFile);
        const profilePhotoURL = await getDownloadURL(snapshot.ref);
        profileData.profilePhotoURL = profilePhotoURL;
      } else {
        profileData.profilePhotoURL = "";
      }

      // --- Upload Inspiration Photos (Multiple) ---
      const inspirationPhotosInput = document.getElementById("inspirationPhotos");
      const inspirationPhotosFiles = inspirationPhotosInput.files;
      let inspirationPhotoURLs = [];
      for (let i = 0; i < inspirationPhotosFiles.length; i++) {
        const file = inspirationPhotosFiles[i];
        const fileRef = ref(storage, `users/${user.uid}/inspirationPhotos/${file.name}`);
        const snap = await uploadBytes(fileRef, file);
        const url = await getDownloadURL(snap.ref);
        inspirationPhotoURLs.push(url);
      }
      profileData.inspirationPhotoURLs = inspirationPhotoURLs;

      // --- Save Profile Data to Firestore ---
      // Save in the "users" collection under a document with the user's UID.
      await setDoc(doc(db, "users", user.uid), profileData);

      alert("Profile saved successfully!");
    } catch (err) {
      console.error(err);
      alert("Error saving profile. See console for details.");
    }

    // Close the profile modal after submission
    modal.style.display = "none";
  });
});

