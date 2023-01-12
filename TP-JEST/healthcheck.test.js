function testHealtcheck(url) {
	return fetch(url).then((response) => {
        //Ajouter un condition qui  verifie si le status renvoyé par la requêtes ne soit jamais 400 ou plus
        if(response.status >= 400){
            throw new Error("Bad response from server");
        }
		expect(response.status).toBe(200);
	});
}
test("Status : Request fullfiled", () => {
	return testHealtcheck("https://api-test-jest.up.railway.app/healthcheck");
});