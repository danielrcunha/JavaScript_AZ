try {
    let x = y + 10;
    console.log(x);
} catch (erro) {
    if (erro instanceof TypeError) {
        console.log("TypeError");
    } else if (erro instanceof ReferenceError) {
        console.log("ReferenceError")
    }

}