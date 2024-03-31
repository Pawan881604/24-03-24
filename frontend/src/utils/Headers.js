function get_headers() {
  const config = {
    withCredentials: true,
  };
  return config;
}
function multi_methods_headers() {
  const config = {
    withCredentials: true,
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
  };
  return config;
}

export { get_headers, multi_methods_headers };
