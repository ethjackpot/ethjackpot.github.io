var Web3 = require('web3');
const Eth = require('ethjs-query')
const EthContract = require('ethjs-contract')
const BN = require('bn.js');
//const abiDecoder = require('./decoder');

window.addEventListener('load', function () {

    window.BN = BN;
    // window.ABID = abiDecoder;

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        window.w3 = new Web3(web3.currentProvider);        
    } else {
        //$(".tit-p-rooms, .jackpot, .state-lot, .members, .lott-history-box").fadeOut(0);
        //$('.count-select-tick').text('Please install metamask, because the lottery does not work without it:');
        $('.transferFunds span').text('install metamask');
        $('.transferFunds').wrap('<a href="https://metamask.io/" target="_blank" class="new"></a>');
        $('.loader').fadeOut(100);
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        window.w3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/1v94rwe3hOAUlotC3M6L'));
    }

    // Now you can start your app & access web3 freely:
    startApp()
})

function startApp(web3) {


    const eth = new Eth(w3.currentProvider)
    const contract = new EthContract(eth)

     const abi =[
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "ticketsSold",
        "outputs": [
            {
                "name": "",
                "type": "uint16"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "affiliates",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "lotteryId",
                "type": "uint8"
            }
        ],
        "name": "getPlayers",
        "outputs": [
            {
                "name": "resultLength",
                "type": "uint16"
            },
            {
                "name": "",
                "type": "address[]"
            },
            {
                "name": "",
                "type": "uint16[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "requestPause",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getRomms",
        "outputs": [
            {
                "name": "active",
                "type": "bool[]"
            },
            {
                "name": "price",
                "type": "uint256[]"
            },
            {
                "name": "tickets",
                "type": "uint16[]"
            },
            {
                "name": "ticketsBought",
                "type": "uint16[]"
            },
            {
                "name": "prize",
                "type": "uint256[]"
            },
            {
                "name": "lastActivity",
                "type": "uint256[]"
            },
            {
                "name": "comission",
                "type": "uint8[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "affiliatePercent",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "lotteryId",
                "type": "uint8"
            }
        ],
        "name": "getTickets",
        "outputs": [
            {
                "name": "",
                "type": "uint8[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "ownerComission",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "needsFinalization",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "maxTickets",
        "outputs": [
            {
                "name": "",
                "type": "uint16"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "maxPercentPerPlayer",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "started",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "ticketPrice",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "state",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "page",
                "type": "uint256"
            }
        ],
        "name": "getWinners",
        "outputs": [
            {
                "name": "",
                "type": "uint256[]"
            },
            {
                "name": "",
                "type": "address[]"
            },
            {
                "name": "",
                "type": "uint256[]"
            },
            {
                "name": "",
                "type": "uint16[]"
            },
            {
                "name": "",
                "type": "uint8[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "randomBlockStart",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "lastTicketBought",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "destroy",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "roomId",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "ticketNumbers",
                "type": "uint16[]"
            }
        ],
        "name": "TicketsBought",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "lotteryId",
                "type": "uint8"
            },
            {
                "name": "tickets",
                "type": "uint16[]"
            },
            {
                "name": "referer",
                "type": "address"
            }
        ],
        "name": "buyTicket",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "lotteryId",
                "type": "uint8"
            }
        ],
        "name": "pauseLottery",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "setGasPrice",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "roomId",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "winner",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "number",
                "type": "uint16"
            }
        ],
        "name": "WinnerPicked",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "setOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "owner",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "lotteryId",
                "type": "uint8"
            },
            {
                "name": "price",
                "type": "uint256"
            },
            {
                "name": "tickets",
                "type": "uint16"
            },
            {
                "name": "timeToRefund",
                "type": "uint256"
            }
        ],
        "name": "setLotteryOptions",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "forcedestroy",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "lotteryId",
                "type": "uint8"
            }
        ],
        "name": "refund",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "finalize",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "lotteryId",
                "type": "uint8"
            }
        ],
        "name": "finalizeRoom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

    initContract(contract, abi)
}






