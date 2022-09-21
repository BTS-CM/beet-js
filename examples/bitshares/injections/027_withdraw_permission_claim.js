import { injection } from '../../lib/injection.js'

let run = async function () { 
  await injection(
    "InjectExample.027", // script name
    "BTS_TEST", // chain
    "wss://testnet.xbts.io/ws", // wss url
    "withdraw_permission_claim", // operation name
    {
      withdraw_permission: "1.x.x",
      withdraw_from_account: "1.2.",
      withdraw_to_account: "1.2.",
      amount_to_withdraw: {
        amount: 1,
        asset_id: "1.3."
      },
      memo: ""
    }
  );
}

run();
