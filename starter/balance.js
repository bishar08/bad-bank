function Balance() {
  const [account, setAccount] = React.useState(0)
  const ctx = React.useContext(UserContext)
  return (
    <Card
      txt="dark"
      bgcolor="danger"
      header="Balance"
      status={status}
      body={
        <>
          <div>Your Balance Is: ${ctx.users[account].balance}</div>
        </>
      }
    />
  )
}
