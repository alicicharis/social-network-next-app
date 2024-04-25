import { Box, Home, Settings, Users2 } from "lucide-react";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const Navigation = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 xl:w-[200px] flex-col border-r bg-background sm:flex">
      <nav className="h-full flex-col space-y-5 pt-5">
        <div className="flex justify-center items-center pb-3">
          <Link
            href="#"
            className="group"
            // className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Box className="h-10 w-10 transition-all group-hover:scale-110" />
            <span className="sr-only">Logo</span>
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="flex justify-center xl:justify-start items-center xl:pl-3 space-x-2 cursor-pointer"
          >
            <Home className="h-6 w-6" />
            <p className="hidden xl:block">Home</p>
            <span className="sr-only">Home</span>
          </Link>
        </div>
        <div>
          <Link
            href="#"
            className="flex justify-center xl:justify-start items-center xl:pl-3 space-x-2 cursor-pointer"
          >
            <Users2 className="h-6 w-6" />
            <p className="hidden xl:block">Friends</p>
            <span className="sr-only">Friends</span>
          </Link>
        </div>
      </nav>
      <nav className="mt-auto flex flex-col xl:items-start items-center pb-5">
        <div>
          <Link
            href="#"
            className="flex justify-center xl:justify-start items-center xl:pl-3 space-x-2 cursor-pointer"
          >
            <Settings className="h-6 w-6" />
            <p className="hidden xl:block">Settings</p>
            <span className="sr-only">Settings</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Navigation;
