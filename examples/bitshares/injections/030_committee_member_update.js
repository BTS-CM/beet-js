import { injection } from '../../lib/injection.js'

let run = async function () { 
  await injection(
    "InjectExample.030", // script name
    "BTS_TEST", // chain
    "wss://testnet.xbts.io/ws", // wss url
    "committee_member_update", // operation name
    {
      committee_member: "1.2.",
      committee_member_account: "1.2.",
      new_url: ""
    }
  );
}

run();
