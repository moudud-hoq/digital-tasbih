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
    if (subhanAllahInitialValue >= 33/*subhanAllahInitialValue === 33*/) {
        return alert('হে ঈমানদার ব্যাক্তি ৩৩ বার সুবহান-আল্লাহ পড়া হয়েছে এখন আলহামদুলিল্লাহ পড়ুন ৩৩ বার')
    }
    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})
//increament
subhanAllahDecrimentBtn.addEventListener('click', function () {
    if (subhanAllahInitialValue === 0) {
        return alert('শুন্য এর আগে আর কোনো সংখ্যা নেই')
    }
    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})

//Alhamdulillah Button
//increament
alhamdulillahIncrimentBtn.addEventListener('click', function () {
    if (alhamdulillahInitialValue >= 33) {
        return alert('হে ঈমানদার ব্যাক্তি ৩৩ বার আলহামদুলিল্লাহ পড়া হয়েছে এখন আল্লাহু-আকবার পড়ুন ৩৩ বার')
    }
    alhamdulillahInitialValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})
//decreament
alhamdulillahDecrimentBtn.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 0) {
        return alert('শুন্য এর আগে আর কোনো সংখ্যা নেই')
    }
    alhamdulillahInitialValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})


//Allahuakbar Button
//increament
allahAkberIncrimentBtn.addEventListener('click', function () {
    if (alhamdulillahInitialValue >= 33) {
        return alert('হে ঈমানদার ব্যাক্তি ৩৩ বার আলহামদুলিল্লাহ পড়া হয়েছে  এবং পরবর্তী নামাযে আবার সুবহান-আল্লাহ ৩৩ বার, আলহামদুলিল্লাহ ৩৩ বার, এবং আল্লাহু-আকবার ৩৩ বার করে ৯৯ বার পড়বেন')
    }
    allahAkberInitialValue += 1;
    allahAkberDisplay.innerText = allahAkberInitialValue;
})
//decreament
allahAkberDecrimentBtn.addEventListener('click', function () {
    if (allahAkberInitialValue === 0) {
        return alert('শুন্য এর আগে আর কোনো সংখ্যা নেই')
    }
    allahAkberInitialValue -= 1;
    allahAkberDisplay.innerText = allahAkberInitialValue;
})


//Reset Button
resetBtn.addEventListener('click', function () {
    //subhanAllahInitialValue reset by 0
    subhanAllahInitialValue = 0;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;

    //alhamdulillahInitialValue reset by 0
    alhamdulillahInitialValue = 0;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;

    //allahAkberInitialValue reset by 0
    allahAkberInitialValue = 0;
    allahAkberDisplay.innerText = allahAkberInitialValue


})