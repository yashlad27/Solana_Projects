const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require("@solana/web3.js")

const Wallet = new Keypair()

const publicKey = new PublicKey(Wallet._keypair.publicKey)
const secretKey = Wallet._keypair.secretKey

// console.log(publicKey)
// console.log(secretKey);

// Web3,js allows us to view our balance using the getbalance clause in Connection method
// devnet -> replica of mainnet of solana 
// cluster api gives the url of devnet network

const getWalletBalance = async() => {
    try{
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
        const walletBalance = await connection.getBalance(publicKey);

        console.log(`Wallet Balance is ${walletBalance}`)
    }catch(err) {
        console.error(err)
    }
}

const main = async() => {
    await getWalletBalance()
}

main()