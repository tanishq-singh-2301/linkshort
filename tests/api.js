fetch("http://localhost:8080/api/insertone", {
    method: "POST",
    body: JSON.stringify({ "_id": 6, "name": "tanishq____" }),
    headers: {
        "content-type": "application/json"
    }
})