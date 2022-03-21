function getSecret(file, secretPassword) {
    file.opened += 1;
    if (secretPassword == file.password) {
        return file.contents;
    }
    return "Invalid password! No secret file for you!";
}

function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}

let superSecretFile = {
    level: "Classified",
    opened: 0,
    password: 2,
    contents: "Diego lives in Utrecht"
}

var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Diego likes Utrecht");
secret = getSecret(superSecretFile, 2);
console.log(secret);