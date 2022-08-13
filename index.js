const { hash } = window.location;

const message = atob(hash.replace("#", ""));

if(message) {
    document.querySelector("#message-card").classList.add("hide");
    document.querySelector("#message-show").classList.remove("hide");
    document.querySelector("h1").innerHTML = `${message}`;
}
 
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.querySelector("#message-input");
    const encrypted = btoa(input.value);
    
    const linkInput = document.querySelector("#link-input");
    linkInput.value = `${window.location}#${encrypted}`;

    document.querySelector("#message-card").classList.add("hide");
    document.querySelector("#link-card").classList.remove("hide");
    
    linkInput.select();
})

document.querySelector("form").addEventListener("keydown", e => {
    if(e.code === "Enter") e.preventDefault();
})