import { createTransactionEvent, EventType, Finding, HandleTransaction, Network, TransactionEvent } from "forta-agent";
import provideUpdatedGuardianAgent, { EVENT_SIGNATURE, createFinding } from "./updated.guardian";
import { createTxEventWithEventLogged } from "./test.utils";


const YEARN_VAULT_ADDRESS = "0x121212";

describe("Yearn Finance Updated Guardian Tests", () => {
  let handleTransaction: HandleTransaction;  

  beforeAll(() => {
    handleTransaction = provideUpdatedGuardianAgent(YEARN_VAULT_ADDRESS);
  })

  it("should return empty findings if the expected event wasn't called", async () => {
    const txEvent: TransactionEvent = createTxEventWithEventLogged("badEvent", "0x0");

    const findings: Finding[] = await handleTransaction(txEvent);

    expect(findings).toStrictEqual([]);
  });

  it("should return empty findings if the event is not related with the specified vault", async () => {

  });

  it("should return findings when the specified vault emit the expected event", async () => {

  });
});
