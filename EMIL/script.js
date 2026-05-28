let userPlan = 'free';

function showPaymentForm() {
    let confirmStart = confirm("Confirm Premium Subscription?\nPrice: 5€ / month");

    if (confirmStart) {
        document.getElementById('paymentForm').style.display = 'block';
    }
}

function submitPayment() {
    let cardNumber = document.getElementById('cardNumber').value;
    let expiry = document.getElementById('expiry').value;
    let cvv = document.getElementById('cvv').value;
    let cardName = document.getElementById('cardName').value;

    if (cardNumber === '' || expiry === '' || cvv === '' || cardName === '') {
        alert("All fields are required! Please fill them out.");
        return;
    }

    let finalConfirm = confirm("All data is filled.\n\nDo you confirm the payment of 5€?");

    if (finalConfirm) {
        userPlan = 'premium';
        alert("✅ Payment successful! You are now subscribed to the Premium plan.\nYou have early access to the news.");
        
        document.getElementById('paymentForm').style.display = 'none';
        unlockContent();
    }
}

function unlockContent() {
    let paywall = document.getElementById('paywall');
    if (paywall) {
        paywall.style.display = 'none';
    }

    let badge = document.getElementById('early-access-badge');
    if (badge) {
        badge.style.display = 'inline';
    }
}

function closePaymentForm() {
    document.getElementById('paymentForm').style.display = 'none';
}