import { Card } from "@/components/ui/card";
import CertificateImage from "@/assets/certificate.png";

const CertificateDocument = () => {
  return (
    <Card className="border border-border shadow-lg overflow-hidden w-full max-w-7xl lg:flex-1">
      {/* Certificate Image */}
      <div className="w-full">
        <img 
          src={CertificateImage} 
          alt="Certificate of Completion" 
          className="w-full h-auto object-contain max-h-[80vh] sm:max-h-[85vh] lg:max-h-[90vh]"
        />
      </div>
    </Card>
  );
};

export default CertificateDocument;