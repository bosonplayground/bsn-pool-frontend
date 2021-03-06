export default [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokensContract',
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
        indexed: false,
        internalType: 'address',
        name: '_newBosonRouter',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_triggeredBy',
        type: 'address'
      }
    ],
    name: 'LogBosonRouterSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_newCancelFaultPeriod',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_triggeredBy',
        type: 'address'
      }
    ],
    name: 'LogCancelFaultPeriodChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_newCashier',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_triggeredBy',
        type: 'address'
      }
    ],
    name: 'LogCashierSet',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_newComplainPeriod',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_triggeredBy',
        type: 'address'
      }
    ],
    name: 'LogComplainPeriodChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_triggeredBy',
        type: 'address'
      }
    ],
    name: 'LogExpirationTriggered',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_triggeredBy',
        type: 'address'
      }
    ],
    name: 'LogFinalizeVoucher',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: '_type',
        type: 'uint8'
      }
    ],
    name: 'LogFundsReleased',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: '_promiseId',
        type: 'bytes32'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_nonce',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_seller',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_validFrom',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_validTo',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_idx',
        type: 'uint256'
      }
    ],
    name: 'LogPromiseCreated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      }
    ],
    name: 'LogVoucherComplain',
    type: 'event'
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
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_issuer',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_holder',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: '_promiseId',
        type: 'bytes32'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_correlationId',
        type: 'uint256'
      }
    ],
    name: 'LogVoucherDelivered',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      }
    ],
    name: 'LogVoucherFaultCancel',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_holder',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: '_promiseId',
        type: 'bytes32'
      }
    ],
    name: 'LogVoucherRedeemed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      }
    ],
    name: 'LogVoucherRefunded',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenIdSupply',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_issuer',
        type: 'address'
      }
    ],
    name: 'LogVoucherSetFaultCancel',
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
    name: 'MASK_NF_INDEX',
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
    name: 'MASK_TYPE',
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
    name: 'TYPE_NF_BIT',
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
    name: 'bosonRouterAddress',
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
    name: 'cancelFaultPeriod',
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
    inputs: [],
    name: 'complainPeriod',
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
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'ordersPromise',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
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
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'paymentDetails',
    outputs: [
      {
        internalType: 'uint8',
        name: 'paymentMethod',
        type: 'uint8'
      },
      {
        internalType: 'address',
        name: 'addressTokenPrice',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'addressTokenDeposits',
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
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'promiseKeys',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    name: 'promises',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'promiseId',
        type: 'bytes32'
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'seller',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'validFrom',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'validTo',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'depositSe',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'depositBu',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'idx',
        type: 'uint256'
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
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'tokenNonces',
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
    name: 'tokensContract',
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
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'typeCounters',
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
    name: 'typeId',
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
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'vouchersStatus',
    outputs: [
      {
        internalType: 'uint8',
        name: 'status',
        type: 'uint8'
      },
      {
        internalType: 'bool',
        name: 'isPaymentReleased',
        type: 'bool'
      },
      {
        internalType: 'bool',
        name: 'isDepositsReleased',
        type: 'bool'
      },
      {
        internalType: 'uint256',
        name: 'complainPeriodStart',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'cancelFaultPeriodStart',
        type: 'uint256'
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
        internalType: 'address',
        name: '_seller',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_validFrom',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_validTo',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_depositSe',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_depositBu',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_quantity',
        type: 'uint256'
      }
    ],
    name: 'createTokenSupplyID',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
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
        internalType: 'uint8',
        name: '_paymentMethod',
        type: 'uint8'
      },
      {
        internalType: 'address',
        name: '_tokenPrice',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_tokenDeposits',
        type: 'address'
      }
    ],
    name: 'createPaymentMethod',
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
        internalType: 'address',
        name: '_holder',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_correlationId',
        type: 'uint256'
      }
    ],
    name: 'fillOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_issuer',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_tokenIdSupply',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_qty',
        type: 'uint256'
      }
    ],
    name: 'burnSupplyOnPause',
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
      },
      {
        internalType: 'address',
        name: '_msgSender',
        type: 'address'
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
      },
      {
        internalType: 'address',
        name: '_msgSender',
        type: 'address'
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
      },
      {
        internalType: 'address',
        name: '_msgSender',
        type: 'address'
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
      },
      {
        internalType: 'address',
        name: '_msgSender',
        type: 'address'
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
    name: 'cancelOrFaultVoucherSet',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
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
    name: 'setPaymentReleased',
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
    name: 'setDepositsReleased',
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
    name: 'triggerExpiration',
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
    name: 'triggerFinalizeVoucher',
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
        name: '_newSeller',
        type: 'address'
      }
    ],
    name: 'setSupplyHolderOnTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bosonRouterAddress',
        type: 'address'
      }
    ],
    name: 'setBosonRouterAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_cashierAddress',
        type: 'address'
      }
    ],
    name: 'setCashierAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_complainPeriod',
        type: 'uint256'
      }
    ],
    name: 'setComplainPeriod',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_cancelFaultPeriod',
        type: 'uint256'
      }
    ],
    name: 'setCancelFaultPeriod',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_idx',
        type: 'uint256'
      }
    ],
    name: 'getPromiseKey',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      }
    ],
    name: 'getIdSupplyFromVoucher',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'pure',
    type: 'function',
    constant: true
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      }
    ],
    name: 'getPromiseIdFromVoucherId',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenSupplyId',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      }
    ],
    name: 'getRemQtyForSupply',
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
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdSupply',
        type: 'uint256'
      }
    ],
    name: 'getOrderCosts',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      },
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
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdSupply',
        type: 'uint256'
      }
    ],
    name: 'getBuyerOrderCosts',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      },
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
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdSupply',
        type: 'uint256'
      }
    ],
    name: 'getSellerDeposit',
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
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      }
    ],
    name: 'getVoucherStatus',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8'
      },
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      },
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
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      }
    ],
    name: 'getVoucherHolder',
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
        internalType: 'uint256',
        name: '_tokenIdSupply',
        type: 'uint256'
      }
    ],
    name: 'getSupplyHolder',
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
        internalType: 'uint256',
        name: '_tokenIdSupply',
        type: 'uint256'
      }
    ],
    name: 'getVoucherPriceToken',
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
        internalType: 'uint256',
        name: '_tokenIdSupply',
        type: 'uint256'
      }
    ],
    name: 'getVoucherDepositToken',
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
        internalType: 'uint256',
        name: '_tokenIdSupply',
        type: 'uint256'
      }
    ],
    name: 'getVoucherPaymentMethod',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      }
    ],
    name: 'isInValidityPeriod',
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
    inputs: [
      {
        internalType: 'uint256',
        name: '_tokenIdVoucher',
        type: 'uint256'
      }
    ],
    name: 'isVoucherTransferable',
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
  }
]
