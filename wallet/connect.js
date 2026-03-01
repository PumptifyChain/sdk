async function walletConnect(){

if(!window.solana){

return null

}

return await window.solana.connect()

}
