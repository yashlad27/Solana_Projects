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

console.log(publicKey)
console.log(secretKey);