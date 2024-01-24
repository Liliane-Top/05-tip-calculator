export function Bill({ amount, onSetAmount }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder="Insert amount"
        value={amount}
        onChange={(e) => onSetAmount(Number(e.target.value))}
      />
    </div>
  );
}
