angular
  .module('app')
  .component('coinbasePage', {
    templateUrl: 'pages/coinbase/coinbase.html',
    controller: CoinbasePageController,
    controllerAs: 'vm',
    bindings: {}
  });

function CoinbasePageController() {
  var vm = this;

  vm.peers = [{
    name: 'Peer A',
    blocks: [{
      number: 1,
      nonce: 41240,
      data: {
        coinbase: {value: 100, to: 'Mark'},
        txs: []
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    }, {
      number: 2,
      nonce: 63474,
      data: {
        coinbase: {value: 100, to: 'Mark'},
        txs: [{value: 10, from: 'Mark', to: 'Sergio'}]
      }
    }, {
      number: 3,
      nonce: 61656,
      data: {
        txs: [{value: 5, from: 'Sergio', to: 'Jeff'}]
      }
    }, {
      number: 4,
      nonce: 9479,
      data: {
        txs: [{value: 20, from: 'Mark', to: 'Wendy'}, {value: 5, from: 'Mark', to: 'Jeff'}
        ]
      }
    }, {
      number: 5,
      nonce: 18790,
      data: {
        txs: [{value: 65, from: 'Mark', to: 'Wendy'}]
      }
    }]
  }, {
    name: 'Peer B',
    blocks: [{
      number: 1,
      nonce: 41240,
      data: {
        coinbase: {value: 100, to: 'Mark'},
        txs: []
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    }, {
      number: 2,
      nonce: 63474,
      data: {
        coinbase: {value: 100, to: 'Mark'},
        txs: [{value: 10, from: 'Mark', to: 'Sergio'}]
      }
    }, {
      number: 3,
      nonce: 61656,
      data: {
        txs: [{value: 5, from: 'Sergio', to: 'Jeff'}]
      }
    }, {
      number: 4,
      nonce: 9479,
      data: {
        txs: [{value: 20, from: 'Mark', to: 'Wendy'}, {value: 5, from: 'Mark', to: 'Jeff'}
        ]
      }
    }, {
      number: 5,
      nonce: 18790,
      data: {
        txs: [{value: 65, from: 'Mark', to: 'Wendy'}]
      }
    }]
  }, {
    name: 'Peer C',
    blocks: [{
      number: 1,
      nonce: 41240,
      data: {
        coinbase: {value: 100, to: 'Mark'},
        txs: []
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    }, {
      number: 2,
      nonce: 63474,
      data: {
        coinbase: {value: 100, to: 'Mark'},
        txs: [{value: 10, from: 'Mark', to: 'Sergio'}]
      }
    }, {
      number: 3,
      nonce: 61656,
      data: {
        txs: [{value: 5, from: 'Sergio', to: 'Jeff'}]
      }
    }, {
      number: 4,
      nonce: 9479,
      data: {
        txs: [{value: 20, from: 'Mark', to: 'Wendy'}, {value: 5, from: 'Mark', to: 'Jeff'}
        ]
      }
    }, {
      number: 5,
      nonce: 18790,
      data: {
        txs: [{value: 65, from: 'Mark', to: 'Wendy'}]
      }
    }]
  }];
}
