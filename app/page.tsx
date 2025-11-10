import Button from "@/components/Button"
import InputWithLabel from "@/components/InputWithLabel"

const FirstSetup = () => {
  async function registerFormData(formData: FormData) {
    'use server'

  }

  return (
      <section className="pt-20 pb-20 flex flex-col items-center gap-6 pl-5 pr-5">
        <h1 className="text-4xl font-semibold mb-6">Configuración inicial</h1>
        <form action={registerFormData} className="w-[35%] min-w-[300px] flex flex-col items-center gap-4">

          <InputWithLabel label="Nombre" id="first-name" fillWidth type={"text"} />

          <InputWithLabel label="Apellido" id="last-name" fillWidth type={"text"} />

          <InputWithLabel label="Ocupación" id="occupation" fillWidth type={"text"} />

          <InputWithLabel label="Teléfono" id="phone" fillWidth type={"number"} />
          <InputWithLabel label="Correo electrónico" id="email" fillWidth type={"email"} />
          <InputWithLabel label="Contraseña" id="password" fillWidth type={"password"} />
          
          <div>
            <label htmlFor="role">Rol</label>
            <select id="role" name="role" className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">Selecciona un rol</option>
              <option value="admin">Admin</option>
              <option value="user">Usuario</option>
            </select>
          </div>

          <Button text="Registrar" type="submit" primary={true} />
        </form>
      </section>
  )
}

export default FirstSetup