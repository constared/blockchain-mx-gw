const Web3 = require('web3');
// const Tx = require('ethereumjs-tx').Transaction;
// const Common = require('@ethereumjs/common')
module.exports = {
    getInstance: (httpProvider, netId) => {
        const web3 = new Web3(new Web3.providers.HttpProvider(httpProvider));
        const sendSignedTransaction = async (txRaw) => {
            return await web3.eth.sendSignedTransaction(txRaw)
        }
        const infra = {
                    networks: {
  "5777": {
    "events": {},
    "links": {},
    "address": "0x061f0F2D87712767BCcdE751B7569739E58Fa51A",
    "transactionHash": "0x7b1748b65ce6ecaef21c40acea78d2bb9620a081d82913da0629f3b7505d1cc9"
  },
  "80001": {
    "events": {},
    "links": {},
    "address": "0xecB9950b915C6973aAf594ED96570FeebC3e0A94",
    "transactionHash": "0x441b09cbb39f6811edfba6bbd54b5e72364362f929abee1578f618e796c7f9dc"
  }
},
                    Applications: () => {
                        const abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "in_registry",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "string[]",
        "name": "in_arr",
        "type": "string[]"
      },
      {
        "internalType": "string",
        "name": "value",
        "type": "string"
      }
    ],
    "name": "ifNotExists",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "pure",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "supplier_",
        "type": "address"
      }
    ],
    "name": "addSupplier",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "supplier_",
        "type": "address"
      }
    ],
    "name": "deleteSupplier",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "changeOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newStorekeeper",
        "type": "address"
      }
    ],
    "name": "changeStorekeeper",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "queryApplications",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "appId",
        "type": "string"
      }
    ],
    "name": "queryApplication",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "appId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "in_symbol",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "in_add_amount",
        "type": "uint256"
      }
    ],
    "name": "sendApplicaiton",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "appId",
        "type": "string"
      }
    ],
    "name": "acceptApplicaiton",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "appId",
        "type": "string"
      }
    ],
    "name": "rejectApplicaiton",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "appId",
        "type": "string"
      }
    ],
    "name": "revokeApplicaiton",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "queryRedeemApplications",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "appId",
        "type": "string"
      }
    ],
    "name": "queryRedeemApplication",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "appId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "in_symbol",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "in_add_amount",
        "type": "uint256"
      }
    ],
    "name": "sendRedeemApplicaiton",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "appId",
        "type": "string"
      }
    ],
    "name": "acceptRedeemApplicaiton",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "appId",
        "type": "string"
      }
    ],
    "name": "rejectRedeemApplicaiton",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "appId",
        "type": "string"
      }
    ],
    "name": "revokeRedeemApplicaiton",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
                        const addresses = {
                                "5777": "0x061f0F2D87712767BCcdE751B7569739E58Fa51A",
                                "80001": "0xecB9950b915C6973aAf594ED96570FeebC3e0A94",
                        }
                        const contract = new web3.eth.Contract(abi, addresses[netId]);
                        return {
                                // 
                                // 
                                // 
                                        addSupplier: async (supplier_,sender) => {
                                            const method = contract.methods.addSupplier(supplier_)
                                            const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                            const estimateGas = await method.estimateGas({from: sender})
                                            const gasPrice = await web3.eth.getGasPrice()
                                            console.log("NetworkId: " + await web3.eth.net.getId())
                                            console.log("ChainId: " + await web3.eth.getChainId())
                                            return {
                                                estimateGas,
                                                gasPrice,
                                                txParams: {
                                                    gas: estimateGas,
                                                    to: addresses[netId],
                                                    data: method.encodeABI(),
                                                    from: sender,
                                                    nonce: '0x' + nonce,
                                                },
                                            }
                                        },
                                // 
                                        deleteSupplier: async (supplier_,sender) => {
                                            const method = contract.methods.deleteSupplier(supplier_)
                                            const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                            const estimateGas = await method.estimateGas({from: sender})
                                            const gasPrice = await web3.eth.getGasPrice()
                                            console.log("NetworkId: " + await web3.eth.net.getId())
                                            console.log("ChainId: " + await web3.eth.getChainId())
                                            return {
                                                estimateGas,
                                                gasPrice,
                                                txParams: {
                                                    gas: estimateGas,
                                                    to: addresses[netId],
                                                    data: method.encodeABI(),
                                                    from: sender,
                                                    nonce: '0x' + nonce,
                                                },
                                            }
                                        },
                                // 
                                        changeOwner: async (newOwner,sender) => {
                                            const method = contract.methods.changeOwner(newOwner)
                                            const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                            const estimateGas = await method.estimateGas({from: sender})
                                            const gasPrice = await web3.eth.getGasPrice()
                                            console.log("NetworkId: " + await web3.eth.net.getId())
                                            console.log("ChainId: " + await web3.eth.getChainId())
                                            return {
                                                estimateGas,
                                                gasPrice,
                                                txParams: {
                                                    gas: estimateGas,
                                                    to: addresses[netId],
                                                    data: method.encodeABI(),
                                                    from: sender,
                                                    nonce: '0x' + nonce,
                                                },
                                            }
                                        },
                                // 
                                        changeStorekeeper: async (newStorekeeper,sender) => {
                                            const method = contract.methods.changeStorekeeper(newStorekeeper)
                                            const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                            const estimateGas = await method.estimateGas({from: sender})
                                            const gasPrice = await web3.eth.getGasPrice()
                                            console.log("NetworkId: " + await web3.eth.net.getId())
                                            console.log("ChainId: " + await web3.eth.getChainId())
                                            return {
                                                estimateGas,
                                                gasPrice,
                                                txParams: {
                                                    gas: estimateGas,
                                                    to: addresses[netId],
                                                    data: method.encodeABI(),
                                                    from: sender,
                                                    nonce: '0x' + nonce,
                                                },
                                            }
                                        },
                                // 
                                        queryApplications: () => contract.methods.queryApplications().call(),
                                // 
                                        queryApplication: (
                                                    appId
                                            ) => contract.methods.queryApplication(
                                                    appId
                                            ).call(),
                                // 
                                        sendApplicaiton: async (appId,in_symbol,in_add_amount,sender) => {
                                            const method = contract.methods.sendApplicaiton(appId,in_symbol,in_add_amount)
                                            const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                            const estimateGas = await method.estimateGas({from: sender})
                                            const gasPrice = await web3.eth.getGasPrice()
                                            console.log("NetworkId: " + await web3.eth.net.getId())
                                            console.log("ChainId: " + await web3.eth.getChainId())
                                            return {
                                                estimateGas,
                                                gasPrice,
                                                txParams: {
                                                    gas: estimateGas,
                                                    to: addresses[netId],
                                                    data: method.encodeABI(),
                                                    from: sender,
                                                    nonce: '0x' + nonce,
                                                },
                                            }
                                        },
                                // 
                                        acceptApplicaiton: async (appId,sender) => {
                                            const method = contract.methods.acceptApplicaiton(appId)
                                            const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                            const estimateGas = await method.estimateGas({from: sender})
                                            const gasPrice = await web3.eth.getGasPrice()
                                            console.log("NetworkId: " + await web3.eth.net.getId())
                                            console.log("ChainId: " + await web3.eth.getChainId())
                                            return {
                                                estimateGas,
                                                gasPrice,
                                                txParams: {
                                                    gas: estimateGas,
                                                    to: addresses[netId],
                                                    data: method.encodeABI(),
                                                    from: sender,
                                                    nonce: '0x' + nonce,
                                                },
                                            }
                                        },
                                // 
                                        rejectApplicaiton: async (appId,sender) => {
                                            const method = contract.methods.rejectApplicaiton(appId)
                                            const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                            const estimateGas = await method.estimateGas({from: sender})
                                            const gasPrice = await web3.eth.getGasPrice()
                                            console.log("NetworkId: " + await web3.eth.net.getId())
                                            console.log("ChainId: " + await web3.eth.getChainId())
                                            return {
                                                estimateGas,
                                                gasPrice,
                                                txParams: {
                                                    gas: estimateGas,
                                                    to: addresses[netId],
                                                    data: method.encodeABI(),
                                                    from: sender,
                                                    nonce: '0x' + nonce,
                                                },
                                            }
                                        },
                                // 
                                        revokeApplicaiton: async (appId,sender) => {
                                            const method = contract.methods.revokeApplicaiton(appId)
                                            const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                            const estimateGas = await method.estimateGas({from: sender})
                                            const gasPrice = await web3.eth.getGasPrice()
                                            console.log("NetworkId: " + await web3.eth.net.getId())
                                            console.log("ChainId: " + await web3.eth.getChainId())
                                            return {
                                                estimateGas,
                                                gasPrice,
                                                txParams: {
                                                    gas: estimateGas,
                                                    to: addresses[netId],
                                                    data: method.encodeABI(),
                                                    from: sender,
                                                    nonce: '0x' + nonce,
                                                },
                                            }
                                        },
                                // 
                                        queryRedeemApplications: () => contract.methods.queryRedeemApplications().call(),
                                // 
                                        queryRedeemApplication: (
                                                    appId
                                            ) => contract.methods.queryRedeemApplication(
                                                    appId
                                            ).call(),
                                // 
                                        sendRedeemApplicaiton: async (appId,in_symbol,in_add_amount,sender) => {
                                            const method = contract.methods.sendRedeemApplicaiton(appId,in_symbol,in_add_amount)
                                            const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                            const estimateGas = await method.estimateGas({from: sender})
                                            const gasPrice = await web3.eth.getGasPrice()
                                            console.log("NetworkId: " + await web3.eth.net.getId())
                                            console.log("ChainId: " + await web3.eth.getChainId())
                                            return {
                                                estimateGas,
                                                gasPrice,
                                                txParams: {
                                                    gas: estimateGas,
                                                    to: addresses[netId],
                                                    data: method.encodeABI(),
                                                    from: sender,
                                                    nonce: '0x' + nonce,
                                                },
                                            }
                                        },
                                // 
                                        acceptRedeemApplicaiton: async (appId,sender) => {
                                            const method = contract.methods.acceptRedeemApplicaiton(appId)
                                            const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                            const estimateGas = await method.estimateGas({from: sender})
                                            const gasPrice = await web3.eth.getGasPrice()
                                            console.log("NetworkId: " + await web3.eth.net.getId())
                                            console.log("ChainId: " + await web3.eth.getChainId())
                                            return {
                                                estimateGas,
                                                gasPrice,
                                                txParams: {
                                                    gas: estimateGas,
                                                    to: addresses[netId],
                                                    data: method.encodeABI(),
                                                    from: sender,
                                                    nonce: '0x' + nonce,
                                                },
                                            }
                                        },
                                // 
                                        rejectRedeemApplicaiton: async (appId,sender) => {
                                            const method = contract.methods.rejectRedeemApplicaiton(appId)
                                            const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                            const estimateGas = await method.estimateGas({from: sender})
                                            const gasPrice = await web3.eth.getGasPrice()
                                            console.log("NetworkId: " + await web3.eth.net.getId())
                                            console.log("ChainId: " + await web3.eth.getChainId())
                                            return {
                                                estimateGas,
                                                gasPrice,
                                                txParams: {
                                                    gas: estimateGas,
                                                    to: addresses[netId],
                                                    data: method.encodeABI(),
                                                    from: sender,
                                                    nonce: '0x' + nonce,
                                                },
                                            }
                                        },
                                // 
                                        revokeRedeemApplicaiton: async (appId,sender) => {
                                            const method = contract.methods.revokeRedeemApplicaiton(appId)
                                            const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                            const estimateGas = await method.estimateGas({from: sender})
                                            const gasPrice = await web3.eth.getGasPrice()
                                            console.log("NetworkId: " + await web3.eth.net.getId())
                                            console.log("ChainId: " + await web3.eth.getChainId())
                                            return {
                                                estimateGas,
                                                gasPrice,
                                                txParams: {
                                                    gas: estimateGas,
                                                    to: addresses[netId],
                                                    data: method.encodeABI(),
                                                    from: sender,
                                                    nonce: '0x' + nonce,
                                                },
                                            }
                                        },
                        }
                    },
                    networks: {
  "5777": {
    "events": {},
    "links": {},
    "address": "0xcA5457DD09a979f68B4b06ff05d2BaafD479BdDE",
    "transactionHash": "0x57a7706a8435c3e4ebbb22ab3b518dc3c7d2c29f3a63718068e167a6137cee35"
  },
  "80001": {
    "events": {},
    "links": {},
    "address": "0x444feF26dfF978ebdDF47436288A6069CCd48dEc",
    "transactionHash": "0x1dacae9d79e86dc19d7214be566cf5fab1aeb306801de16a1b3de28e615e0689"
  }
},
                    Registry: () => {
                        const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "getOwners",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      }
    ],
    "name": "addOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      }
    ],
    "name": "deleteOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "symbol",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "contract_address",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "contract_name",
        "type": "string"
      }
    ],
    "name": "addToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "contract_address",
        "type": "address"
      }
    ],
    "name": "setDeprecated",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllTokens",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      },
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      },
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      },
      {
        "internalType": "bool[]",
        "name": "",
        "type": "bool[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "symbol",
        "type": "string"
      }
    ],
    "name": "getTokenBySymbol",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "getSymbolByToken",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];
                        const addresses = {
                                "5777": "0xcA5457DD09a979f68B4b06ff05d2BaafD479BdDE",
                                "80001": "0x444feF26dfF978ebdDF47436288A6069CCd48dEc",
                        }
                        const contract = new web3.eth.Contract(abi, addresses[netId]);
                        return {
                                // 
                                // 
                                        getOwners: () => contract.methods.getOwners().call(),
                                // 
                                        addOwner: async (owner_,sender) => {
                                            const method = contract.methods.addOwner(owner_)
                                            const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                            const estimateGas = await method.estimateGas({from: sender})
                                            const gasPrice = await web3.eth.getGasPrice()
                                            console.log("NetworkId: " + await web3.eth.net.getId())
                                            console.log("ChainId: " + await web3.eth.getChainId())
                                            return {
                                                estimateGas,
                                                gasPrice,
                                                txParams: {
                                                    gas: estimateGas,
                                                    to: addresses[netId],
                                                    data: method.encodeABI(),
                                                    from: sender,
                                                    nonce: '0x' + nonce,
                                                },
                                            }
                                        },
                                // 
                                        deleteOwner: async (owner_,sender) => {
                                            const method = contract.methods.deleteOwner(owner_)
                                            const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                            const estimateGas = await method.estimateGas({from: sender})
                                            const gasPrice = await web3.eth.getGasPrice()
                                            console.log("NetworkId: " + await web3.eth.net.getId())
                                            console.log("ChainId: " + await web3.eth.getChainId())
                                            return {
                                                estimateGas,
                                                gasPrice,
                                                txParams: {
                                                    gas: estimateGas,
                                                    to: addresses[netId],
                                                    data: method.encodeABI(),
                                                    from: sender,
                                                    nonce: '0x' + nonce,
                                                },
                                            }
                                        },
                                // 
                                        addToken: async (symbol,contract_address,contract_name,sender) => {
                                            const method = contract.methods.addToken(symbol,contract_address,contract_name)
                                            const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                            const estimateGas = await method.estimateGas({from: sender})
                                            const gasPrice = await web3.eth.getGasPrice()
                                            console.log("NetworkId: " + await web3.eth.net.getId())
                                            console.log("ChainId: " + await web3.eth.getChainId())
                                            return {
                                                estimateGas,
                                                gasPrice,
                                                txParams: {
                                                    gas: estimateGas,
                                                    to: addresses[netId],
                                                    data: method.encodeABI(),
                                                    from: sender,
                                                    nonce: '0x' + nonce,
                                                },
                                            }
                                        },
                                // 
                                        setDeprecated: async (contract_address,sender) => {
                                            const method = contract.methods.setDeprecated(contract_address)
                                            const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                            const estimateGas = await method.estimateGas({from: sender})
                                            const gasPrice = await web3.eth.getGasPrice()
                                            console.log("NetworkId: " + await web3.eth.net.getId())
                                            console.log("ChainId: " + await web3.eth.getChainId())
                                            return {
                                                estimateGas,
                                                gasPrice,
                                                txParams: {
                                                    gas: estimateGas,
                                                    to: addresses[netId],
                                                    data: method.encodeABI(),
                                                    from: sender,
                                                    nonce: '0x' + nonce,
                                                },
                                            }
                                        },
                                // 
                                        getAllTokens: () => contract.methods.getAllTokens().call(),
                                // 
                                        getTokenBySymbol: (
                                                    symbol
                                            ) => contract.methods.getTokenBySymbol(
                                                    symbol
                                            ).call(),
                                // 
                                        getSymbolByToken: (
                                                    token
                                            ) => contract.methods.getSymbolByToken(
                                                    token
                                            ).call(),
                        }
                    },
        }
        return {
            sendSignedTransaction,
            infra,
            tokens: {
                    ABT: (rootSymbol) => {
                        const abi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol_",
        "type": "string"
      },
      {
        "internalType": "string[]",
        "name": "spec_",
        "type": "string[]"
      },
      {
        "internalType": "uint256[]",
        "name": "spec_types_",
        "type": "uint256[]"
      },
      {
        "internalType": "string[]",
        "name": "spec_vals_",
        "type": "string[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "in_account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "in_amount",
        "type": "uint256"
      }
    ],
    "name": "burnToken",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "changeOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "in_account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "in_amount",
        "type": "uint256"
      }
    ],
    "name": "emitToken",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "spec",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      },
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
                        const bytecode = {
  "object": "60806040523480156200001157600080fd5b506040516200273b3803806200273b833981810160405281019062000037919062000680565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600790805190602001906200008f929190620000ff565b508360089080519060200190620000a8929190620000ff565b508260019080519060200190620000c192919062000190565b508060029080519060200190620000da92919062000190565b508160039080519060200190620000f3929190620001f7565b50505050505062000808565b8280546200010d90620007d2565b90600052602060002090601f0160209004810192826200013157600085556200017d565b82601f106200014c57805160ff19168380011785556200017d565b828001600101855582156200017d579182015b828111156200017c5782518255916020019190600101906200015f565b5b5090506200018c919062000249565b5090565b828054828255906000526020600020908101928215620001e4579160200282015b82811115620001e3578251829080519060200190620001d2929190620000ff565b5091602001919060010190620001b1565b5b509050620001f3919062000268565b5090565b82805482825590600052602060002090810192821562000236579160200282015b828111156200023557825182559160200191906001019062000218565b5b50905062000245919062000249565b5090565b5b80821115620002645760008160009055506001016200024a565b5090565b5b808211156200028c576000818162000282919062000290565b5060010162000269565b5090565b5080546200029e90620007d2565b6000825580601f10620002b25750620002d3565b601f016020900490600052602060002090810190620002d2919062000249565b5b50565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200033f82620002f4565b810181811067ffffffffffffffff8211171562000361576200036062000305565b5b80604052505050565b600062000376620002d6565b905062000384828262000334565b919050565b600067ffffffffffffffff821115620003a757620003a662000305565b5b620003b282620002f4565b9050602081019050919050565b60005b83811015620003df578082015181840152602081019050620003c2565b83811115620003ef576000848401525b50505050565b60006200040c620004068462000389565b6200036a565b9050828152602081018484840111156200042b576200042a620002ef565b5b62000438848285620003bf565b509392505050565b600082601f830112620004585762000457620002ea565b5b81516200046a848260208601620003f5565b91505092915050565b600067ffffffffffffffff82111562000491576200049062000305565b5b602082029050602081019050919050565b600080fd5b6000620004be620004b88462000473565b6200036a565b90508083825260208201905060208402830185811115620004e457620004e3620004a2565b5b835b818110156200053257805167ffffffffffffffff8111156200050d576200050c620002ea565b5b8086016200051c898262000440565b85526020850194505050602081019050620004e6565b5050509392505050565b600082601f830112620005545762000553620002ea565b5b815162000566848260208601620004a7565b91505092915050565b600067ffffffffffffffff8211156200058d576200058c62000305565b5b602082029050602081019050919050565b6000819050919050565b620005b3816200059e565b8114620005bf57600080fd5b50565b600081519050620005d381620005a8565b92915050565b6000620005f0620005ea846200056f565b6200036a565b90508083825260208201905060208402830185811115620006165762000615620004a2565b5b835b818110156200064357806200062e8882620005c2565b84526020840193505060208101905062000618565b5050509392505050565b600082601f830112620006655762000664620002ea565b5b815162000677848260208601620005d9565b91505092915050565b600080600080600060a086880312156200069f576200069e620002e0565b5b600086015167ffffffffffffffff811115620006c057620006bf620002e5565b5b620006ce8882890162000440565b955050602086015167ffffffffffffffff811115620006f257620006f1620002e5565b5b620007008882890162000440565b945050604086015167ffffffffffffffff811115620007245762000723620002e5565b5b62000732888289016200053c565b935050606086015167ffffffffffffffff811115620007565762000755620002e5565b5b62000764888289016200064d565b925050608086015167ffffffffffffffff811115620007885762000787620002e5565b5b62000796888289016200053c565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620007eb57607f821691505b60208210811415620008025762000801620007a3565b5b50919050565b611f2380620008186000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a9059cbb11610066578063a9059cbb146102ae578063d1df306c146102de578063dd62ed3e1461030e578063f448c9bc1461033e576100f5565b806370a082311461021457806395d89b4114610244578063a457c2d714610262578063a6f9dae114610292576100f5565b806323b872dd116100d357806323b872dd146101665780632e6f213614610196578063313ce567146101c657806339509351146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b61010261035e565b60405161010f9190611371565b60405180910390f35b610132600480360381019061012d919061142c565b6103f0565b60405161013f9190611487565b60405180910390f35b610150610413565b60405161015d91906114b1565b60405180910390f35b610180600480360381019061017b91906114cc565b61041d565b60405161018d9190611487565b60405180910390f35b6101b060048036038101906101ab919061142c565b61044c565b6040516101bd9190611487565b60405180910390f35b6101ce6104f1565b6040516101db919061153b565b60405180910390f35b6101fe60048036038101906101f9919061142c565b6104fa565b60405161020b9190611487565b60405180910390f35b61022e60048036038101906102299190611556565b610531565b60405161023b91906114b1565b60405180910390f35b61024c61057a565b6040516102599190611371565b60405180910390f35b61027c6004803603810190610277919061142c565b61060c565b6040516102899190611487565b60405180910390f35b6102ac60048036038101906102a79190611556565b610683565b005b6102c860048036038101906102c3919061142c565b610754565b6040516102d59190611487565b60405180910390f35b6102f860048036038101906102f3919061142c565b610777565b6040516103059190611487565b60405180910390f35b61032860048036038101906103239190611583565b61081c565b60405161033591906114b1565b60405180910390f35b6103466108a3565b6040516103559392919061178d565b60405180910390f35b60606007805461036d90611808565b80601f016020809104026020016040519081016040528092919081815260200182805461039990611808565b80156103e65780601f106103bb576101008083540402835291602001916103e6565b820191906000526020600020905b8154815290600101906020018083116103c957829003601f168201915b5050505050905090565b6000806103fb610ab1565b9050610408818585610ab9565b600191505092915050565b6000600654905090565b600080610428610ab1565b9050610435858285610c84565b610440858585610d10565b60019150509392505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d4906118ac565b60405180910390fd5b6104e78383610f94565b6001905092915050565b60006012905090565b600080610505610ab1565b9050610526818585610517858961081c565b61052191906118fb565b610ab9565b600191505092915050565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606008805461058990611808565b80601f01602080910402602001604051908101604052809291908181526020018280546105b590611808565b80156106025780601f106105d757610100808354040283529160200191610602565b820191906000526020600020905b8154815290600101906020018083116105e557829003601f168201915b5050505050905090565b600080610617610ab1565b90506000610625828661081c565b90508381101561066a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610661906119c3565b60405180910390fd5b6106778286868403610ab9565b60019250505092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610711576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610708906118ac565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008061075f610ab1565b905061076c818585610d10565b600191505092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610808576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ff906118ac565b60405180910390fd5b61081283836110f5565b6001905092915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b606080606060016003600282805480602002602001604051908101604052809291908181526020016000905b8282101561097b5783829060005260206000200180546108ee90611808565b80601f016020809104026020016040519081016040528092919081815260200182805461091a90611808565b80156109675780601f1061093c57610100808354040283529160200191610967565b820191906000526020600020905b81548152906001019060200180831161094a57829003601f168201915b5050505050815260200190600101906108cf565b505050509250818054806020026020016040519081016040528092919081815260200182805480156109cc57602002820191906000526020600020905b8154815260200190600101908083116109b8575b5050505050915080805480602002602001604051908101604052809291908181526020016000905b82821015610aa0578382906000526020600020018054610a1390611808565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3f90611808565b8015610a8c5780601f10610a6157610100808354040283529160200191610a8c565b820191906000526020600020905b815481529060010190602001808311610a6f57829003601f168201915b5050505050815260200190600101906109f4565b505050509050925092509250909192565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2090611a55565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9090611ae7565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610c7791906114b1565b60405180910390a3505050565b6000610c90848461081c565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610d0a5781811015610cfc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf390611b53565b60405180910390fd5b610d098484848403610ab9565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7790611be5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610df0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de790611c77565b60405180910390fd5b610dfb8383836112ce565b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7990611d09565b60405180910390fd5b818103600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f1791906118fb565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f7b91906114b1565b60405180910390a3610f8e8484846112d3565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611004576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ffb90611d75565b60405180910390fd5b611010600083836112ce565b806006600082825461102291906118fb565b9250508190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461107891906118fb565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516110dd91906114b1565b60405180910390a36110f1600083836112d3565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611165576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115c90611e07565b60405180910390fd5b611171826000836112ce565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156111f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ef90611e99565b60405180910390fd5b818103600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600660008282546112509190611eb9565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516112b591906114b1565b60405180910390a36112c9836000846112d3565b505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156113125780820151818401526020810190506112f7565b83811115611321576000848401525b50505050565b6000601f19601f8301169050919050565b6000611343826112d8565b61134d81856112e3565b935061135d8185602086016112f4565b61136681611327565b840191505092915050565b6000602082019050818103600083015261138b8184611338565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006113c382611398565b9050919050565b6113d3816113b8565b81146113de57600080fd5b50565b6000813590506113f0816113ca565b92915050565b6000819050919050565b611409816113f6565b811461141457600080fd5b50565b60008135905061142681611400565b92915050565b6000806040838503121561144357611442611393565b5b6000611451858286016113e1565b925050602061146285828601611417565b9150509250929050565b60008115159050919050565b6114818161146c565b82525050565b600060208201905061149c6000830184611478565b92915050565b6114ab816113f6565b82525050565b60006020820190506114c660008301846114a2565b92915050565b6000806000606084860312156114e5576114e4611393565b5b60006114f3868287016113e1565b9350506020611504868287016113e1565b925050604061151586828701611417565b9150509250925092565b600060ff82169050919050565b6115358161151f565b82525050565b6000602082019050611550600083018461152c565b92915050565b60006020828403121561156c5761156b611393565b5b600061157a848285016113e1565b91505092915050565b6000806040838503121561159a57611599611393565b5b60006115a8858286016113e1565b92505060206115b9858286016113e1565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b600061160b826112d8565b61161581856115ef565b93506116258185602086016112f4565b61162e81611327565b840191505092915050565b60006116458383611600565b905092915050565b6000602082019050919050565b6000611665826115c3565b61166f81856115ce565b935083602082028501611681856115df565b8060005b858110156116bd578484038952815161169e8582611639565b94506116a98361164d565b925060208a01995050600181019050611685565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611704816113f6565b82525050565b600061171683836116fb565b60208301905092915050565b6000602082019050919050565b600061173a826116cf565b61174481856116da565b935061174f836116eb565b8060005b83811015611780578151611767888261170a565b975061177283611722565b925050600181019050611753565b5085935050505092915050565b600060608201905081810360008301526117a7818661165a565b905081810360208301526117bb818561172f565b905081810360408301526117cf818461165a565b9050949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061182057607f821691505b60208210811415611834576118336117d9565b5b50919050565b7f546869732066756e6374696f6e206973207265737472696374656420746f207460008201527f686520636f6e74726163742773206f776e657200000000000000000000000000602082015250565b60006118966033836112e3565b91506118a18261183a565b604082019050919050565b600060208201905081810360008301526118c581611889565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611906826113f6565b9150611911836113f6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611946576119456118cc565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006119ad6025836112e3565b91506119b882611951565b604082019050919050565b600060208201905081810360008301526119dc816119a0565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611a3f6024836112e3565b9150611a4a826119e3565b604082019050919050565b60006020820190508181036000830152611a6e81611a32565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ad16022836112e3565b9150611adc82611a75565b604082019050919050565b60006020820190508181036000830152611b0081611ac4565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611b3d601d836112e3565b9150611b4882611b07565b602082019050919050565b60006020820190508181036000830152611b6c81611b30565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611bcf6025836112e3565b9150611bda82611b73565b604082019050919050565b60006020820190508181036000830152611bfe81611bc2565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611c616023836112e3565b9150611c6c82611c05565b604082019050919050565b60006020820190508181036000830152611c9081611c54565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611cf36026836112e3565b9150611cfe82611c97565b604082019050919050565b60006020820190508181036000830152611d2281611ce6565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611d5f601f836112e3565b9150611d6a82611d29565b602082019050919050565b60006020820190508181036000830152611d8e81611d52565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611df16021836112e3565b9150611dfc82611d95565b604082019050919050565b60006020820190508181036000830152611e2081611de4565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611e836022836112e3565b9150611e8e82611e27565b604082019050919050565b60006020820190508181036000830152611eb281611e76565b9050919050565b6000611ec4826113f6565b9150611ecf836113f6565b925082821015611ee257611ee16118cc565b5b82820390509291505056fea26469706673582212201be3ac291d091f22977bb685d6d5b8d14b7eea6591bd414f28ee12941482077564736f6c634300080c0033"
};
                        return {
                                    deploy: async (
                                            name_,
                                            symbol_,
                                            spec_,
                                            spec_types_,
                                            spec_vals_,
                                        sender) => {
                                            const contract = new web3.eth.Contract(abi);
                                            const deploy = contract.deploy({
                                                data:'0x' + bytecode.object,
                                                arguments: [
                                                        name_,
                                                        symbol_,
                                                        spec_,
                                                        spec_types_,
                                                        spec_vals_
                                                ]
                                            }).encodeABI();
                                            const count = await web3.eth.getTransactionCount(sender);
                                            let transactionObject = {
                                                data: deploy,
                                                from: sender,
                                                nonce: count
                                            };
                                            const estimate = await web3.eth.estimateGas(transactionObject);
                                            transactionObject.gas = estimate;
                                            console.log("NetworkId: " + await web3.eth.net.getId())
                                            console.log("ChainId: " + await web3.eth.getChainId())
                                            return {
                                                estimateGas: estimate,
                                                gasPrice: await web3.eth.getGasPrice(),
                                                txParams: transactionObject,
                                            } 
                                        },
                                            allowance: (
                                                        owner,
                                                        spender
                                                ) => contract.methods.allowance(
                                                        owner,
                                                        spender
                                                ).call(),
                                            approve: async (spender,amount,sender) => {
                                                const t = await infra.Registry().getTokenBySymbol(rootSymbol)
                                                const contract = new web3.eth.Contract(abi, addresses[netId]);
                                                const method = contract.methods.approve(spender,amount)
                                                const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                                const estimateGas = await method.estimateGas({from: sender})
                                                const gasPrice = await web3.eth.getGasPrice()
                                                console.log("NetworkId: " + await web3.eth.net.getId())
                                                console.log("ChainId: " + await web3.eth.getChainId())
                                                return {
                                                    estimateGas,
                                                    gasPrice,
                                                    txParams: {
                                                        gas: estimateGas,
                                                        to: addresses[netId],
                                                        data: method.encodeABI(),
                                                        from: sender,
                                                        nonce: '0x' + nonce,
                                                    },
                                                }
                                            },
                                            balanceOf: (
                                                        account
                                                ) => contract.methods.balanceOf(
                                                        account
                                                ).call(),
                                            burnToken: async (in_account,in_amount,sender) => {
                                                const t = await infra.Registry().getTokenBySymbol(rootSymbol)
                                                const contract = new web3.eth.Contract(abi, addresses[netId]);
                                                const method = contract.methods.burnToken(in_account,in_amount)
                                                const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                                const estimateGas = await method.estimateGas({from: sender})
                                                const gasPrice = await web3.eth.getGasPrice()
                                                console.log("NetworkId: " + await web3.eth.net.getId())
                                                console.log("ChainId: " + await web3.eth.getChainId())
                                                return {
                                                    estimateGas,
                                                    gasPrice,
                                                    txParams: {
                                                        gas: estimateGas,
                                                        to: addresses[netId],
                                                        data: method.encodeABI(),
                                                        from: sender,
                                                        nonce: '0x' + nonce,
                                                    },
                                                }
                                            },
                                            changeOwner: async (newOwner,sender) => {
                                                const t = await infra.Registry().getTokenBySymbol(rootSymbol)
                                                const contract = new web3.eth.Contract(abi, addresses[netId]);
                                                const method = contract.methods.changeOwner(newOwner)
                                                const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                                const estimateGas = await method.estimateGas({from: sender})
                                                const gasPrice = await web3.eth.getGasPrice()
                                                console.log("NetworkId: " + await web3.eth.net.getId())
                                                console.log("ChainId: " + await web3.eth.getChainId())
                                                return {
                                                    estimateGas,
                                                    gasPrice,
                                                    txParams: {
                                                        gas: estimateGas,
                                                        to: addresses[netId],
                                                        data: method.encodeABI(),
                                                        from: sender,
                                                        nonce: '0x' + nonce,
                                                    },
                                                }
                                            },
                                            decimals: () => contract.methods.decimals().call(),
                                            decreaseAllowance: async (spender,subtractedValue,sender) => {
                                                const t = await infra.Registry().getTokenBySymbol(rootSymbol)
                                                const contract = new web3.eth.Contract(abi, addresses[netId]);
                                                const method = contract.methods.decreaseAllowance(spender,subtractedValue)
                                                const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                                const estimateGas = await method.estimateGas({from: sender})
                                                const gasPrice = await web3.eth.getGasPrice()
                                                console.log("NetworkId: " + await web3.eth.net.getId())
                                                console.log("ChainId: " + await web3.eth.getChainId())
                                                return {
                                                    estimateGas,
                                                    gasPrice,
                                                    txParams: {
                                                        gas: estimateGas,
                                                        to: addresses[netId],
                                                        data: method.encodeABI(),
                                                        from: sender,
                                                        nonce: '0x' + nonce,
                                                    },
                                                }
                                            },
                                            emitToken: async (in_account,in_amount,sender) => {
                                                const t = await infra.Registry().getTokenBySymbol(rootSymbol)
                                                const contract = new web3.eth.Contract(abi, addresses[netId]);
                                                const method = contract.methods.emitToken(in_account,in_amount)
                                                const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                                const estimateGas = await method.estimateGas({from: sender})
                                                const gasPrice = await web3.eth.getGasPrice()
                                                console.log("NetworkId: " + await web3.eth.net.getId())
                                                console.log("ChainId: " + await web3.eth.getChainId())
                                                return {
                                                    estimateGas,
                                                    gasPrice,
                                                    txParams: {
                                                        gas: estimateGas,
                                                        to: addresses[netId],
                                                        data: method.encodeABI(),
                                                        from: sender,
                                                        nonce: '0x' + nonce,
                                                    },
                                                }
                                            },
                                            increaseAllowance: async (spender,addedValue,sender) => {
                                                const t = await infra.Registry().getTokenBySymbol(rootSymbol)
                                                const contract = new web3.eth.Contract(abi, addresses[netId]);
                                                const method = contract.methods.increaseAllowance(spender,addedValue)
                                                const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                                const estimateGas = await method.estimateGas({from: sender})
                                                const gasPrice = await web3.eth.getGasPrice()
                                                console.log("NetworkId: " + await web3.eth.net.getId())
                                                console.log("ChainId: " + await web3.eth.getChainId())
                                                return {
                                                    estimateGas,
                                                    gasPrice,
                                                    txParams: {
                                                        gas: estimateGas,
                                                        to: addresses[netId],
                                                        data: method.encodeABI(),
                                                        from: sender,
                                                        nonce: '0x' + nonce,
                                                    },
                                                }
                                            },
                                            name: () => contract.methods.name().call(),
                                            spec: () => contract.methods.spec().call(),
                                            symbol: () => contract.methods.symbol().call(),
                                            totalSupply: () => contract.methods.totalSupply().call(),
                                            transfer: async (to,amount,sender) => {
                                                const t = await infra.Registry().getTokenBySymbol(rootSymbol)
                                                const contract = new web3.eth.Contract(abi, addresses[netId]);
                                                const method = contract.methods.transfer(to,amount)
                                                const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                                const estimateGas = await method.estimateGas({from: sender})
                                                const gasPrice = await web3.eth.getGasPrice()
                                                console.log("NetworkId: " + await web3.eth.net.getId())
                                                console.log("ChainId: " + await web3.eth.getChainId())
                                                return {
                                                    estimateGas,
                                                    gasPrice,
                                                    txParams: {
                                                        gas: estimateGas,
                                                        to: addresses[netId],
                                                        data: method.encodeABI(),
                                                        from: sender,
                                                        nonce: '0x' + nonce,
                                                    },
                                                }
                                            },
                                            transferFrom: async (from,to,amount,sender) => {
                                                const t = await infra.Registry().getTokenBySymbol(rootSymbol)
                                                const contract = new web3.eth.Contract(abi, addresses[netId]);
                                                const method = contract.methods.transferFrom(from,to,amount)
                                                const nonce = (await web3.eth.getTransactionCount(sender)).toString(16);
                                                const estimateGas = await method.estimateGas({from: sender})
                                                const gasPrice = await web3.eth.getGasPrice()
                                                console.log("NetworkId: " + await web3.eth.net.getId())
                                                console.log("ChainId: " + await web3.eth.getChainId())
                                                return {
                                                    estimateGas,
                                                    gasPrice,
                                                    txParams: {
                                                        gas: estimateGas,
                                                        to: addresses[netId],
                                                        data: method.encodeABI(),
                                                        from: sender,
                                                        nonce: '0x' + nonce,
                                                    },
                                                }
                                            },
                        }
                    }
            }
        }
    }
}
// contract.methods.createDoc(this.web3.utils.fromAscii(certId), data, holder)