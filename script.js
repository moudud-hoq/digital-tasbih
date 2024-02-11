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

//SubhanAllah Button
//increament
subhanAllahIncrimentBtn.addEventListener('click', function () {
    if (subhanAllahInitialValue >= 33) {
        return alert('হে ইমানদার ব্যাক্তি আপাতত ৩৩ বার সুবহান-আল্লাহ পড়েন, প্রত্যেক নামাযের পরে')
    }
    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})
//increament
subhanAllahDecrimentBtn.addEventListener('click', function () {
    if (subhanAllahInitialValue === 0) {
        return alert('অনুগ্রহ করে increament বাটন এ টাচ করে করে সুবহান-আল্লাহ ৩৩ বার করে পড়ুন প্রত্যেক নামাযের পরে')
    }
    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})

//Alhamdulillah Button
//increament
alhamdulillahIncrimentBtn.addEventListener('click', function () {
    if (alhamdulillahInitialValue >= 33) {
        return alert('হে ইমানদার ব্যাক্তি আপাতত ৩৩ বার  আলহামদুলিল্লাহ পড়েন, প্রত্যেক নামাযের পরে')
    }
    alhamdulillahInitialValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})
//decreament
alhamdulillahDecrimentBtn.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 0) {
        return alert('অনুগ্রহ করে increament বাটন এ টাচ করে করে আলহামদুলিল্লাহ ৩৩ বার করে পড়ুন প্রত্যেক নামাযের পরে')
    }
    alhamdulillahInitialValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})


//Allahuakbar Button
//increament
allahAkberIncrimentBtn.addEventListener('click', function () {
    if (alhamdulillahInitialValue >= 33) {
        return alert('হে ইমানদার ব্যাক্তি আপাতত ৩৩ বার আল্লাহু-আকবার পড়েন, প্রত্যেক নামাযের পরে')
    }
    allahAkberInitialValue += 1;
    allahAkberDisplay.innerText = allahAkberInitialValue;
})
//decreament
allahAkberDecrimentBtn.addEventListener('click', function () {
    if (allahAkberInitialValue === 0) {
        return alert('অনুগ্রহ করে increament বাটন এ টাচ করে করে আল্লাহু-আকবার ৩৩ বার করে পড়ুন প্রত্যেক নামাযের পরে')
    }
    allahAkberInitialValue -= 1;
    allahAkberDisplay.innerText = allahAkberInitialValue;
})