function Home() {
  return (
    <Card
      txtcolor="white"
      bgcolor="danger"
      header="Bad Bank Application"
      title="Welcome to the bank"
      text="You came to the right place! Here to serve"
      body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
    />
  )
}
