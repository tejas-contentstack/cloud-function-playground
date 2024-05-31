// functions/hello.js

export default function handler(request, response) {
    console.log("Hello");
    console.log({obj: true});
    console.debug({obj: true});
    console.error({obj: true});
    console.warn({obj: true});
    console.log(req);
    console.log(req.headers);
    console.log(req.body)
    return response.status(200).json({message: "testing 123"});
  }
