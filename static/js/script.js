function getSearch() {
    const searchInput = document.querySelector("#query")
    const params = new URLSearchParams({query: searchInput.value}).toString()
    window.location.href = "?" + params // Сохраняет историю браузера
    // window.location.replace("?" + params) // Заменяет историю
}

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

const btn = document.querySelector("#feedbackSubmit")
btn.addEventListener("click", (event) => {
    event.preventDefault()
    sendData()
})

const btnSearch = document.querySelector("#searchSubmit")
btnSearch.addEventListener("click", (event) => {
    event.preventDefault()
    getSearch()
})