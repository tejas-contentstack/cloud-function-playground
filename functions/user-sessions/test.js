
export default function handler(request, response) {
    return response
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify({ headers: { "content-type": "application/json" }, body: "hello" }));

  }
