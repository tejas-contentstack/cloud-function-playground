// functions/hello.js

export default function handler(request, response) {
    console.log("Hello");
    console.log({obj: true});
    console.log(request.headers);
    console.log(undefined)
    console.log(null)
    return response.status(200).json({message: "testing 123"});
  }
