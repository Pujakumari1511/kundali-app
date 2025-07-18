import { X, Download} from "lucide-react";
import { Button } from "@/components/ui/button";

interface KundliModalProps {
  isOpen: boolean;
  onClose: () => void;
  svgContent: string;
  userName: string;
}

export const KundliModal = ({isOpen, onClose, svgContent, userName}: KundliModalProps) => {
  if (!isOpen) return null;

    const handleDownload = () => {
    const svgBlob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${userName}-kundli-chart.svg`;
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
            {userName}'s Kundli Chart
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
            <p>Name: Aarna Kumari</p>
            <p>DOB: 12.09.2024</p>
            <p>Phone: 23456778</p>
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