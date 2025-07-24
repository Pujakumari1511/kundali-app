import { X, Download} from "lucide-react";
import { Button } from "@/components/ui/button";
import { KundliFormData } from "@/types/kundli";

interface KundliModalProps {
  isOpen: boolean;
  onClose: () => void;
  svgContent: string;
  formData?: KundliFormData;
}

export const KundliModal = ({isOpen, onClose, svgContent, formData}: KundliModalProps) => {
  if (!isOpen) return null;
    const handleDownload = () => {
    const svgBlob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${formData?.name || 'user'}-kundli-chart.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[100vh] ">
        {/* Header */}
        <div className="flex justify-between items-center p-2 border-b">
          <h2 className="text-xl font-bold text-[#FF9933]">
            {formData?.name}'s Kundli Chart
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        {/* SVG Content */}
        <div className="p-2 grid grid-cols-5 bg-gray-50">
          <div className="col-span-2 p-10">
              <h2 className=" text-gray-800 mb-3 text-2xl">Personal Details</h2>
            <p><b>Name:</b> {formData?.name || 'N/A'}</p>
            <p><b>Phone:</b> {formData?.phone || 'N/A'}</p>
            <p><b>Gender:</b> {formData?.gender || 'N/A'}</p>
            <p><b>Birth Date:</b> {`${formData?.birthDate}/${formData?.birthMonth}/${formData?.birthYear} ` || 'N/A'}</p>
            <p><b>Birth Time:</b> {formData?.birthHour && formData?.birthMinute && formData?.birthPeriod 
            ? `${formData.birthHour}:${formData.birthMinute} ${formData.birthPeriod}` 
            : 'N/A'}</p>
            <p><b>City:</b> {formData?.city || 'N/A'}</p>
            <p><b>State:</b> {formData?.state || 'N/A'}</p>
          </div>
          <div className="col-span-3 border rounded-lg bg-white px-6 py-4 shadow-sm"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        </div>
        <div className="p-2 border-t flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Click outside to close or download your chart
          </p>
          <div className="flex gap-2">
            <Button
              onClick={handleDownload}
              className="bg-[#FF9933] hover:bg-[#e8851f] text-white"
            >
              <Download size={16} className="mr-2" />
              Download SVG
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}