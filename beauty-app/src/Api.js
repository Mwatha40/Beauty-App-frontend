const API_URL = 'http://127.0.0.1:5555';   // Ensure this matches your backend URL

// Product API
export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  const data = await response.json();
  return data;
};

export const getProduct = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  const data = await response.json();
  return data;
};

export const addProduct = async (product) => {
  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
};

export const updateProduct = async (id, product) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
};

export const deleteProduct = async (id) => {
  await fetch(`${API_URL}/products/${id}`, { method: 'DELETE' });
};

// Cart API
export const getCartItems = async () => {
  const response = await fetch(`${API_URL}/cart`);
  const data = await response.json();
  return data;
};

export const addToCart = async (item) => {
  const response = await fetch(`${API_URL}/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  const data = await response.json();
  return data;
};

export const updateCartItem = async (id, item) => {
  const response = await fetch(`${API_URL}/cart/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  const data = await response.json();
  return data;
};

export const removeFromCart = async (id) => {
  await fetch(`${API_URL}/cart/${id}`, { method: 'DELETE' });
};

// User API
export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  const data = await response.json();
  return data;
};

export const getUser = async (id) => {
  const response = await fetch(`${API_URL}/users/${id}`);
  const data = await response.json();
  return data;
};

export const addUser = async (user) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

export const updateUser = async (id, user) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

export const deleteUser = async (id) => {
  await fetch(`${API_URL}/users/${id}`, { method: 'DELETE' });
};

// Auth API
// Login function
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const data = await response.json();
    localStorage.setItem('token', data.token); // Store the JWT token
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error; // Re-throw to handle it where this function is called
  }
};

// Register function
export const registerUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    const data = await response.json();
    // Return both status and data
    return {
      data: data,
      status: response.status
    };
  } catch (error) {
    console.error('Error registering:', error);
    throw error; // Re-throw to handle it where this function is called
  }
};

// Logout function
export const logoutUser = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/logout`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`, // Correctly format the Authorization header
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Logout failed');
    }

    localStorage.removeItem('token'); // Remove the JWT token on logout
    return await response.json();
  } catch (error) {
    console.error('Error logging out:', error);
    throw error; // Re-throw to handle it where this function is called
  }
};

  

