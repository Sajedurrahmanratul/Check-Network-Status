const wrapper = document.querySelector(".wrapper"),
    toast = wrapper.querySelector(".toast"),
    wifiIcon = wrapper.querySelector(".icon"),
    title = wrapper.querySelector("span"),
    subTitle = wrapper.querySelector("p"),
    closeBtn = wrapper.querySelector(".close-icon");


//when Window Gonna Load
window.onload = () => {
    function ajax() {
        let xhr = new XMLHttpRequest();

        //requesting but http req to get a data from a api
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true)

        // When api gonna loaded
        xhr.onload = () => {

            //if Conncetion status is 200 or lower than 300 than we got the api req that means we are online. In terms we know 200-300 status code is got the data successfully
            if (xhr.status == 200 && xhr.status < 300) {

                online()

            }
            //user is not online.
            else {
                offline() //calling the function for offline
            }
        }
        //if we passed a wrong api url or if anyhow we dont get the api data its gonna show this error
        xhr.onerror = () => {

            offline() //calling the function for offline
        }

        xhr.send();
    }

    setInterval(() => {
        ajax();
    }, 100)

}

function offline() {
    toast.classList.add("offline");
    wifiIcon.innerHTML = `<i class="uil uil-wifi-slash"></i>`;
    title.innerText = "Opps!! Your Currently Offline";
    subTitle.innerText = "Please Connect Your Internet.";
    closeBtn.addEventListener("click", function () {
        wrapper.classList.add("hide");
    })

    setTimeout(() => {
        wrapper.classList.add("hide");
    }, 5000)
}

function online() {
    wifiIcon.innerHTML = `<i class="uil uil-wifi"></i>`;
    title.innerText = "You're online now";
    subTitle.innerText = "Hurray! Internet is connected.";
    closeBtn.addEventListener("click", function () {
        wrapper.classList.add("hide");
    })
    setTimeout(() => {
        wrapper.classList.add("hide");
    }, 5000)
}