var status = "online";

setTimeout(() => {

    const status = "offline"

    const data = {
        status: "not responding",
        getStatus() {
            return this.status;
        }
    }

    console.log(data.getStatus())
    console.log(data.getStatus.call(this))

}, 0);