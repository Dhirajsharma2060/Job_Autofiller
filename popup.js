document.getElementById("user-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    chrome.storage.local.set({ name, email, phone }, () => {
      document.getElementById("status").textContent = "Data saved successfully!";
      setTimeout(() => {
        document.getElementById("status").textContent = "";
      }, 3000);
    });
  });
  