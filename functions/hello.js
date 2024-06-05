// functions/hello.js

export default function handler(request, response) {
    console.log("Hello");
    console.log({obj: true});
    console.log(request?.headers);
    console.log(request?.body)
    return response.status(200).json({message: "testing 123"});
  }
