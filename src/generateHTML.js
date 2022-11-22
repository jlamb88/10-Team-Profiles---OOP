


makeManager(data) = {
    mgrCard = $("<card>", {
        class: "card m-2",
        style: "height: 22rem; width: 18rem",
        html:
            `<div class="card-header">${data.name}</div>
            <div class="card-body">
            <p><i class="fa-solid fa-clipboard-list"></i>Manager</p>
            <p>Employee ID: ${data.id}</p>
            <p>Email: <a href='mailTo:${data.email}'>${data.email}</a></p>
            <p>Office: ${data.office}</p>
            </div>
            </div>`
    })
    $('main').append(mgrCard)
}