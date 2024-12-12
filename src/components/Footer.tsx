import { LinkedinIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full py-6 bg-secondary/90 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-gray-400 text-sm">
            Created by{" "}
            <a
              href="https://linkedin.com/in/usman9999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              UsmanYousaf <LinkedinIcon className="w-4 h-4" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};