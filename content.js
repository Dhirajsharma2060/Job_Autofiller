// Fetch user details from storage
chrome.storage.local.get(["name", "email", "phone"], (data) => {
    const { name, email, phone } = data;
  
    // Try to fill common fields (customize selectors as needed)
    const nameField = document.querySelector("input[name*='name'], input[id*='name']");
    const emailField = document.querySelector("input[name*='email'], input[id*='email']");
    const phoneField = document.querySelector("input[name*='phone'], input[id*='phone']");
  
    if (nameField) nameField.value = name || "";
    if (emailField) emailField.value = email || "";
    if (phoneField) phoneField.value = phone || "";
  });
  