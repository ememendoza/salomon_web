import app from "./app";

const main = () => {
    app.listen(app.get('port'), () => {
        console.log(`Listener on port ${app.get('port')}`)
    })
}

main();