export function OutPut({ amount, tip }) {
  return (
    <div>
      <h2>
        You pay ${amount + tip} (${amount} + ${tip} tip)
      </h2>
    </div>
  );
}
