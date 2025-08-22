function calculateAge() {
    const dobInput = document.getElementById('dob').value;

    if (!dobInput) {
        document.getElementById('result').textContent = "Please enter your date of birth.";
        return;
    }

    const birthDate = new Date(dobInput);
    const currentDate = new Date();

    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();

    // Adjust for negative days or months
    if (ageDays < 0) {
        ageMonths--;
        const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        ageDays += lastMonthDate.getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('result').textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}