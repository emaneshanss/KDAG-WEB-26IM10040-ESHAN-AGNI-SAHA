const regForm = document.getElementById('kdagRegForm');
const nameInput = document.getElementById('studentName');
const rollInput = document.getElementById('rollNumber');
const emailInput = document.getElementById('studentEmail');
const deptInput = document.getElementById('deptSelect');
const statusBox = document.getElementById('statusPopup');

regForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameVal = nameInput.value.trim();
    const rollVal = rollInput.value.trim();
    const emailVal = emailInput.value.trim();
    const deptVal = deptInput.value;

    if (!nameVal || !rollVal || !emailVal || !deptVal) {
        alert('Please fill in all required fields.');
        return;
    }

    if (rollVal.length !== 9) {
        alert('Roll Number must be exactly 9 characters long (e.g., 26XX10001).');
        return;
    }

    regForm.style.display = 'none';
    statusBox.classList.remove('hidden');
});