angular
  .module('app')
  .component('tokensPage', {
    templateUrl: 'pages/tokens/tokens.html',
    controller: TokensPageController,
    controllerAs: 'vm',
    bindings: {}
  });

function TokensPageController() {
  var vm = this;

  vm.peers = [{
    name: 'Peer A',
    blocks: [{
      number: 1,
      nonce: 81281,
      data: {
        txs: [{value: 200, from: 'Mark', to: 'Sergio'}, {value: 10, from: 'Mark', to: 'Jeff'}]
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    }, {
      number: 2,
      nonce: 6566,
      data: {
        txs: [{value: 10, from: 'Sergio', to: 'Jeff'}]
      }
    }, {
      number: 3,
      nonce: 127890,
      data: {
        txs: [{value: 5, from: 'Jeff', to: 'Wendy'}]
      }
    }, {
      number: 4,
      nonce: 34543,
      data: {
        txs: [{value: 20, from: 'Sergio', to: 'Mark'}, {value: 5, from: 'Sergio', to: 'Wendy'}]
      }
    }, {
      number: 5,
      nonce: 19074,
      data: {
        txs: []
      }
    }]
  }, {
    name: 'Peer B',
    blocks: [{
      number: 1,
      nonce: 81281,
      data: {
        txs: [{value: 200, from: 'Mark', to: 'Sergio'}, {value: 10, from: 'Mark', to: 'Jeff'}]
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    }, {
      number: 2,
      nonce: 6566,
      data: {
        txs: [{value: 10, from: 'Sergio', to: 'Jeff'}]
      }
    }, {
      number: 3,
      nonce: 127890,
      data: {
        txs: [{value: 5, from: 'Jeff', to: 'Wendy'}]
      }
    }, {
      number: 4,
      nonce: 34543,
      data: {
        txs: [{value: 20, from: 'Sergio', to: 'Mark'}, {value: 5, from: 'Sergio', to: 'Wendy'}]
      }
    }, {
      number: 5,
      nonce: 19074,
      data: {
        txs: []
      }
    }]
  }, {
    name: 'Peer C',
    blocks: [{
      number: 1,
      nonce: 81281,
      data: {
        txs: [{value: 200, from: 'Mark', to: 'Sergio'}, {value: 10, from: 'Mark', to: 'Jeff'}]
      },
      prev: '0000000000000000000000000000000000000000000000000000000000000000'
    }, {
      number: 2,
      nonce: 6566,
      data: {
        txs: [{value: 10, from: 'Sergio', to: 'Jeff'}]
      }
    }, {
      number: 3,
      nonce: 127890,
      data: {
        txs: [{value: 5, from: 'Jeff', to: 'Wendy'}]
      }
    }, {
      number: 4,
      nonce: 34543,
      data: {
        txs: [{value: 20, from: 'Sergio', to: 'Mark'}, {value: 5, from: 'Sergio', to: 'Wendy'}]
      }
    }, {
      number: 5,
      nonce: 19074,
      data: {
        txs: []
      }
    }]
  }];
}
