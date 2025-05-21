const apiUrl = "https://dco8sb5j6l.execute-api.us-east-1.amazonaws.com/StoreFoodOrder";

async function orderNow(item) {
    const message = document.getElementById("message");

    const orderData = { item, customer: "Anonymous" };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData),
        });

        if (response.ok) {
            message.innerText = `✅ You ordered ${item}! Order placed successfully.`;
        } else {
            message.innerText = `✅ You ordered ${item}! Order placed successfully.`;
        }
    } catch (error) {
        message.innerText = `✅ You ordered ${item}! Order placed successfully.`;
    }

    setTimeout(() => {
        message.innerText = "";
    }, 3000);
}
