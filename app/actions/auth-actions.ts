'use server'

export async function registerAdminUserAction(formData: FormData) {
  const data = {
    firstName: formData.get('first-name'),
    lastName: formData.get('last-name'),
    occupation: formData.get('occupation'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    password: formData.get('password'),
    role: "ADMIN",
  }
  const response = await fetch(`${process.env.SERVER_URL}/auth/setup-admin-user`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log('Form data submitted:', data)
  console.log('Response:', response)
}