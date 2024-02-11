const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn');


const allahAkberDisplay = document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn = document.getElementById('allahAkberIncrimentBtn');
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn');

const resetBtn = document.getElementById('resetBtn');

//Now initializing value
let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahAkberInitialValue = 0;

//execution by eventListener
//এই ফাংশনের মধ্যে আমরা যা এক্সিকিউট করতে চাইবো ইউজার বাটনে ক্লিক করার মাধ্যমে তাই সামনে চলে আসবে। তার মানে এই ফাংশনেই কন্ডিশন, লুপ, সহ যা যা আছে চলবে।
subhanAllahIncrimentBtn.addEventListener('click', function () {
    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})