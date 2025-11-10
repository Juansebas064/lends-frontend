const SelectWithLabel = ({ label, id, required = true }: { label: string; id: string, fillWidth?: boolean, required?: boolean }) => {
  return (
    <div className="m-0 p-0 w-full flex flex-col items-start gap-1">
      <label htmlFor={id} className="font-medium">
        <span>{label}</span>
        {required && <span className="text-primary"> *</span>}
      </label>
      <select id={id} name={id} required={required} className="h-12 p-3 w-full border border-muted rounded-(--radius) focus:outline-1 focus:outline-foreground bg-surface">
              <option value="admin">Admin</option>
              <option value="user">Usuario</option>
            </select>
    </div>
  )
}

export default SelectWithLabel