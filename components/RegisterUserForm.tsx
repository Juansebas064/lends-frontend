import { registerAdminUserAction } from "@/app/actions/auth-actions"
import Button from "./ui/Button"
import InputWithLabel from "./ui/InputWithLabel"
import PasswordInputWithLabel from "./ui/PasswordInputWithLabel"

const RegisterUserForm = () => {
  return (
    <form action={registerAdminUserAction} className="flex flex-row flex-wrap items-center gap-4 justify-between">

          <InputWithLabel label="Nombre" id="first-name" type={"text"} flexItemAttributes="grow basis-[45%]" />

          <InputWithLabel label="Apellido" id="last-name" type={"text"} flexItemAttributes="grow basis-[45%]" />

          <InputWithLabel label="Ocupación" id="occupation" type={"text"} flexItemAttributes="grow basis-[45%]" />

          <InputWithLabel label="Teléfono" id="phone" type={"number"} flexItemAttributes="grow basis-[45%]" />

          <InputWithLabel label="Correo electrónico" id="email" type={"email"} />
          <PasswordInputWithLabel label="Contraseña" id="password" />
          <PasswordInputWithLabel label="Confirmar contraseña" id="confirm-password" />

          <div className="w-full mt-4">
            <Button text="Registrar" type="submit" primary={true} />
          </div>
        </form>
  )
}

export default RegisterUserForm