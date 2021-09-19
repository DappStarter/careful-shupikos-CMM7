require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth soap attitude idea ensure swift trap'; 
let testAccounts = [
"0xf21b4d2955a998ba11e3ce0709c59fb7fca918e09cd36dfe31ded49fef0ad10d",
"0xb88ce26000df377282c6f8c4d2cbeaef05708bd311797d6e7552d53435581afb",
"0x43a4f226e8fb03403f4f080c679a21dd14519774d4036e70931c7a32b375c26a",
"0x68b6814cb599a8720e08206898500151d4ecbea17905fd0080ca59d6fcb927ec",
"0xa4e07bed3d01c2d772e40cddaa21528b162eea801f130a710ff84f3a6e044f01",
"0x53e50661544681c137771cb34652b869aeb8072df53a1730b8fe001dc10018b2",
"0x9f531a90c82d6e837f0427731f01aa3305cd700fdce5eb9f89e3c6c41cabd3fe",
"0x1d7e88c4398cdb5423b015f1a898421bb16edc4a1f70120508ffc06837741943",
"0x763dd141a9d0f4352374e3f0330b64ed773c4fa19978303590b9384e16921631",
"0x7ef15ef5b8650a9b1e46933b2137ca77fdb8130669cf145496582cd87c55087a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


