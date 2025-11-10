const InputWithLabel = ({ label, id, type = "text", required = true, flexItemAttributes="grow shrink basis-full" }: { label: string, id: string; type: string, required?: boolean, flexItemAttributes?: string }) => {
  return (
    <div className={`m-0 p-0 flex flex-col items-start gap-1 ${flexItemAttributes}`}>
      <label htmlFor={id} className="font-medium text-sm">
        <span>{label}</span>
        {required &&
          <span className="text-primary"> *</span>
        }
      </label>
      <input type={type} id={id} name={id} className={`text-sm h-(--input-height) w-full p-3 border border-muted rounded-(--radius) focus:outline-1 focus:outline-foreground bg-surface`} required={required} />
    </div>
  )
}

export default InputWithLabel