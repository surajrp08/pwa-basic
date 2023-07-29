if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.info("Service Worker Registred!");
        console.log(registration);
    }).catch(error => {
        console.error("Service Worker Registration Failed!");
        console.error(error);
    });
}

window.addEventListener("load", (event) => {
    console.log(navigator);
    const statusDisplay = document.querySelector("p");
    statusDisplay.textContent = navigator.onLine ? "Online" : "Offline";
});