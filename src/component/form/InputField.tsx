import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  fieldId: string;
  label: string;
  required?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  placeholder?: string;
}

export const InputField = ({ fieldId, label, required, register, error, placeholder }: InputFieldProps) => (
  <div>
    {error && <p className="text-red-500 text-sm">{error.message}</p>}
    <div className={`grid grid-cols-3 gap-4 mb-3 rounded border ${error ? 'border-red-500' : 'border-gray-300'}`}>
      <Label className="bg-[#F4E6CD80] text-gray-700 p-2 col-span-1" htmlFor={fieldId}>{label}</Label>
      <Input className="border-none col-span-2 bg-none" id={fieldId} {...register(fieldId, {required: required})} placeholder={placeholder} />
    </div>
  </div>

);