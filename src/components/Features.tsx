import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "./Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Logging",
    description:
      "Log all the data you need to track your migraines, including symptoms, triggers, warning signs and treatments.",
  },
  {
    icon: <MapIcon />,
    title: "Feedback",
    description:
      "Get feedback on your curent migraine status, most common triggers and symptoms.",
  },
  {
    icon: <PlaneIcon />,
    title: "Reports",
    description:
      "Print out or send a report for your doctor, or just to keep for your own records.",
  },
  {
    icon: <GiftIcon />,
    title: "Privacy",
    description:
      "MigraineLog is a local-first application, meaning all your data stays on your device. You can enable data sync between devices over a local wifi network.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="container text-center py-24 sm:py-32">
      <h2 className="text-center text-xl lg:text-2xl font-bold mb-8">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Track your migraine episodes, symptoms and triggers with MigraineLog on
        any device. All your data stays with you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
