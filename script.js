function makeid(l) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for(let i = 0; i < n; i++){
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex]; // ✅ append karna hai
    }
    return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
