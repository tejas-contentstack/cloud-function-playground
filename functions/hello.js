// functions/hello.js

export default function handler(request, response) {
    return response.status(200).json({message: "testing"});
  }