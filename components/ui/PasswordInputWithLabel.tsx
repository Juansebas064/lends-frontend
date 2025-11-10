'use client';

import { useState } from "react";
import InputWithLabel from "./InputWithLabel"
import VisibilityIcon from "../Icons/VisibilityIcon";

const PasswordInputWithLabel = ({ label, id, required = true, flexItemAttributes="grow shrink-0" }: { label: string; id: string, required?: boolean, flexItemAttributes?: string }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative w-full">
      <InputWithLabel label={label} id={id} type={showPassword ? "text" : "password"} required={required} flexItemAttributes={flexItemAttributes} />
      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute h-(--input-height) pr-2 pl-2 right-0 bottom-0 text-sm text-foreground cursor-pointer">
        <VisibilityIcon height="24px" fill="var(--color-foreground)" isVisible={!showPassword}/>
      </button>
    </div>
  )
}

export default PasswordInputWithLabel