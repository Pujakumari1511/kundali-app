"use client";

import { useForm, FormProvider } from "react-hook-form";
import { InputField } from "./InputField";
import { GenderField } from "./GenderField";
import { Button } from "@/components/ui/button";
import { BirthDetails } from "./BirthDetails";
import { LocationField } from "./LocationField";

type FormData = {
  name: string;
  phone: string;
  place: string;
  gender: string;
  birthDetails: string;
  locationField: string;
};

export const KundaliForm: React.FC = () => {
  const methods = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div >
        <FormProvider {...methods}>
          <h3 className="text-[#FF9933] text-lg py-4">Fill the form to get your kundli</h3>
          <p className="text-xs pb-2">Name & Gender</p>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="text-xs [&_*]:text-xs">
                <InputField
                  fieldId="name"
                  label="Name"
                  placeholder="Your name here"
                  required={"Name is Required"}
                  register={methods.register}
                  error={methods.formState.errors.name}
                />
                <InputField
                  fieldId="phone"
                  label="Phone"
                  placeholder="Your phone no."
                  required={"Provide phone number"}
                  register={methods.register}
                  error={methods.formState.errors.phone}
                />
                <GenderField name="gender" />
                
                <p className="text-[#000000] text-xs py-3">Birth Details</p>
                <BirthDetails />
                <InputField
                  fieldId="place"
                  label="Place"
                  register={methods.register}
                />
                <div className="flex justify-center pb-3">
                  <p><b>OR</b></p>
                </div>
                <LocationField label="Longitude" namePrefix="longitude" directions={['E', 'W']} maxDegrees={180} />
                <LocationField label="Latitude" namePrefix="latitude" directions={['N', 'S']} maxDegrees={90} />
                <InputField fieldId="message" label="Comment" placeholder="Type message" register={methods.register} />
                <div className="grid grid-cols-2 w-full mt-10">
                  <div className="bg-[#F1F1F1] flex flex-col justify-center items-start px-4">
                    <p className="text-[#666666]">Rs.1560</p>
                    <p className="text-[#CB0000] font-bold">Rs.1100/-</p>
                  </div>

                  <div className=" flex items-center justify-center">
                    <Button
                      type="submit"
                      className="bg-[#FF9933] hover:bg-[none] text-white font-bold text-center w-full h-full py-3 rounded-none cursor-pointer"
                    >
                      Pay
                    </Button>
                  </div>
                </div>
            </form>  
      </FormProvider>
    </div>
    
  );
};
