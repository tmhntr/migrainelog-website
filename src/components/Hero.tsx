import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
// import { HeroCards } from "./HeroCards";
import { BookmarkIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import Brain from "./icons/brain";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              MigraineLog
            </span>{" "}
            symptoms and management tracker.
          </h1>
          {/* <h2 className="inline">
            Track your headaches and migraines with{" "}
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            ease.
            </span>
          </h2> */}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Keep track of your migraines and headaches with MigraineLog on
          desktop, or the web. All your data stays on your device.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a href="https://tmhntr.github.io/tauri-migraine-log/"><Button className="w-full md:w-1/3"><p>Start now!</p> <ExternalLinkIcon className="ml-2 w-5 h-5"></ExternalLinkIcon></Button></a>

          <a
            href="#features"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Read more
            <BookmarkIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        {/* <HeroCards /> */}
        <Brain />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
