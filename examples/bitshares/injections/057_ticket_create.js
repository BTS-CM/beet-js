import { injection } from '../../lib/injection.js'

let run = async function () { 
  await injection(
    "InjectExample.057", // script name
    "BTS_TEST", // chain
    "wss://testnet.xbts.io/ws", // wss url
    "ticket_create", // operation name
    {}
  );
}

/*
run();
*/

