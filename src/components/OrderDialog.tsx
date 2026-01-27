import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ReactNode, useState } from "react";

const ZOMATO_URL = "https://www.zomato.com/vadodara/pandeyji-restaurant-sayajigunj";
const SWIGGY_URL = "https://www.swiggy.com/city/vadodara/pandeyji-restaurant-sayajigunj-sayajiganj-rest123456";

interface OrderDialogProps {
  children: ReactNode;
}

const OrderDialog = ({ children }: OrderDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleOrderClick = (platform: "swiggy" | "zomato") => {
    const url = platform === "swiggy" ? SWIGGY_URL : ZOMATO_URL;
    window.open(url, "_blank");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-center">
            Choose Your Platform
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <p className="text-center text-muted-foreground mb-2">
            Where would you like to order from?
          </p>
          <Button
            size="lg"
            onClick={() => handleOrderClick("swiggy")}
            className="bg-[#fc8019] hover:bg-[#e07316] text-white font-bold py-6 text-lg"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Order with Swiggy
          </Button>
          <Button
            size="lg"
            onClick={() => handleOrderClick("zomato")}
            className="bg-[#e23744] hover:bg-[#cb2f3d] text-white font-bold py-6 text-lg"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Order with Zomato
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
