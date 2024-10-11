import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = () => {
      const urlParams = new URLSearchParams(window.location.hash.slice(1));
      const idToken = urlParams.get('id_token');
      if (idToken) {
        // Store the ID token securely (e.g., in memory for SPA)
        // Redirect to a protected route
        navigate('/dashboard');
      } else {
        // Handle error
        navigate('/login');
      }
    };

    handleCallback();
  }, [navigate]);

  return <div>Processing login...</div>;
};

export default Callback;