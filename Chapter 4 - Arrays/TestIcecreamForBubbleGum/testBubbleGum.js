// Code to test which ice cream flavours have bubble gum in them.
const products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
const hasBubbleGum = [false, false, false, true];

for (let i = 0; i < hasBubbleGum.length; i += 1) {
    if(hasBubbleGum[i]){
        console.log("The flavour: " + products[i] + ", contains bubble gum");
    }
}
