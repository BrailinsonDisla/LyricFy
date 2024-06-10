const Login = () => {
  const handleClick = async () => {
    await fetch("/api/authorize", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => (window.location.href = data.url));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <p>Nada</p>
          </div>

          <div className="col-8">
            <button onClick={handleClick}> Login </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
