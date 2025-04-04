async function sendData(){
    const loginInput = document.querySelector("#login")
    const contentInput = document.querySelector("#content")

    const data = {
        login: loginInput.value,
        content: contentInput.value
    }

    const res = await fetch("/feedback", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const resData = await res.json()
    console.log(resData)
}

const btn = document.querySelector("input[type='submit']")
btn.addEventListener("click", (event) => {
    event.preventDefault()
    sendData()
})