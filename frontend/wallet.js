async function connectWallet(){

if(window.solana){

const response = await window.solana.connect()

document.getElementById("wallet")
.innerHTML =
response.publicKey.toString()

}else{

alert("Phantom Wallet Required")

}

}
