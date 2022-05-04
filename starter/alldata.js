function AllData() {
  const ctx = React.useContext(UserContext)
  return (
    <Card
      txt="dark"
      bgcolor="danger"
      header="All Data in Store"
      body={
        <>
          <div>{JSON.stringify(ctx)}</div>
        </>
      }
    />
  )
}
