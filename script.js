// addEventListener("DOMContentLoaded", (event) => {
//     const countDownEl = document.getElementById("countdown");

//     const targetDate = new Date("2024-12-07 12:00:00").getTime();

//     // Update the countdown every second
//     const interval = setInterval(() => {
//         const now = new Date().getTime();
//         const timeRemaining = targetDate - now;

//         if (timeRemaining <= 0) {
//             clearInterval(interval); // Stop the countdown when it reaches 0
//             document.getElementById("countdown").innerHTML = "Countdown expired!";
//         } else {
//             const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//             const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//             document.getElementById("countdown").innerHTML = `Quedan ${days} días, ${hours} horas ${minutes} minutos y ${seconds} segundos.`;
//         }
//     }, 1000); // Update the countdown every 1000ms (1 second)

// });