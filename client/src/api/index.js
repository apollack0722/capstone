export async function getUserOrders() {    
         
  try {
    const response = await fetch(`http://localhost:3001/api/orders/$${ localStorage.getItem("username") }/cart`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const routines = await response.json();
    return routines;

  } catch (error) {
    throw error;
  }
}