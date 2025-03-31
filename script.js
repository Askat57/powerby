// Жаңа ақпаратты қосу үшін жай ғана мәліметті көрсететін скрипт
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Форманы жіберуге жол бермейміз

        // Пайдаланушы енгізген деректерді алу
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        // Жауаптың дұрыс толтырылғандығын тексеру
        if (name === "" || email === "" || message === "") {
            alert("Барлық өрістерді толтырыңыз!");
        } else {
            // Егер бәрі дұрыс болса, хабарды шығарамыз
            alert(`Хабарлама жіберілді:\nАты: ${name}\nЭлектрондық пошта: ${email}\nХабар: ${message}`);
            form.reset(); // Форманы тазалау
        }
    });
});
