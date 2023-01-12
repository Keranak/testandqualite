function testuser(url){
    return fetch(url).then((response)=>{
        return response.json();
    })
    //Récuperer les données de l'api, les 100 premiers id de la database et verifier que chaque id est supérieur à 100, et vérifier que les champs firstname et lastname ne doivent pas être vide
    .then((data)=>{
        expect(data).toHaveProperty("id");
        expect(data.id).toBeGreaterThan(100);
        expect(data.firstname).not.toBe("");
        expect(data.lastname).not.toBe("");
    });
    
}
function testemail(url){
    return fetch(url).then((response)=>{
        return response.json();
    })
    // Vérifier que l'email est dans un format valide grace au premier regex
    .then((data)=>{
        expect(data.email).toMatch(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    });

}

function testregex(url){
    return fetch(url).then((response)=>{
        return response.json();
    })
     // Vérifier que l'email est dans un format valide grace au second regex
    .then((data)=>{
        expect(data.email).toMatch(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    });
    
}
function registeredAt(url){
    return fetch(url).then((response)=>{
        return response.json();
    })
    // Vérifier que la date d'enregistrement est dans un format valide grace au regex et que la date est supérieur à 2020-01-01
    .then((data)=>{
        expect(data.registeredAt.split("T")[0]).toMatch(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/);
        expect(data.registeredAt.split("T")[0]).toBe>Date("2020-01-01");
        
    
    });
    
}


test("Status : Request fullfiled", () => {
    return testuser("https://api-test-jest.up.railway.app/test-user");
});

test("Status : Request fullfiled", () => {
    return testemail("https://api-test-jest.up.railway.app/test-user");
});
test("Status : Request fullfiled", () => {
    return testregex("https://api-test-jest.up.railway.app/test-user");
});

test("Status : Request fullfiled", () => {
    return registeredAt("https://api-test-jest.up.railway.app/test-user");
});
