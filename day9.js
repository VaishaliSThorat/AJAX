function getSingleUserInfo(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data
        })
}

async function getInfo() {
    let a = await getSingleUserInfo(1)
    let b = await getSingleUserInfo(2)
    let c = await getSingleUserInfo(3)
    let d = await getSingleUserInfo(4)
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}
getInfo()

async function GetInfo() {
    let a = await Promise.all([
        getSingleUserInfo(1),
        getSingleUserInfo(2),
        getSingleUserInfo(3),
        getSingleUserInfo(4)
    ])
    console.log(a)

}
GetInfo()


// Promise.all()
// Promise.allSettled()
// Promise.any()
// Promise.race()

async function allMethod() {
    let aa = await Promise.all([
        Promise.resolve("hello"),
        Promise.resolve("bye"),
        Promise.reject("rejected"),
        Promise.resolve("GA")

    ])
    console.log(aa)
}

async function allSet() {
    let s = await Promise.allSettled([
        Promise.resolve("hello"),
        Promise.resolve("bye"),
        Promise.reject("Try another time"),
        Promise.resolve("GA")
    ])
    console.log(s)
}
