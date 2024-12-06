
export default function handler(request, response) {
    console.log("Hello");
    console.log({obj: true});
    console.log(request.headers);
    console.log(undefined)
    console.log(null)
    return     response.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify({"body": "hello"}))

  }
