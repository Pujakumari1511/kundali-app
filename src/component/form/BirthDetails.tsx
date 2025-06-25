import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useFormContext } from "react-hook-form";

const generateOptions = (start: number, end: number, pad = false) =>
  Array.from({ length: end - start + 1 }, (_, i) => {
    const val = start + i;
    return pad ? val.toString().padStart(2, "0") : val.toString();
  });

export const BirthDetails: React.FC = () => {
  const { register, setValue, watch } = useFormContext();

  const birthDay = watch("birthDay");
  const birthMonth = watch("birthMonth");
  const birthYear = watch("birthYear");
  const birthHour = watch("birthHour");
  const birthMinute = watch("birthMinute");
  const birthPeriod = watch("birthPeriod");

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 border border-gray-300 mb-3 rounded">
        <Label className="bg-[#F4E6CD80] col-span-1 text-gray-700 p-2">Date</Label>
        <div className="flex gap-1">
          <Select onValueChange={(value) => setValue("birthDay", value)} value={birthDay}>
            <SelectTrigger className="w-19 border-none">
              <SelectValue placeholder="DD" />
            </SelectTrigger>
            <SelectContent>
              {generateOptions(1, 31, true).map((day) => (
                <SelectItem key={day} value={day}>
                  {day}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setValue("birthMonth", value)} value={birthMonth}>
            <SelectTrigger className="w-23 border-none">
              <SelectValue placeholder="MM" />
            </SelectTrigger>
            <SelectContent>
              {[
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ].map((month) => (
                <SelectItem key={month} value={month}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setValue("birthYear", value)} value={birthYear}>
            <SelectTrigger className="w-24 border-none">
              <SelectValue placeholder="YYYY" />
            </SelectTrigger>
            <SelectContent>
              {generateOptions(1950, new Date().getFullYear() ).map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-2 mb-3">
        {/* Time Box */}
        <div className="grid grid-cols-5 border border-gray-300 rounded">
          <Label className="bg-[#F4E6CD80] col-span-2 text-gray-700 p-2">Time</Label>
            
              <Select onValueChange={(value) => setValue("birthHour", value)} value={birthHour}>
                <SelectTrigger className="w-17 border-none">
                  <SelectValue placeholder="HH" />
                </SelectTrigger>
                <SelectContent>
                  {generateOptions(1, 12, true).map((hour) => (
                    <SelectItem key={hour} value={hour}>
                      {hour}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select> 
              <Select onValueChange={(value) => setValue("birthMinute", value)} value={birthMinute}>
                <SelectTrigger className="w-22 border-none">
                  <SelectValue placeholder="MM" />
                </SelectTrigger>
                <SelectContent>
                  {generateOptions(0, 59, true).map((minute) => (
                    <SelectItem key={minute} value={minute}>
                      {minute}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
        </div>
        {/* AM/PM Box */}
        <div className="flex items-center border border-gray-300 rounded bg-gray-100">
          <ToggleGroup
            type="single"
            className="flex"
            value={birthPeriod}
            onValueChange={(value) => {
              if (value) setValue("birthPeriod", value);
            }}  
          >
            <ToggleGroupItem value="AM" className="px-2 py-2 data-[state=on]:bg-blue-500 data-[state=on]:text-white">
              AM
              
            </ToggleGroupItem>
            <ToggleGroupItem value="PM" className="px-2 py-2 data-[state=on]:bg-blue-500 data-[state=on]:text-white">
              PM
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        {/* Hidden fields to register for validation */}
        <input type="hidden" {...register("birthDay", { required: "Day is required" })} />
        <input type="hidden" {...register("birthMonth", { required: "Month is required" })} />
        <input type="hidden" {...register("birthYear", { required: "Year is required" })} />
        <input type="hidden" {...register("birthHour", { required: "Hour is required" })} />
        <input type="hidden" {...register("birthMinute", { required: "Minute is required" })} />
        <input type="hidden" {...register("birthPeriod", { required: "AM/PM is required" })} />
      </div>
    </div>
  );
};
