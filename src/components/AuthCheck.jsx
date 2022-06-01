const AuthCheck = ({ children }) => {
  // const navigate = useNavigate();
  // const [token] = useLocalStorageState("token"); // 读取token

  // useEffect(() => {
  //   console.log(token);
  //   if (token !== "admin") {
  //     navigate(`/login`);
  //   }
  // }, [navigate, token]);

  return children;
};

export default AuthCheck;
