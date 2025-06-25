import { Label } from "@/components/ui/label";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useFormContext } from "react-hook-form";

const generateOptions = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => i.toString().padStart(2, "0"));

type Props = {
  label: string;
  namePrefix: string; // like 'latitude' or 'longitude'
  directions: [string, string]; // like ['N', 'S'] or ['E', 'W']
  maxDegrees: number; // 90 for latitude, 180 for longitude
};

export const LocationField: React.FC<Props> = ({ label, namePrefix, directions, maxDegrees }) => {
  const { register, setValue, watch } = useFormContext();

  const deg = watch(`${namePrefix}Deg`);
  const min = watch(`${namePrefix}Min`);
  const sec = watch(`${namePrefix}Sec`);
  const dir = watch(`${namePrefix}Dir`);

  return (
    <div>
      <div className="flex gap-1 mb-3">
        <div className="grid grid-cols-5 border border-gray-300 rounded">
          <Label className="bg-[#F4E6CD80] col-span-2 text-gray-700 p-2">{label}</Label>
            {/* Degrees */}
            <Select onValueChange={(value) => setValue(`${namePrefix}Deg`, value)} value={deg}>
              <SelectTrigger className="w-19 border-none cursor-pointer">
                <SelectValue placeholder="Deg" />
              </SelectTrigger>
              <SelectContent>
                {generateOptions(0, maxDegrees).map((val) => (
                  <SelectItem key={val} value={val}>{val}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Minutes */}
            <Select onValueChange={(value) => setValue(`${namePrefix}Min`, value)} value={min}>
              <SelectTrigger className="w-18 border-none cursor-pointer">
                <SelectValue placeholder="Min" />
              </SelectTrigger>
              <SelectContent>
                {generateOptions(0, 59).map((val) => (
                  <SelectItem key={val} value={val}>{val}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Seconds */}
            <Select onValueChange={(value) => setValue(`${namePrefix}Sec`, value)} value={sec}>
              <SelectTrigger className="w-18 border-none cursor-pointer">
                <SelectValue placeholder={`Sec`} />
              </SelectTrigger>
              <SelectContent>
                {generateOptions(0, 59).map((val) => (
                  <SelectItem key={val} value={val}>{val}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
            {/* Direction */}
            <div className="flex items-center border border-gray-300 rounded bg-gray-100">
              <ToggleGroup
                type="single"
                className="flex"
                value={dir}
                onValueChange={(value) => {
                  if (value) setValue(`${namePrefix}Dir`, value);
                }}
              >
                {directions.map((d) => (
                  <ToggleGroupItem key={d} value={d} className="p-2 cursor-pointer data-[state=on]:bg-blue-500 data-[state=on]:text-white">
                    {d}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div> 
        {/* Hidden inputs for validation */}
        <input type="hidden" {...register(`${namePrefix}Deg`, { required: "Degree is required" })} />
        <input type="hidden" {...register(`${namePrefix}Min`, { required: "Minute is required" })} />
        <input type="hidden" {...register(`${namePrefix}Sec`, { required: "Second is required" })} />
        <input type="hidden" {...register(`${namePrefix}Dir`, { required: "Direction is required" })} />
      </div>
    </div>
  );
};
