
export default function handler(request, response) {
    console.log("Hello");
    console.log({obj: true});
    console.log(request.headers);
    console.log(undefined)
    console.log(null)
    res.status(200).send("Success");
  }
