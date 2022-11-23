

function makeManager(data) {
    manager = (data.map((data) => {
        if (data.getRole() === "Manager") {
            return `<div class="card m-2" style = "height: 22rem; width: 20rem">
            <div class="card-header"><h3>${data.name}</h3>
            <h5><i class="fa-solid fa-coffee" id="icon"></i>Manager</h5>
            </div>
            <div class="card-body my-4 mx-2">
                <p>Employee ID: ${data.id}</p>
                <p>Email: <a href='mailTo:${data.email}'>${data.email}</a></p>
                <p>Office: ${data.office}</p>
            </div>
            </div>`
        }
    })).join("")
}

function makeEngineers(data) {
    engineers = (data.map((data) => {
        if (data.getRole() === "Engineer") {
            return `<div class = "card m-2" style = "height: 22rem; width: 18rem">
            <div class="card-header"><h3>${data.name}</h3>
            <h5><i class="fa-solid fa-keyboard" id="icon"></i>Engineer</h5>
            </div>
            <div class="card-body my-4 mx-2">
                <p>Employee ID: ${data.id}</p>
                <p>Email: <a href='mailTo:${data.email}'>${data.email}</a></p>
                <p>Github: <a href='http://github.com/${data.github}'> ${data.github}</a></p>
            </div>
            </div>`
        }
    })).join("")
}

function makeInterns(data) {
    interns = (data.map((data) => {
        if (data.getRole() === "Intern") {
            return `<div class = "card m-2" style = "height: 20rem; width: 16rem">
            <div class="card-header">
            <h3>${data.name}</h3>
            <h5><i class="fa-solid fa-user-graduate" id="icon"></i>Intern</h5>
            </div>
            <div class="card-body mx-2 my-4">
                <li>Employee ID: ${data.id}</li>
                <li>Email: <a href='mailTo:${data.email}'>${data.email}</a></li>
                <li>School: ${data.school}</li>
            </div>
            </div>`
        }
    })).join("")
}

function generateHTML(data) {
    makeManager(data)
    makeEngineers(data)
    makeInterns(data)
    return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Department Organization Chart</title>
                <link rel="stylesheet" href="./css/reset.css">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
                    <script src="https://kit.fontawesome.com/bbf69f354a.js" crossorigin="anonymous"></script>
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap">
                                <link rel="stylesheet" href="./css/style.css">
                                </head>

                                <body>
                                    <header class="header">
                                        <H1>Team Organization Chart</H1>
                                    </header>

                                    <main class="container-fluid">
                                        <div class="row">
                                            ${manager}
                                            ${engineers}
                                            ${interns}
                                        </div>
                                    </main>

                                    <footer class="footer">
                                        <h6>&copy; Full Stack Designs 2022</h>
                                    </footer>
                                </body>
                                <script src="../src/generateHTML.js"></script>
                                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                                <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script> -->

                            </html>`
}

module.exports = generateHTML