function sendMail() {
    var params = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value, // Changed 'Last_name' to 'last_name' for consistency
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_v9655vq", "template_4v3hyzj", params)
    .then(function(response) {
        alert("Email sent successfully!");
    })
    .catch(function(error) {
        console.error("Failed to send email: ", error);
        alert("There was an error sending the email.");
    })
}




const tabs= document.querySelectorAll('.tab_btn');
const all_content= document.querySelectorAll('.content');


tabs.forEach((tab, index)=>{

        tab.addEventListener('click',(e)=>{
            tabs.forEach(tab=>{tab.classList.remove('active')});
            tab.classList.add('active');

            var line=document.querySelector('.line');
            line.style.width = e.target.offsetWidth + "px";
            line.style.left = e.target.offsetLeft + "px";

            all_content.forEach(content=>{content.classList.remove('active')});
            all_content[index].classList.add('active');
        })

})
