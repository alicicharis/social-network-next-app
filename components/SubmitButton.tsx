import { useFormStatus } from "react-dom";
import { Loader2Icon } from "lucide-react";

import { Button } from "./ui/button";

const SubmitButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending && <Loader2Icon className="animate-spin w-4 h-4" />} {children}
    </Button>
  );
};

export default SubmitButton;
