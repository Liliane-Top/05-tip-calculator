import { useState } from "react";
import { Bill } from "./Bill";
import { Reset } from "./Reset";
import { OutPut } from "./OutPut";
import { Percentage } from "./Percentage";

export function TipCaculator() {
  const [amount, setAmount] = useState("");
  const [myPercentage, setMyPercentage] = useState(0);
  const [friendPercentage, setMyFriendPercentage] = useState(0);

  const tip = (amount * ((myPercentage + friendPercentage) / 2)) / 100;

  function handleReset() {
    setAmount("");
    setMyPercentage(0);
    setMyFriendPercentage(0);
  }
  return (
    <div>
      <Bill amount={amount} onSetAmount={setAmount} />
      <Percentage percentage={myPercentage} onSetPercentage={setMyPercentage}>
        How did you like the service?
      </Percentage>
      <Percentage
        percentage={friendPercentage}
        onSetPercentage={setMyFriendPercentage}
      >
        How did your friend like the service?
      </Percentage>
      {amount > 0 && (
        <>
          <OutPut amount={amount} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
