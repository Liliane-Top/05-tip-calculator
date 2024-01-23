import { useRef, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [myPercentage, setMyPercentage] = useState(0);
  const [friendPercentage, setMyFriendPercentage] = useState(0);
  const inputRef = useRef();

  function handleReset() {
    setAmount(0);
    setMyPercentage(0);
    setMyFriendPercentage(0);
    inputRef.current.value = null;
  }

  return (
    <div>
      <Bill onSetAmount={setAmount} inputRef={inputRef} />
      <Percentage onSetPercentage={setMyPercentage}>
        How did you like the service?
      </Percentage>
      <Percentage onSetPercentage={setMyFriendPercentage}>
        How did your friend like the service?
      </Percentage>
      <OutPut
        amount={amount}
        myPercentage={myPercentage}
        friendPercentage={friendPercentage}
      />
      <Reset onHandleClick={handleReset} />
    </div>
  );
}

function Bill({ onSetAmount, inputRef }) {
  return (
    <div>
      <h3>How much was the bill?</h3>
      <input
        type="text"
        placeholder="Insert amount"
        onChange={(e) => onSetAmount(e.target.value)}
        ref={inputRef}
      />
    </div>
  );
}

function Percentage({ onSetPercentage, children }) {
  return (
    <div>
      <h3>{children}</h3>
      <select onChange={(e) => onSetPercentage(e.target.value)}>
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutely amazing(20%)</option>
      </select>
    </div>
  );
}

function OutPut({ amount, myPercentage, friendPercentage }) {
  const tip =
    ((Number(myPercentage) + Number(friendPercentage)) * amount) / 100;
  const totalAmount = Number(amount) + Number(tip);
  return (
    <div>
      <h2>
        You pay ${totalAmount} (${amount} + ${tip} tip)
      </h2>
    </div>
  );
}

function Reset({ onHandleClick }) {
  return (
    <button type="reset" onClick={onHandleClick}>
      Reset
    </button>
  );
}
