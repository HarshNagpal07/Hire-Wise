import { Button } from "@/components/ui/button";
import Image from "next/image";
import { StarIcon } from "lucide-react";

export default function Home() {
  return <div>This is an Hire Wise
    <br/>
    <Button className="flex items-center gap-2">
      <StarIcon className="h-4 w-4" />
      <span className="hidden md:block">Click Me</span>
    </Button>
  </div>
}
