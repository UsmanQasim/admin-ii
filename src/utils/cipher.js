export const encryptMessage = (key) => window.btoa(key);
export const decryptMessage = (message) => window.atob(message);