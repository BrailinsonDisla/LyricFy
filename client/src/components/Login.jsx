const Login = () => {

  const handleClick = async () => {
    await fetch('/api/authorize', {
      method: 'GET'
    }).then(res => res.json()).then( data => window.location.href = data.url )
  };

  return (
    <>
      <button onClick={handleClick}> Login </button>
    </>
  );
};

export default Login;
