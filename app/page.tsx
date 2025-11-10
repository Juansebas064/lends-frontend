import RegisterUserForm from "@/components/RegisterUserForm"

const FirstSetup = () => {

  return (
      <section className="min-h-screen pt-20 pb-20 flex flex-col items-center justify-center gap-6">
        <div className="w-[90%] max-w-[500px]">
          <h1 className="mb-6">Configuración inicial</h1>
          <p className="mb-12 text-center">
            Para comenzar a utilizar la aplicación, por favor registra el usuario administrador, este usuario tendrá control total sobre las funcionalidades de Lends.
          </p>
          <RegisterUserForm/>
        </div>
      </section>
  )
}

export default FirstSetup