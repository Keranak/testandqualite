const validToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

function testTk(url, token){
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            token: token,
    }})
    //Verifier que le status de la requête est 403
    .then((response)=>{
        //expect(response.status).toBe(403);
        expect(response.status).toBe(200);
    })

    //- Vérifiez que la liste renvoyée par la requête comporte bien 4 éléments au maximum. 
    .then((data)=>{
        expect(data.length).toBeLessThanOrEqual(4);
    })
    //Vérifiez que le dernier item de la liste soit toujours égal à 2008.
    .then((data)=>{
        expect(data[data.length-1]).toBe(2008);
    })


}


test("Status : Request fullfiled", () => {
    return testTk("https://api-test-jest.up.railway.app/test-post", validToken);
});