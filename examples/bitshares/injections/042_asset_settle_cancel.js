import { injection } from '../../lib/injection.js'

let run = async function () { 
  await injection(
    "InjectExample.042", // script name
    "BTS_TEST", // chain
    "wss://testnet.xbts.io/ws", // wss url
    "asset_settle_cancel", // operation name
    {
      settlement: "1.x.x",
      account: "1.2.",
      amount: {
        amount: 1,
        asset_id: "1.3."
      },
      extensions: []
    }
  );
}

run();
