function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const ctx = React.useContext(UserContext)
  return (
    <Card
      txt="dark"
      bgcolor="danger"
      header="Sign In"
      status={status}
      body={
        <>
          Email address:
          <br />
          <input
            type="input"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <br />
          Password:
          <br />
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <br />
          <button type="submit" className="btn btn-light" onClick="#/deposit/">
            Sign In
          </button>
        </>
      }
    />
  )
}
