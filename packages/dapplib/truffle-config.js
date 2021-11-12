require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remind concert grace case obscure van'; 
let testAccounts = [
"0x3cfb736cb41e48be2c07f124e4af662ab8532a592444a74212d80bcb371c27d6",
"0x56368d494e8cef6cfe99765d0dd76f6f92aa5a5b9834de9534314bada9b1ab25",
"0x29faf922a2e6208341b5471ec63c16fc4ef5afd6841d95dfbff08f1249c5e31c",
"0x5e321d5916cc5bc4f2218791feecb32db84a644deed0217edc51f1ee5c802f45",
"0x4342a2c55e691a40f7d27c13ddb5a76100ed01d2e62b0a07c1081787fa057770",
"0xf99bdf76a9852a4a72795c4f03d88c57974bcda6e1ed2b576bbd2645fc60f7f2",
"0x63fe792fd8c0cf6cfdcbf64b49f1c237a9495928fd561af70bf503400fb91e66",
"0x270d940d039f590623ed4d393946d795fbb03d66ea5bb147942637e3c013164a",
"0xa5ee1ea35ee58ea8192ab37046a4e4c0322f6c10c839c8ab829c6e4ea8502b52",
"0xfb44f127d53f450506fb560f14344931b5c5c24ef6a615a751c8208ffcfd9669"
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


