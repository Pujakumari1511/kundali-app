"use client";

import { useForm, FormProvider } from "react-hook-form";
import { InputField } from "./InputField";
import { GenderField } from "./GenderField";
import { Button } from "@/components/ui/button";
import { BirthDetails } from "./BirthDetails";
import { LocationField } from "./LocationField";
import { useState } from "react";
import { KundliModal } from "./KundliModalView";

type FormData = {
  name: string;
  phone: string;
  place: string;
  gender: string;
  birthDetails: string;
  locationField: string;
};

export const KundaliForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [svgContent, setSvgContent] = useState('');
  const [currentUserName, setCurrentUserName] = useState('');
  const methods = useForm<FormData>();

  const handlePayButtonClick = async (formData: FormData) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/kundli', {
         method: 'GET',
            headers: {
              'Content-Type': 'application/json',
          }
      });
      const apiResponse = await response.json();
      if (apiResponse.success && apiResponse.data?.output) {
        setSvgContent(apiResponse.data.output);
        setCurrentUserName(formData.name || 'User');
        setIsModalOpen(true);  

      } else {
        console.error('Failed to get kundli data');
        alert('Failed to generate kundli. Please try again.');
      }
    } catch (error) {
        console.error('Error downloading kundli:', error);
        alert('Error occurred while generating kundli. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (data: FormData, e: any) => {
    handlePayButtonClick(data);
    methods.reset();
  };

   const onError = (errors: any) => {
    // Show user which fields are missing
    const missingFields = Object.keys(errors);
    alert(`Please fill required fields: ${missingFields.join(', ')}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSvgContent('');
    setCurrentUserName('');
  }

  return (
    <div >
        <FormProvider {...methods}>
          <h3 className="text-[#FF9933] text-lg py-4">Fill the form to get your kundli</h3>
          <p className="text-xs pb-2">Name & Gender</p>
            <form onSubmit={methods.handleSubmit(onSubmit, onError)} className="text-xs [&_*]:text-xs">
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
                      {isLoading ? 'Generating...' : 'Pay'}
                    </Button>
                  </div>
                </div>
            </form>  
      </FormProvider>
      <KundliModal
        isOpen={isModalOpen}
        onClose={closeModal}
        svgContent={svgContent}
        userName={currentUserName}
      />
    </div>
    
  );
};
