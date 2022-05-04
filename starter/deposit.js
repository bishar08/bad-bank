function Deposit() {
  const [deposit, setDeposit] = React.useState(0)
  const [account, setAccount] = React.useState(0)
  const ctx = React.useContext(UserContext)

  const handleDeposit = () => {
    ctx.users[account].balance += parseInt(deposit)
    ctx.push({
      account: ctx.users[account],
      amount: deposit,
      isDeposit: true,
    })
    if (isNaN(deposit)) {
      alert('Enter a valid number')
      return false
    }
    if (deposit < 0) {
      alert('Enter a positive number')
      return false
    }

    return setDeposit(0)
  }

  return (
    <Card
      bgcolor="danger"
      txtcolor="white"
      header="Deposit"
      body={
        <>
          Balance: ${ctx.users[account].balance} <br />
          Deposit Amount:
          <br />
          <input
            type="input"
            min="0"
            className="form-control"
            id="amount"
            placeholder=" "
            value={deposit}
            onChange={(e) => setDeposit(e.currentTarget.value)}
            required
          />
          <br />
          <br />
          <button
            type="submit"
            className="btn btn-light"
            onClick={handleDeposit}
          >
            Deposit
          </button>
        </>
      }
    />
  )
}
