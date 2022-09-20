import { injection } from '../../lib/injection.js'

let run = async function () { 
  await injection(
    "InjectExample.056", // script name
    "BTS_TEST", // chain
    "wss://testnet.xbts.io/ws", // wss url
    "custom_authority_delete", // operation name
    {}
  );
}

/*
run();
*/

