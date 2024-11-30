// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DownloadIcon } from "@radix-ui/react-icons";
// import { Check } from "lucide-react";

// enum PopularPlanType {
//   NO = 0,
//   YES = 1,
// }

interface DownloadProps {
  title: string;
  // popular: PopularPlanType;
  price: number;
  description: string;
  fileName: string;
  alternateDownloads: { [key: string]: string };
}

const downloadUrl =
  "https://github.com/tmhntr/tauri-migraine-log/releases/latest/download/";

const downloadList: DownloadProps[] = [
  {
    title: "MacOS",
    // popular: 0,
    price: 0,
    description: "Download the MacOS version of the app.",
    fileName: "migrainelog_2.0.0_x64.dmg",
    alternateDownloads: {
      zip: "migrainelog_2.0.0_x64.zip",
      appleSilicon: "migrainelog_2.0.0_arm64.dmg",
      intel: "migrainelog_2.0.0_x64.dmg",
    },
  },
  {
    title: "Windows",
    // popular: 1,
    price: 0,
    description: "Download the Windows version of the app.",
    fileName: "migrainelog_2.0.0_x64-setup.exe",
    alternateDownloads: {
      msi: "migrainelog_2.0.0_x64_en-US.ms",
    },
  },
  {
    title: "Linux",
    // popular: 0,
    price: 0,
    description: "Download the Linux version of the app.",
    fileName: "migrainelog_2.0.0_amd64.deb",
    alternateDownloads: {
      rpm: "migrainelog-2.0.0-1.x86_64.rpm",
      appimage: "migrainelog_2.0.0_amd64.AppImage",
    },
  },
];

export const Download = () => {
  return (
    <section id="download" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Download the latest version of the app for desktop.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {downloadList.map((download: DownloadProps) => (
          <Card key={download.title}>
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {download.title}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${download.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription>{download.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <a href={`${downloadUrl}${download.fileName}`} download>
                <Button className="w-full">Download</Button>
              </a>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex flex-col space-y-2 w-full items-start">
              {/* <Check className="text-primary" /> */}
              <span className="text-muted-foreground">
                Alternate downloads:
              </span>
              <ul className="space-y-1">
                {Object.keys(download.alternateDownloads).map((alt: string) => (
                  <li key={alt} className="items-center space-x-2 list-item">
                    <a
                      href={`${downloadUrl}${download.alternateDownloads[alt]}`}
                      download
                      className="flex items-center space-x-1 group hover:underline"
                    >
                      <span>{alt}</span><DownloadIcon className="invisible group-hover:visible" />
                    </a>
                  </li>
                ))}
              </ul>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
