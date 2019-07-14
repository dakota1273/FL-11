function formatTime (number) {
    const days = Math.floor(number / 1440);
    number -= days*1440;
    const hours = Math.floor(number / 60);
    number -= hours*60;
    const minutes = Math.floor(number);

    console.log(days + ' day(s)' + hours + ' hour(s)' + minutes + ' minute(s)')
}

formatTime(45);