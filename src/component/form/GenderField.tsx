import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";

type GenderFieldProps = {
  name: string;
};

export const GenderField: React.FC<GenderFieldProps> = ({ name }) => {
  const { register, setValue, watch, formState: { errors } } = useFormContext();
  const selectedGender = watch(name);

  return (
    <div>
      {errors[name] && (
        <p className="text-sm text-red-500">{errors[name]?.message as string}</p>
      )}
      <div className={`grid grid-cols-3 gap-4 mb-3 rounded border ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}>
        <Label className="bg-[#F4E6CD80] col-span-1 text-gray-700 p-2">Gender</Label>
        <RadioGroup
          value={selectedGender}
          onValueChange={(value) => setValue(name, value)}
          className="flex gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem className="cursor-pointer" value="male" id="male" />
            <Label className="flex items-center space-x-2" htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem className="cursor-pointer" value="female" id="female" />
            <Label className="flex items-center space-x-2" htmlFor="female">Female</Label>
          </div>
        </RadioGroup>
        <input
          type="hidden"
          {...register(name, { required: "Gender is required" })}
        />
        
      </div>
    </div>
    
  );
};
