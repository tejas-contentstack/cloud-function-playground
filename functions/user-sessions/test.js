
export default function handler(request, response) {
    console.log("Hello");
    console.log({obj: true});
    console.log(request.headers);
    console.log(undefined)
    console.log(null)
    return response.status(200).headers({"content-type": "application/json"}).end("hello");
  }
