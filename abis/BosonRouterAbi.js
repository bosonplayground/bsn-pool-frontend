export default [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_voucherKernel',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_tokensContractAddress',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_fundLimitsOracle',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_cashierAddress',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_tokenIdSupply',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_seller',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_quantity',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: '_paymentType',
        type: 'uint8'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_correlationId',
        type: 'uint256'
      }
    ],
    name: 'LogOrderCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_newTokenContract',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_triggeredBy',
        type: 'address'
      }
    ],
    name: 'LogTokenContractSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'Paused',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'Unpaused',
    type: 'event'
  },
  {
    inputs: [],
    name: 'cashierAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'correlationIds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'fundLimitsOracle',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'tokensContractAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'voucherKernel',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'metadata',
        type: 'uint256[]'
      }
    ],
    name: 'requestCreateOrderETHETH',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
    payable: true
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenPriceAddress',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_tokenDepositAddress',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_tokensSent',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256'
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8'
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32'
      },
      {
        internalType: 'uint256[]',
        name: 'metadata',
        type: 'uint256[]'
      }
    ],
    name: 'requestCreateOrderTKNTKNWithPermit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenDepositAddress',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_tokensSent',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256'
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8'
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32'
      },
      {
        internalType: 'uint256[]',
        name: 'metadata',
        type: 'uint256[]'
      }
    ],
    name: 'requestCreateOrderETHTKNWithPermit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenPriceAddress',
        type: 'address'
      },
      {
        internalType: 'uint256[]',
        name: 'metadata',
        type: 'uint256[]'
      }
    ],
    name: 'requestCreateOrderTKNETH',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
    payable: true
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdSupply',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '_issuer',
        type: 'address'
      }
    ],
    name: 'requestVoucherETHETH',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
    payable: true
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdSupply',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '_issuer',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_tokensSent',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256'
      },
      {
        internalType: 'uint8',
        name: 'vPrice',
        type: 'uint8'
      },
      {
        internalType: 'bytes32',
        name: 'rPrice',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32',
        name: 'sPrice',
        type: 'bytes32'
      },
      {
        internalType: 'uint8',
        name: 'vDeposit',
        type: 'uint8'
      },
      {
        internalType: 'bytes32',
        name: 'rDeposit',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32',
        name: 'sDeposit',
        type: 'bytes32'
      }
    ],
    name: 'requestVoucherTKNTKNWithPermit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdSupply',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '_issuer',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_tokensSent',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256'
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8'
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32'
      }
    ],
    name: 'requestVoucherTKNTKNSameWithPermit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdSupply',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '_issuer',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_tokensDeposit',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256'
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8'
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32'
      }
    ],
    name: 'requestVoucherETHTKNWithPermit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
    payable: true
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdSupply',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '_issuer',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_tokensPrice',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256'
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8'
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32'
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32'
      }
    ],
    name: 'requestVoucherTKNETHWithPermit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
    payable: true
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdSupply',
        type: 'uint256'
      }
    ],
    name: 'requestCancelOrFaultVoucherSet',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      }
    ],
    name: 'redeem',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      }
    ],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      }
    ],
    name: 'complain',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      }
    ],
    name: 'cancelOrFault',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      }
    ],
    name: '_onERC721Transfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_tokenSupplyId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256'
      }
    ],
    name: '_beforeERC1155Transfer',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_tokenSupplyId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256'
      }
    ],
    name: '_onERC1155Transfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokensContractAddress',
        type: 'address'
      }
    ],
    name: 'setTokenContractAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]
