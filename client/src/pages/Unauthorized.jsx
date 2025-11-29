const Unauthorized = () => (
    <div style={{ textAlign: 'center', marginTop: '5rem', color: '#e74c3c' }}>
      <h1>403 - Unauthorized</h1>
      <p>You do not have permission to view this page.</p>
      <a href="/login">Go to Login</a>
    </div>
  );
  export default Unauthorized;